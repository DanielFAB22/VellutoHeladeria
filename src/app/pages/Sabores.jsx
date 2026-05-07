import React, { useState } from "react";
import styled from "styled-components";
import { FlavorCard } from "../components/FlavorCard";
import { SABORES } from "../../data/sabores.js";

const PageWrapper = styled.div`
  padding: 4rem 1rem;
  max-width: 1100px;
  margin: 0 auto;
`;

const FilterSection = styled.div`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;



const CategoryBtn = styled.button`
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  border: none;
  background: ${props => props.$active ? props.theme.colors.primary : '#f0f0f0'};
  color: ${props => props.$active ? 'white' : props.theme.colors.text};
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: ${props => props.$active ? props.theme.colors.primary : '#e0e0e0'};
  }
`;

const FlavorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-top: 2rem;
`;


const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  max-width: 400px;
  width: 90%;
  text-align: center;

  img {
    width: 100%;
    border-radius: 16px;
    margin-bottom: 1rem;
  }
`;

const OrderCTA = styled.div`
  margin-top: 3rem;
  text-align: center;
`;

const OrderButton = styled.button`
  padding: 1rem 2rem;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  font-weight: 600;
  cursor: pointer;
`;

export function Sabores() {

  const [selectedFlavor, setSelectedFlavor] = useState(null);
  
  return (
    <PageWrapper>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Nuestro Menú</h1>
        <p>Explora nuestras creaciones artesanales</p>
      </div>

     

    <FlavorsGrid>
      {SABORES.map((flavor) => (
        <FlavorCard
          key={flavor.id}
          name={flavor.name}
          image={flavor.image}
          onClick={() => setSelectedFlavor(flavor)}
        />
      ))}
    </FlavorsGrid>

    {selectedFlavor && (
      <ModalOverlay onClick={() => setSelectedFlavor(null)}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          
          <img src={selectedFlavor.image} alt={selectedFlavor.name} />

          <h2>{selectedFlavor.name}</h2>
          <p>{selectedFlavor.description}</p>
          <strong>${selectedFlavor.price.toFixed(2)}</strong>

        </ModalContent>
      </ModalOverlay>
    )}
    

    <OrderCTA>
      <OrderButton onClick={() => navigate("/ordenar")}>
        Armar mi helado
      </OrderButton>
    </OrderCTA>   

      
    </PageWrapper>
  );
}