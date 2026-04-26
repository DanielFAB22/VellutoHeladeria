import styled from "styled-components";
import { Hero } from "../components/Hero";
import { FlavorCard } from "../components/FlavorCard";
import { DeliverySection } from "../components/DeliverySection";



const MainContent = styled.div`
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 2.6rem;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    color: ${({ theme }) => theme.colors.dark};
    max-width: 620px;
    margin: 0 auto;
    line-height: 1.7;
  }
`;

const WhyUsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const InfoCard = styled.div`
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 22px;
  padding: 2rem;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadow.soft};
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-6px);
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.7rem;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    color: ${({ theme }) => theme.colors.dark};
    line-height: 1.7;
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
    <>
    <Hero/>

    <MainContent>
      
      
      
      
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
      
      
     
      <div style={{ marginTop: '5rem', paddingTop: '2rem' }}>
        <SectionHeader>
          <h2>¿Por qué elegir Velluto?</h2>

          <p>
            Creamos helados con ingredientes reales, recetas cuidadas y sabores diseñados para convertirse en recuerdos.
          </p>
        </SectionHeader>

        <WhyUsGrid>

          <InfoCard>
            <h3>Ingredientes Naturales</h3>
            <p>
              Seleccionamos materias primas frescas para lograr sabor auténtico y textura superior.
            </p>
          </InfoCard>

          <InfoCard>
            <h3>Recetas Artesanales</h3>
            <p>
              Cada lote se prepara con atención al detalle y procesos que priorizan calidad.
            </p>
          </InfoCard>

          <InfoCard>
            <h3>Sabores Memorables</h3>
            <p>
              Combinaciones clásicas y creativas pensadas para sorprender en cada cucharada.
            </p>
          </InfoCard>

        </WhyUsGrid>
      </div>
    </MainContent>
    </>
  );
}