import styled from 'styled-components';
import { Link } from 'react-router-dom'; 



const HeaderContainer = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: ${({ theme }) => theme.shadow.soft};
`;

const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

const LogoBox = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};

  letter-spacing: -0.5px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.4rem;
`;

// 2. Cambiamos styled.a por styled(Link)
const NavLink = styled(Link)`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  transition: 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const SpecialLink = styled(NavLink)`
  padding: 0.65rem 1rem;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: 600;

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.colors.dark};
    color: white;
  }
`;



export function Header() {
  return (
    <HeaderContainer>
      <Wrapper>
        
        <LogoBox to="/">
          <h2>Velluto</h2>
        </LogoBox>

        <Nav>
          
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/nosotros">Nosotros</NavLink>
          <NavLink to="/sabores">Sabores</NavLink>
         
          <NavLink to="/contacto">Contacto</NavLink>
          
        </Nav>

        <SpecialLink to="/ordenar">Ordernar</SpecialLink>
      </Wrapper>
    </HeaderContainer>
  );
}