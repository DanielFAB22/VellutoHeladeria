import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";


const PrintStyles = createGlobalStyle`
  @media print {
   
    body * {
      visibility: hidden;
    }
    #print-section, #print-section * {
      visibility: visible;
    }
    #print-section {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      margin: 0;
      padding: 0;
    }
   
    @page {
      margin: 0;
      size: auto;
    }
  }
`;

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #fdfbf9;
  padding: 2rem;
`;

const ReceiptContainer = styled.div`
  max-width: 450px;
  width: 100%;
  padding: 3rem 2rem;
  background: white;
  border-radius: 4px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  position: relative;
  font-family: 'Courier New', Courier, monospace;
  border: 1px solid #eee;

  @media print {
    box-shadow: none;
    border: none;
    max-width: 100%;
    padding: 1rem;
  }
`;

const TicketHeader = styled.div`
  text-align: center;
  border-bottom: 2px dashed #333;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  h2 { font-size: 2.2rem; margin-bottom: 0.3rem; text-transform: uppercase; }
  p { font-size: 0.85rem; line-height: 1.4; }
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.2rem;
  font-size: 0.9rem;
  
  .details {
    max-width: 75%;
    span { display: block; font-size: 0.75rem; color: #444; margin-top: 3px; }
  }
`;

const FeeRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  opacity: 0.8;
`;

const TotalDivider = styled.div`
  border-top: 2px solid #333;
  margin-top: 1.5rem;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1.3rem;
`;

const Actions = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media print {
    display: none;
  }
`;

const Button = styled.button`
  padding: 1.1rem;
  border: none;
  border-radius: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: 0.3s;
  background: ${({ $primary, theme }) => $primary ? theme.colors.primary : "#2c3e50"};
  color: white;
  
  &:hover { filter: brightness(1.2); transform: translateY(-2px); }
`;

export function Recibo({ cart, setCart }) {
  const navigate = useNavigate();
  
  const ENVIO = 5000;
  const subtotal = cart.reduce((acc, item) => acc + item.finalPrice, 0);
  const totalGeneral = subtotal + ENVIO;

  const handleFinish = () => {
    setCart([]);
    navigate("/");
  };

  if (cart.length === 0) {
    return (
      <PageWrapper>
        <div style={{ textAlign: 'center' }}>
          <h3>No hay pedidos activos</h3>
          <Button onClick={() => navigate("/ordenar")} $primary>Ir a ordenar</Button>
        </div>
      </PageWrapper>
    );
  }

  return (
    <>
      <PrintStyles />
      <PageWrapper>
        <ReceiptContainer id="print-section">
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
                {item.toppings?.length > 0 && (
                  <span>Toppings: {item.toppings.map(t => t.name).join(", ")}</span>
                )}
              </div>
              <span>${item.finalPrice.toLocaleString()}</span>
            </Item>
          ))}

          <div style={{ borderTop: '1px dashed #eee', marginTop: '1rem', paddingTop: '1rem' }}>
            <FeeRow>
              <span>Subtotal</span>
              <span>${subtotal.toLocaleString()}</span>
            </FeeRow>
            <FeeRow>
              <span>Servicio de Envío</span>
              <span>${ENVIO.toLocaleString()}</span>
            </FeeRow>
          </div>

          <TotalDivider>
            <span>TOTAL</span>
            <span>${totalGeneral.toLocaleString()}</span>
          </TotalDivider>

          <div style={{ textAlign: 'center', marginTop: '2.5rem', fontSize: '0.75rem', lineHeight: '1.6' }}>
            <p style={{ fontWeight: 'bold' }}>Orden #VE-{Math.floor(1000 + Math.random() * 9000)}</p>
            <p>Este recibo es un comprobante de tu pedido artesanal.</p>
            <p>¡Vuelve pronto!</p>
          </div>

          <Actions>
            <Button onClick={() => window.print()}>Imprimir Ticket</Button>
            <Button $primary onClick={handleFinish}>Finalizar y Nueva Orden</Button>
          </Actions>
        </ReceiptContainer>
      </PageWrapper>
    </>
  );
}