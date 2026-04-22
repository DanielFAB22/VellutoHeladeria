import styled from 'styled-components';



const HeroContainer = styled.div`
  border: 2px solid black;
  height: 24rem; 
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  position: relative;
  overflow: hidden; 
`;

const BackgroundLines = styled.svg`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;


const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
`;


export function Hero() {
  return (
    <HeroContainer>
      <BackgroundLines viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100" y2="100" stroke="black" strokeWidth="0.3" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="black" strokeWidth="0.3" />
      </BackgroundLines>
      
     
      <HeroContent>
   
      </HeroContent>
    </HeroContainer>
  );
}