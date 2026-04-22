import styled from "styled-components";
import { FlavorCard } from "../components/FlavorCard";


const PageWrapper = styled.div`
  padding: 4rem 1rem;
  max-width: 900px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  border: 2px solid black;
  padding: 0.75rem 1rem;
  background-color: #f3f4f6;
  margin-bottom: 3rem;
  text-align: center;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    text-transform: uppercase;
  }
`;

const FlavorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const CategoryTag = styled.div`
  display: inline-block;
  border: 2px solid black;
  padding: 0.25rem 1rem;
  background-color: #fff1f2; 
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;



const allFlavors = [
  { id: 1, name: "Fresa Suprema", description: "Cremoso helado de fresa natural con trozos de fruta fresca.", price: "$4.50" },
  { id: 2, name: "Chocolate Intenso", description: "Chocolate belga premium con un sabor rico y profundo.", price: "$4.50" },
  { id: 3, name: "Vainilla Clásica", description: "Hecho con vainas de vainilla auténtica de Madagascar.", price: "$4.00" },
  { id: 4, name: "Menta Fresca", description: "Refrescante menta con chips de chocolate oscuro.", price: "$4.50" },
  { id: 5, name: "Caramelo Salado", description: "Balance perfecto entre dulce y un toque de sal marina.", price: "$4.75" },
  { id: 6, name: "Pistacho Real", description: "Elaborado con pistachos tostados de la mejor calidad.", price: "$5.00" }
];

// --- Componente ---

export function Sabores() {
  return (
    <PageWrapper>
      <SectionHeader>
        <h1>Nuestro Menú de Sabores</h1>
      </SectionHeader>

      <div style={{ marginBottom: '3rem' }}>
        <CategoryTag>Favoritos de la Casa</CategoryTag>
        <FlavorsGrid>
          {allFlavors.map((flavor) => (
            <FlavorCard
              key={flavor.id}
              name={flavor.name}
              description={flavor.description}
              price={flavor.price}
            />
          ))}
        </FlavorsGrid>
      </div>

      <div style={{ textAlign: 'center', marginTop: '4rem', borderTop: '2px solid black', paddingTop: '2rem' }}>
        <p style={{ fontWeight: '600', fontSize: '0.9rem' }}>
          * Todos nuestros helados son libres de conservantes artificiales.
        </p>
      </div>
    </PageWrapper>
  );
}