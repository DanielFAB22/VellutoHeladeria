import styled from 'styled-components';
import { Link } from 'react-router-dom'; 



const HeaderContainer = styled.header`
  border-bottom: 2px solid black;
  background-color: white;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;
  margin: 0 auto;
  gap: 1rem;
`;

const LogoBox = styled(Link)` 
  width: 160px;
  height: 64px;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: white;
  flex-shrink: 0;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
`;

// 2. Cambiamos styled.a por styled(Link)
const NavLink = styled(Link)`
  text-decoration: none;
  color: #2563eb; 
  font-weight: 500;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const SpecialLink = styled(NavLink)`
  color: black;
  font-weight: 700;
`;

const Separator = styled.span`
  color: #9ca3af;
  user-select: none;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SearchInput = styled.input`
  border: 2px solid black;
  padding: 0.25rem 0.75rem;
  width: 12rem;
  background-color: white;
  font-size: 0.875rem;
  outline: none;
`;

const SearchButton = styled.button`
  border: 2px solid black;
  border-radius: 9999px;
  padding: 0.25rem 1.25rem;
  background-color: black;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #333333;
  }
`;



export function Header() {
  return (
    <HeaderContainer>
      <Wrapper>
        
        <LogoBox to="/">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="100" y2="100" stroke="black" strokeWidth="0.5" />
            <line x1="100" y1="0" x2="0" y2="100" stroke="black" strokeWidth="0.5" />
          </svg>
        </LogoBox>

        <Nav>
          
          <NavLink to="/">Inicio</NavLink>
          <Separator>|</Separator>
          <NavLink to="/nosotros">Nosotros</NavLink>
          <Separator>|</Separator>
          <NavLink to="/sabores">Sabores</NavLink>
          <Separator>|</Separator>
          <NavLink to="/domicilio">Domicilio</NavLink>
          <Separator>|</Separator>
          <NavLink to="/blog">Blog</NavLink>
          <Separator>|</Separator>
          <NavLink to="/contacto">Contacto</NavLink>
          
          <Separator>|</Separator>
          
          <SpecialLink to="/carrito">Ver Carrito</SpecialLink>
          <Separator>|</Separator>
          <SpecialLink to="/historial">Historial</SpecialLink>
        </Nav>

        <SearchContainer>
          <SearchInput type="text" placeholder="Buscar sabores..." />
          <SearchButton type="button">Buscar</SearchButton>
        </SearchContainer>
      </Wrapper>
    </HeaderContainer>
  );
}