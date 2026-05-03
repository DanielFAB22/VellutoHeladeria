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

const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 0.8rem 1.2rem;
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  font-family: inherit;
  font-size: 1rem;
  outline: none;
  transition: 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 10px rgba(230, 126, 34, 0.1);
  }
`;

const CategoryContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

export function Sabores() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  const categorias = ["Todos", "Cremosos", "Frutales", "Clásicos", "Premium"];

  // Lógica de filtrado combinada
  const filteredFlavors = SABORES.filter(flavor => {
    const matchesSearch = flavor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "Todos" || flavor.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <PageWrapper>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Nuestro Menú</h1>
        <p>Explora nuestras creaciones artesanales</p>
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
          <FlavorCard
            key={flavor.id}
            name={flavor.name}
            description={flavor.description}
            price={`$${flavor.price.toFixed(2)}`}
            image={flavor.image}
          />
        ))}
      </FlavorsGrid>

      {filteredFlavors.length === 0 && (
        <div style={{ textAlign: 'center', marginTop: '3rem', opacity: 0.6 }}>
          <p>No encontramos ningún sabor que coincida con tu búsqueda. 🍦</p>
        </div>
      )}
    </PageWrapper>
  );
}