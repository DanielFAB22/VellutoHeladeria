import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";


import { Header } from "./components/Header";
import { Footer } from "./components/Footer";


import { Home } from "./pages/Home";
import { Nosotros } from "./pages/Nosotros";
import { Contacto } from "./pages/Contacto";
import { Sabores } from "./pages/Sabores";
import { Domicilio } from "./pages/Domicilio";

// --- Estilos Globales ---
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif; 
    background-color: white;
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
  );
}