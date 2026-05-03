import React from "react";
import styled from "styled-components";

// IMPORTA TU IMAGEN DE FONDO
import imgContacto from "../../assets/comiendohelado.jpg"; 

const ContactHero = styled.section`
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
  
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), 
    url(${props => props.$bgImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const FormContainer = styled.div`
  /* EFECTO TRANSPARENTE (Glassmorphism) */
  background: rgba(255, 255, 255, 0.15); // Blanco muy transparente
  backdrop-filter: blur(15px); // Desenfoque del fondo
  -webkit-backdrop-filter: blur(15px);
  
  width: 100%;
  max-width: 500px;
  padding: 3rem;
  border-radius: 30px;
  
  /* Borde sutil para definir la forma sobre el fondo */
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 2.8rem;
    color: white; // Texto blanco para que resalte sobre el cristal
    margin-bottom: 0.5rem;
    text-shadow: 0 2px 10px rgba(0,0,0,0.2);
  }

  p {
    color: white;
    font-size: 1rem;
    opacity: 0.9;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  label {
    font-size: 0.85rem;
    font-weight: 700;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding-left: 0.5rem;
  }

  input, textarea {
    /* Inputs también semi-transparentes */
    background: rgba(255, 255, 255, 0.9); 
    border: 1px solid transparent;
    padding: 1rem;
    font-size: 1rem;
    border-radius: 15px;
    outline: none;
    transition: 0.3s ease;
    width: 100%;

    &:focus {
      background: white;
      border-color: ${({ theme }) => theme.colors.primary};
      transform: scale(1.01);
    }
  }
`;

const SendButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary || '#e67e22'};
  color: white;
  width: 100%;
  padding: 1.2rem;
  border: none;
  border-radius: 15px;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 0.3s ease;
  margin-top: 1rem;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }
`;

const ContactInfo = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  color: white;

  p { margin: 0.3rem 0; }
  span { font-weight: 700; }
`;

export function Contacto() {
  return (
    <ContactHero $bgImage={imgContacto}>
      <FormContainer>
        <SectionHeader>
          <h1>Contacto</h1>
          <p>Envíanos un mensaje y te responderemos pronto</p>
        </SectionHeader>

        <form onSubmit={(e) => e.preventDefault()}>
          <FormGroup>
            <label>Nombre Completo</label>
            <input type="text" placeholder="Ej: Juan Pérez" required />
          </FormGroup>

          <FormGroup>
            <label>Correo Electrónico</label>
            <input type="email" placeholder="tu@email.com" required />
          </FormGroup>

          <FormGroup>
            <label>Mensaje</label>
            <textarea 
              placeholder="¿Qué tienes en mente?" 
              rows={4} 
              required 
            />
          </FormGroup>

          <SendButton type="submit">Enviar Mensaje</SendButton>
        </form>

        <ContactInfo>
          <p>Email: <span>hola@velluto.com</span></p>
          <p>WhatsApp: <span>+57 300 888 9999</span></p>
        </ContactInfo>
      </FormContainer>
    </ContactHero>
  );
}