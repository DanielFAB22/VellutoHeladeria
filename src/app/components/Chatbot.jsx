import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { askChatGpt } from "../../services/aiService.js";
import { SABORES } from "../../data/sabores.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ChatContainer = styled.div`
  position: fixed;
  bottom: 25px;
  right: 25px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-family: ${({ theme }) => theme.fonts.body};
`;

const ChatWindow = styled.div`
  width: 350px;
  height: 500px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  flex-direction: column;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 15px;

  @media (max-width: 480px) {
    width: 90vw;
    height: 70vh;
  }
`;

const ChatHeader = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 1.2rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MessageArea = styled.div`
  flex: 1;
  padding: 1.2rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #fcfcfc;
`;

const Bubble = styled.div`
  max-width: 80%;
  padding: 10px 14px;
  border-radius: 18px;
  font-size: 0.9rem;
  line-height: 1.4;
  background: ${props => props.$isUser ? props.theme.colors.primary : '#ffffff'};
  color: ${props => props.$isUser ? 'white' : props.theme.colors.text};
  align-self: ${props => props.$isUser ? 'flex-end' : 'flex-start'};
  border: ${props => props.$isUser ? 'none' : `1px solid #eee`};
  box-shadow: 0 2px 5px rgba(0,0,0,0.03);
`;

const InputArea = styled.div`
  padding: 1rem;
  border-top: 1px solid #eee;
  display: flex;
  gap: 8px;
  background: white;
`;

const StyledInput = styled.input`
  flex: 1;
  border: 1px solid #eee;
  padding: 0.8rem;
  border-radius: 12px;
  outline: none;
`;

const FloatingButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(230, 126, 34, 0.4);
`;

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    { text: "¡Hola! Soy el asistente de Velluto 🍨. ¿En qué puedo ayudarte?", sender: "bot" }
  ]);

  const scrollRef = useRef(null);

  // Animación del botón flotante
  useGSAP(() => {
    gsap.to(".btn-float", {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "sine.inOut"
    });
  }, []);

  // Animación de nuevos mensajes
  useGSAP(() => {
    if (messages.length > 1) {
      gsap.from(".last-msg", {
        opacity: 0,
        x: 20,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  }, [messages]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!inputValue.trim() || loading) return;

    const userText = inputValue;
    setInputValue("");
    const updatedMessages = [...messages, { text: userText, sender: "user" }];
    setMessages(updatedMessages);
    
    setLoading(true);

    try {
      const response = await askChatGpt(userText, SABORES);
      setMessages([...updatedMessages, { text: response, sender: "bot" }]);
    } catch (error) {
      setMessages([...updatedMessages, { text: "Error de conexión. Intenta de nuevo.", sender: "bot" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ChatContainer>
      <ChatWindow $isOpen={isOpen}>
        <ChatHeader>Velluto AI ✨</ChatHeader>
        <MessageArea ref={scrollRef}>
          {messages.map((msg, index) => (
            <Bubble 
              key={index} 
              $isUser={msg.sender === "user"}
              className={index === messages.length - 1 ? "last-msg" : ""}
            >
              {msg.text}
            </Bubble>
          ))}
          {loading && <Bubble $isUser={false} style={{opacity: 0.5}}>Escribiendo...</Bubble>}
        </MessageArea>
        <InputArea>
          <StyledInput 
            placeholder="Pregúntame algo..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            disabled={loading}
          />
        </InputArea>
      </ChatWindow>

      <FloatingButton className="btn-float" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "×" : "💬"}
      </FloatingButton>
    </ChatContainer>
  );
}