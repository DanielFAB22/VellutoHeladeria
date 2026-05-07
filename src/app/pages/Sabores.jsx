import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FlavorCard } from "../components/FlavorCard";
import { SABORES } from "../../data/sabores.js";


import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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

const SearchInput = styled.input`
  width: 100%;
  max-width: 450px;
  padding: 1rem 1.5rem;
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  font-family: inherit;
  font-size: 1rem;
  outline: none;
  transition: 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadow.soft};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 15px rgba(230, 126, 34, 0.15);
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const CategoryBtn = styled.button`
  padding: 0.6rem 1.5rem;
  border-radius: 25px;
  border: none;
  background: ${props => props.$active ? props.theme.colors.primary : 'white'};
  color: ${props => props.$active ? 'white' : props.theme.colors.text};
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  border: 1px solid ${props => props.$active ? props.theme.colors.primary : '#eee'};

  &:hover {
    background: ${props => props.$active ? props.theme.colors.primary : '#f8f8f8'};
    transform: translateY(-2px);
  }
`;

const FlavorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-top: 2rem;
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 30px;
  max-width: 450px;
  width: 90%;
  text-align: center;
  position: relative;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 20px;
    margin-bottom: 1.5rem;
  }

  h2 { color: ${({ theme }) => theme.colors.primary}; margin-bottom: 1rem; }
  p { line-height: 1.6; color: #555; margin-bottom: 1.5rem; }
  .modal-price { font-size: 1.5rem; font-weight: 700; color: ${({ theme }) => theme.colors.dark}; }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: #f0f0f0;
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
`;

const OrderCTA = styled.div`
  margin-top: 5rem;
  text-align: center;
  background: #fff5eb;
  padding: 4rem;
  border-radius: 30px;
`;

export function Sabores() {
  const navigate = useNavigate();
  const [selectedFlavor, setSelectedFlavor] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  const categorias = ["Todos", "Cremosos", "Frutales", "Clásicos", "Premium"];

  const filteredFlavors = SABORES.filter(flavor => {
    const matchesSearch = flavor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "Todos" || flavor.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

 
  useGSAP(() => {
    gsap.fromTo(".flavor-item", 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" }
    );
  }, [filteredFlavors]);

  // Animación del Modal
  useGSAP(() => {
    if (selectedFlavor) {
      gsap.fromTo(".modal-box",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [selectedFlavor]);

  return (
    <PageWrapper>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '800' }}>Nuestro Menú</h1>
        <p style={{ opacity: 0.7 }}>Descubre el arte del helado italiano</p>
      </div>

      <FilterSection>
        <SearchInput 
          type="text" 
          placeholder="Busca tu sabor favorito..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <CategoryContainer>
          {categorias.map(cat => (
            <CategoryBtn 
              key={cat} 
              $active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </CategoryBtn>
          ))}
        </CategoryContainer>
      </FilterSection>

      <FlavorsGrid>
        {filteredFlavors.map((flavor) => (
          <div key={flavor.id} className="flavor-item">
            <FlavorCard
              name={flavor.name}
              image={flavor.image}
              onShowDetails={() => setSelectedFlavor(flavor)}
            />
          </div>
        ))}
      </FlavorsGrid>

      {selectedFlavor && (
        <ModalOverlay onClick={() => setSelectedFlavor(null)}>
          <ModalContent className="modal-box" onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedFlavor(null)}>×</CloseButton>
            <img src={selectedFlavor.image} alt={selectedFlavor.name} />
            <h2>{selectedFlavor.name}</h2>
            <p>{selectedFlavor.description}</p>
            <div className="modal-price">${selectedFlavor.price.toFixed(2)}</div>
          </ModalContent>
        </ModalOverlay>
      )}

      <OrderCTA className="order-cta-box">
        <h2 style={{ marginBottom: '1.5rem' }}>¿Quieres algo personalizado?</h2>
        <button 
          onClick={() => navigate("/ordenar")}
          style={{
            padding: '1.2rem 2.5rem',
            borderRadius: '50px',
            background: '#e67e22',
            color: 'white',
            border: 'none',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          ¡Armar mi Helado!
        </button>
      </OrderCTA>   
    </PageWrapper>
  );
}