import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { PRESENTACIONES } from "../../data/sabores.js"; 
const OrderPage = styled.div`
  padding: 4rem 1rem;
  max-width: 900px;
  margin: 0 auto;
`;

const OrderCard = styled.div`
  background: white;
  border-radius: 30px;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  /* SHADE BOX: Sombra profunda y elegante */
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

const RadioOption = styled.label`
  padding: 1rem;
  border: 2px solid ${props => props.$active ? props.theme.colors.primary : '#eee'};
  border-radius: 15px;
  cursor: pointer;
  background: ${props => props.$active ? props.theme.colors.primary + '08' : 'white'};
  transition: 0.3s;
  
  input { display: none; }
  
  div {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
  }
`;

export function Ordenar() {
  const location = useLocation();
  
  // CORRECCIÓN: Usamos los nombres exactos que enviamos desde FlavorCard
  const { flavorName, flavorImage } = location.state || { 
    flavorName: "Sabor no seleccionado", 
    flavorImage: "" 
  };
  
  const [formato, setFormato] = useState('cono');

  return (
    <OrderPage>
      <h1>Finaliza tu pedido</h1>
      <OrderCard>
        {/* Lado Izquierdo: Visualización */}
        <div>
          {/* Ahora usamos flavorImage */}
          <img 
            src={flavorImage} 
            alt={flavorName} 
            style={{ width: '100%', borderRadius: '20px', objectFit: 'cover', height: '300px' }} 
          />
          <h2 style={{marginTop: '1rem'}}>{flavorName}</h2>
        </div>

        {/* Lado Derecho: Configuración */}
        <div>
          <h3>¿Cómo lo quieres disfrutar?</h3>
          <RadioGroup>
            {PRESENTACIONES.map((p) => (
              <RadioOption key={p.id} $active={formato === p.id}>
                <input 
                  type="radio" 
                  name="presentacion" 
                  onChange={() => setFormato(p.id)} 
                  checked={formato === p.id}
                />
                <div>
                  <span>{p.name}</span>
                  <span>+ ${p.extra.toFixed(2)}</span>
                </div>
              </RadioOption>
            ))}
          </RadioGroup>
          
          <button style={{
            width: '100%', 
            marginTop: '2rem', 
            padding: '1rem', 
            background: '#e67e22', 
            color: 'white', 
            border: 'none', 
            borderRadius: '12px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Confirmar Pedido
          </button>
        </div>
      </OrderCard>
    </OrderPage>
  );
}