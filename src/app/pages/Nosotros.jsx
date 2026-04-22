import styled from "styled-components";



const PageWrapper = styled.div`
  padding: 2rem 1rem;
  max-width: 900px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  border: 2px solid black;
  padding: 1rem;
  background-color: #f3f4f6; 
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    color: #000;
    text-transform: uppercase;
  }
`;

const ContentBox = styled.section`
  border: 2px solid black;
  padding: 2rem;
  background-color: white;
  line-height: 1.6;
  color: #374151;

  h2 {
    color: #000;
    margin-top: 0;
    font-size: 1.25rem;
    border-bottom: 2px solid black;
    display: inline-block;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
  }
`;

const HighlightBox = styled.div`
  border: 2px solid black;
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #e5e7eb; 
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;

  span {
    font-weight: 900;
    font-size: 1.2rem;
  }
`;



export function Nosotros() {
  return (
    <PageWrapper>
    
      <SectionHeader>
        <h1>Nuestra Historia</h1>
      </SectionHeader>

      
      <ContentBox>
        <h2>Desde 1998</h2>
        <p>
          Comenzamos como un pequeño carrito de helados en la esquina de la ciudad, 
          con una sola misión: crear el helado de fresa más auténtico del mundo. 
          Hoy, seguimos usando la misma receta artesanal.
        </p>
        
        <p>
          Creemos en el comercio justo y en los ingredientes locales. Cada fruta que 
          probamos es seleccionada a mano para garantizar que la experiencia en tu 
          paladar sea inolvidable.
        </p>

        <HighlightBox>
          <span>"No solo vendemos helados, vendemos momentos de felicidad."</span>
          <small>— Fundadores de Sabores</small>
        </HighlightBox>
      </ContentBox>
    </PageWrapper>
  );
}