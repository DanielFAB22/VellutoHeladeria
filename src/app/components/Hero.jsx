import styled from 'styled-components';
import heroImage from '../../assets/hero.png';



const HeroContainer = styled.section`
  min-height: 88vh;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: relative;
  display: flex;
  align-items: center;
  padding: 0 6%;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(0,0,0,0.58) 0%,
    rgba(0,0,0,0.38) 35%,
    rgba(0,0,0,0.12) 65%,
    rgba(0,0,0,0.05) 100%
  );
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 620px;

  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

const Eyebrow = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 0.85rem;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 4.6rem;
  line-height: 1.02;
  color: white;
`;

const Subtitle = styled.p`
  font-size: 1.15rem;
  line-height: 1.7;
  color: rgba(255,255,255,0.92);
`;

const CTA = styled.button`
  width: fit-content;
  padding: 1rem 1.6rem;
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: 600;
  cursor: pointer;
`;



export function Hero() {
  return (
  <HeroContainer>
    <Overlay />

    <HeroContent>
      <Eyebrow>Helados artesanales</Eyebrow>

      <Title>
        Sabores hechos para disfrutarse lento
      </Title>

      <Subtitle>
        Ingredientes reales, recetas cuidadas y una experiencia pensada para compartir.
      </Subtitle>

      <CTA>Ordenar ahora</CTA>
    </HeroContent>
  </HeroContainer>
  );
}