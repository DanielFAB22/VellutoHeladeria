import styled from "styled-components";



const DeliverySectionWrapper = styled.section`
  border-top: 2px solid black;
  background-color: white;
  padding: 4rem 0;
  width: 100%;
`;

const Container = styled.div`
  max-width: 600px; 
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const SectionHeader = styled.div`
  border: 2px solid black;
  background-color: #f3f4f6;
  padding: 0.75rem 1rem;
  margin-bottom: 2.5rem;
  text-align: center;

  h2 {
    font-weight: 700;
    margin: 0;
    color: #000;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const ContentStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InfoCard = styled.div`
  border: 2px solid black;
  padding: 1.5rem;
  background-color: white;
  text-align: center; 
  
  h3 {
    font-weight: 700;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    color: #000;
  }
  
  p {
    font-size: 0.9rem;
    color: #4b5563;
    margin: 0;
  }
`;

const FormContainer = styled.div`
  border: 2px solid black;
  padding: 2.5rem;
  background-color: #ffffff;
  margin-top: 1rem;

  h3 {
    font-weight: 700;
    margin-bottom: 2rem;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.2rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 1.5rem;

  label {
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  input, textarea {
    border: 2px solid black;
    padding: 0.8rem;
    font-size: 0.9rem;
    outline: none;
    background: white;
    width: 100%;
    box-sizing: border-box;

    &:focus {
      background-color: #f9fafb;
    }
  }
`;

const SubmitButton = styled.button`
  border: 2px solid black;
  border-radius: 0; 
  padding: 1rem;
  background-color: black;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #333;
    transform: translate(-2px, -2px);
    box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
  }
`;

// --- Componente ---

export function DeliverySection() {
  return (
    <DeliverySectionWrapper>
      <Container>
        <SectionHeader>
          <h2>Servicio a Domicilio</h2>
        </SectionHeader>

        <ContentStack>
          {/* Información apilada y centrada */}
          <InfoCard>
            <h3>Entrega Rápida</h3>
            <p>Menos de 30 min en zona de cobertura.</p>
          </InfoCard>

          <InfoCard>
            <h3>Horarios</h3>
            <p>Lunes a Domingo: 10:00 AM - 10:00 PM.</p>
          </InfoCard>

          <InfoCard>
            <h3>Cobertura</h3>
            <p>Toda la ciudad y alrededores.</p>
          </InfoCard>

          
          <FormContainer>
            <h3>Solicita tu Pedido</h3>
            <form>
              <FormGroup>
                <label>Dirección</label>
                <input type="text" placeholder="Calle, número, ciudad" required />
              </FormGroup>

              <FormGroup>
                <label>Teléfono</label>
                <input type="tel" placeholder="(123) 456-7890" required />
              </FormGroup>

              <FormGroup>
                <label>Notas</label>
                <textarea placeholder="Instrucciones adicionales..." rows={2} />
              </FormGroup>

              <SubmitButton type="button">Solicitar Domicilio</SubmitButton>
            </form>
          </FormContainer>
        </ContentStack>
      </Container>
    </DeliverySectionWrapper>
  );
}