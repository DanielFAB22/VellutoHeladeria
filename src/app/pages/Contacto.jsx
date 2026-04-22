import styled from "styled-components";



const PageWrapper = styled.div`
  padding: 4rem 1rem;
  max-width: 600px; 
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  border: 2px solid black;
  padding: 0.75rem 1rem;
  background-color: #f3f4f6;
  margin-bottom: 2rem;
  text-align: center;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    text-transform: uppercase;
  }
`;

const ContactGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InfoBox = styled.div`
  border: 2px solid black;
  padding: 1.5rem;
  background-color: white;
  text-align: center;

  p {
    margin: 0.5rem 0;
    font-weight: 500;
  }

  span {
    font-weight: 700;
    color: #2563eb;
  }
`;

const FormBox = styled.div`
  border: 2px solid black;
  padding: 2rem;
  background-color: white;

  h2 {
    font-size: 1.2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.2rem;

  label {
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  input, textarea {
    border: 2px solid black;
    padding: 0.8rem;
    font-size: 0.9rem;
    outline: none;
    width: 100%;
    box-sizing: border-box;

    &:focus {
      background-color: #f9fafb;
    }
  }
`;

const SendButton = styled.button`
  border: 2px solid black;
  width: 100%;
  padding: 1rem;
  background-color: black;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #333;
    transform: translate(-2px, -2px);
    box-shadow: 4px 4px 0px black;
  }
`;



export function Contacto() {
  return (
    <PageWrapper>
      <SectionHeader>
        <h1>Contacto</h1>
      </SectionHeader>

      <ContactGrid>
       
        <InfoBox>
          <p>Email: <span>hola@sabores.com</span></p>
          <p>Teléfono: <span>+57 300 888 9999</span></p>
        </InfoBox>

        
        <FormBox>
          <h2>Escríbenos</h2>
          <form>
            <FormGroup>
              <label>Nombre Completo</label>
              <input type="text" placeholder="Tu nombre..." required />
            </FormGroup>

            <FormGroup>
              <label>Correo Electrónico</label>
              <input type="email" placeholder="tu@email.com" required />
            </FormGroup>

            <FormGroup>
              <label>Mensaje</label>
              <textarea placeholder="¿En qué podemos ayudarte?" rows={4} required />
            </FormGroup>

            <SendButton type="button">Enviar Mensaje</SendButton>
          </form>
        </FormBox>
      </ContactGrid>
    </PageWrapper>
  );
}