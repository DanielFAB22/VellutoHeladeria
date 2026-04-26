import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import theme from "./theme";


import { Header } from "./components/Header";
import { Footer } from "./components/Footer";


import { Home } from "./pages/Home";
import { Nosotros } from "./pages/Nosotros";
import { Contacto } from "./pages/Contacto";
import { Sabores } from "./pages/Sabores";
import { Domicilio } from "./pages/Domicilio";

// --- Estilos Globales ---
const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body{
    font-family:${({ theme }) => theme.fonts.body};
    background:${({ theme }) => theme.colors.background};
    color:${({ theme }) => theme.colors.text};
  }

  a{
    text-decoration:none;
    color:inherit;
  }

  button,input{
    font-family:inherit;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex-grow: 1; 
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <AppContainer>
          
          <Header />
          
          <MainContent>
            <Routes>
            
              <Route path="/" element={<Home />} />
              
              {/* Ruta Nosotros */}
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/sabores" element={<Sabores />} />
              <Route path="/domicilio" element={<Domicilio />} />

            
              
              
              <Route path="*" element={<div style={{padding: '50px', textAlign: 'center'}}>Página no encontrada</div>} />
            </Routes>
          </MainContent>

        
          <Footer />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}