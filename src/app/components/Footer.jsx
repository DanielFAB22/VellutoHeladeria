import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faFacebookF,
  faTiktok,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.dark};
  color: white;
  margin-top: 2rem; // Reducido de 4rem
`;

const FooterWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2.5rem 2rem; // Compactado el padding vertical

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const Brand = styled.div`
  h2 {
    font-family: ${({ theme }) => theme.fonts.title};
    margin-bottom: 0.5rem; // Reducido
  }
  p {
    color: rgba(255,255,255,0.75);
    line-height: 1.6;
  }
`;

const Contact = styled.div`
  h3 { margin-bottom: 0.8rem; }
  p {
    margin: 0.4rem 0; // Más compacto
    color: rgba(255,255,255,0.82);
  }
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 0.5rem; // Sube los iconos acercándolos al título
`;

const SocialIcon = styled.a`
  width: 38px; // Ligeramente más pequeños para elegancia
  height: 38px;
  border-radius: 50%;
  background: rgba(255,255,255,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const BottomBar = styled.div`
  border-top: 1px solid rgba(255,255,255,0.1);
  text-align: center;
  padding: 1rem;
  color: rgba(255,255,255,0.65);
  font-size: 0.85rem;
`;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterWrapper>
        <Brand>
          <h2>Velluto</h2>
          <p>
            Helados artesanales creados con ingredientes reales y momentos para recordar.
          </p>
        </Brand>

        <Contact>
          <h3>Contacto</h3>
          <p><FontAwesomeIcon icon={faPhone} /> +57 300 123 4567</p>
          <p>Neiva, Colombia</p>
          <p>Lunes a Domingo · 10AM - 10PM</p>
        </Contact>

        <div>
          <h3 style={{ marginBottom: '0.5rem' }}>Síguenos</h3>
          <SocialContainer>
            <SocialIcon href="#"><FontAwesomeIcon icon={faInstagram} /></SocialIcon>
            <SocialIcon href="#"><FontAwesomeIcon icon={faFacebookF} /></SocialIcon>
            <SocialIcon href="#"><FontAwesomeIcon icon={faXTwitter} /></SocialIcon>
            <SocialIcon href="#"><FontAwesomeIcon icon={faTiktok} /></SocialIcon>
          </SocialContainer>
        </div>
      </FooterWrapper>

      <BottomBar>
        © {currentYear} Velluto. Todos los derechos reservados.
      </BottomBar>
    </FooterContainer>
  );
}