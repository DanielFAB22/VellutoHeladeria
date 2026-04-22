import styled from "styled-components";
import { Hero } from "../components/Hero";
import { FlavorCard } from "../components/FlavorCard";
import { DeliverySection } from "../components/DeliverySection";
import { TrackOrder } from "../components/TrackOrder";



const MainContent = styled.div`
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  border: 2px solid black;
  padding: 0.75rem 1rem;
  background-color: #f3f4f6; 
  text-align: center; 
  margin-bottom: 1.5rem;

  h2 {
    font-weight: 600;
    color: #1f2937;
    margin: 0;
  }
`;

const WhyUsGrid = styled.div`
  display: grid;
  grid-template-cols: 1fr;
  gap: 1rem;
  margin-top: 1rem;

  @media (min-width: 768px) {
    grid-template-cols: repeat(3, 1fr);
  }
`;

const InfoCard = styled.div`
  border: 2px solid black;
  padding: 1.5rem;
  background-color: white;
  text-align: center;

  h3 {
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #1f2937;
  }

  p {
    font-size: 0.875rem;
    color: #374151;
    margin: 0;
  }
`;


const flavors = [
  { id: 1, name: "Fresa Suprema", description: "Cremoso helado de fresa natural con trozos de fruta fresca", price: "$4.50" },
  { id: 2, name: "Chocolate Intenso", description: "Chocolate belga premium con un sabor rico y profundo", price: "$4.50" },
  { id: 3, name: "Vainilla Clásica", description: "Hecho con vainas de vainilla auténtica de Madagascar", price: "$4.00" },
  { id: 4, name: "Menta Fresca", description: "Refrescante menta con chips de chocolate oscuro", price: "$4.50" }
];



export function Home() {
  return (
    <MainContent>
      
      <Hero />
      
      
      <div className="mt-8" style={{ marginTop: '2rem' }}>
        <SectionHeader>
          <h2>Nuestros Sabores</h2>
        </SectionHeader>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1rem' 
        }}>
          {flavors.map((flavor) => (
            <FlavorCard
              key={flavor.id}
              name={flavor.name}
              description={flavor.description}
              price={flavor.price}
            />
          ))}
        </div>
      </div>
      
      {/* 3. Sección Domicilio */}
      <div style={{ marginTop: '3rem' }}>
        <DeliverySection />
      </div>
      
      
      <div style={{ marginTop: '3rem' }}>
        <TrackOrder />
      </div>
      
     
      <div style={{ marginTop: '3rem', borderTop: '2px solid black', paddingTop: '3rem' }}>
        <SectionHeader>
          <h2>¿Por qué elegirnos?</h2>
        </SectionHeader>
        
        <WhyUsGrid>
          <InfoCard>
            <h3>Ingredientes Naturales</h3>
            <p>Solo utilizamos ingredientes frescos y de la más alta calidad.</p>
          </InfoCard>
          <InfoCard>
            <h3>Recetas Artesanales</h3>
            <p>Cada lote se prepara a mano siguiendo recetas tradicionales.</p>
          </InfoCard>
          <InfoCard>
            <h3>Sabores Únicos</h3>
            <p>Combinaciones innovadoras que no encontrarás en otro lugar.</p>
          </InfoCard>
        </WhyUsGrid>
      </div>
    </MainContent>
  );
}