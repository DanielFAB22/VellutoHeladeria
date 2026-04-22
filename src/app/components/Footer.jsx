import styled from 'styled-components';



const FooterContainer = styled.footer`
  border-top: 2px solid black;
  background-color: white;
  width: 100%;
  margin-top: 2rem;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Copyright = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: black;
  margin: 0;
`;

const WhatsappBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 0.9rem;
  border: 2px solid black;
  padding: 0.5rem 1rem;
  background-color: #f0f0f0;

  span {
    color: #25d366; /* Color verde WhatsApp */
  }
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border: 2px solid black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
  font-size: 0.75rem;
  font-weight: bold;
  transition: all 0.2s ease;

  &:hover {
    background-color: black;
    color: white;
    transform: translateY(-2px);
  }
`;

// --- Componente Footer ---

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterWrapper>
    
        <Copyright>
          © {currentYear} Sabores Inc. Todos los derechos reservados.
        </Copyright>

        
        <WhatsappBox>
          WhatsApp: <span>+57 300 123 4567</span>
        </WhatsappBox>

        
        <SocialContainer>
          <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
            FB
          </SocialIcon>
          <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
            IG
          </SocialIcon>
          <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
            TW
          </SocialIcon>
          <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
            TT
          </SocialIcon>
        </SocialContainer>
      </FooterWrapper>
    </FooterContainer>
  );
}