import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ReceiptContainer = styled.div`
  max-width: 500px;
  margin: 4rem auto;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  position: relative;
  font-family: 'Courier New', Courier, monospace;

  /* Efecto de borde dentado de recibo */
  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0;
    width: 100%;
    height: 10px;
    background: linear-gradient(-45deg, white 5px, transparent 0), linear-gradient(45deg, white 5px, transparent 0);
    background-size: 10px 10px;
  }
`;

const TicketHeader = styled.div`
  text-align: center;
  border-bottom: 2px dashed #eee;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  h2 { font-family: ${({ theme }) => theme.fonts.title}; font-size: 2rem; margin-bottom: 0.5rem; }
  p { font-size: 0.9rem; opacity: 0.7; }
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  
  .details {
    max-width: 70%;
    span { display: block; font-size: 0.8rem; color: #666; margin-top: 2px; }
  }
`;

const TotalDivider = styled.div`
  border-top: 2px solid #333;
  margin-top: 1.5rem;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1.2rem;
`;

const Actions = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  background: ${({ $primary, theme }) => $primary ? theme.colors.primary : "#f5f5f5"};
  color: ${({ $primary }) => $primary ? "white" : "#333"};
  
  &:hover { opacity: 0.9; transform: translateY(-2px); }
`;

export function Recibo({ cart, setCart }) {
  const navigate = useNavigate();
  const total = cart.reduce((acc, item) => acc + item.finalPrice, 0);

  const handleFinish = () => {
    setCart([]); // Limpiar carrito al finalizar
    navigate("/");
  };

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '100px' }}>
        <h3>No hay pedidos activos</h3>
        <Button onClick={() => navigate("/ordenar")} $primary>Ir a ordenar</Button>
      </div>
    );
  }

  return (
    <ReceiptContainer>
      <TicketHeader>
        <h2>Velluto</h2>
        <p>Gelatería Artesanal</p>
        <p>Neiva, Huila</p>
        <p>{new Date().toLocaleDateString()} | {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
      </TicketHeader>

      {cart.map((item, idx) => (
        <Item key={idx}>
          <div className="details">
            <strong>1x Helado en {item.base}</strong>
            <span>Sabores: {item.flavors.join(", ")}</span>
            {item.toppings.length > 0 && <span>Toppings: {item.toppings.map(t => t.name).join(", ")}</span>}
          </div>
          <span>${item.finalPrice.toLocaleString()}</span>
        </Item>
      ))}

      <TotalDivider>
        <span>TOTAL</span>
        <span>${total.toLocaleString()}</span>
      </TotalDivider>

      <div style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.8rem', opacity: 0.6 }}>
        <p>Orden #VE-{Math.floor(1000 + Math.random() * 9000)}</p>
        <p>¡Gracias por elegir lo artesanal!</p>
      </div>

      <Actions>
        <Button onClick={() => window.print()}>Imprimir Recibo</Button>
        <Button $primary onClick={handleFinish}>Nueva Orden</Button>
      </Actions>
    </ReceiptContainer>
  );
}