import styled from "styled-components";
import { Hero } from "../components/Hero";
import { FlavorCard } from "../components/FlavorCard";
import { DeliverySection } from "../components/DeliverySection";
import { SABORES } from "../../data/sabores.js";


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules'; // Añadimos Navigation
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import imgNatural from "../../assets/porqueelegirnos/vanilla.jpg";
import imgArtesanal from "../../assets/porqueelegirnos/vanilla2.jpg";
import imgSabores from "../../assets/porqueelegirnos/helados1.jpg";

const MainContent = styled.div`
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 2.6rem;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    color: ${({ theme }) => theme.colors.dark};
    max-width: 620px;
    margin: 0 auto;
    line-height: 1.7;
  }
`;

const WhyUsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const InfoCard = styled.div`
  position: relative;
  height: 280px;
  border-radius: 22px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  color: white;
  box-shadow: ${({ theme }) => theme.shadow.soft};
  transition: 0.3s ease;
  border: 1px solid ${({ theme }) => theme.colors.border};

  background-image: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), 
    url(${props => props.$bgImage});
  background-size: cover;
  background-position: center;

  &:hover {
    transform: translateY(-8px);
    background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), 
      url(${props => props.$bgImage});
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
    font-family: ${({ theme }) => theme.fonts.title};
    z-index: 2;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.6);
  }

  p {
    color: rgba(255, 255, 255, 0.95);
    line-height: 1.5;
    margin: 0;
    z-index: 2;
    font-weight: 500;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.6);
  }
`;

export function Home() {
  // Tomamos los primeros 6 para que el carrusel tenga contenido suficiente para rotar
  const destacados = SABORES.slice(0, 6);

  return (
    <>
      <Hero />
      <MainContent>
        <div style={{ marginTop: '3rem' }}>
          <SectionHeader>
            <h2>Sabores Destacados</h2>
            <p>Nuestros favoritos de la temporada, listos para refrescar tu día.</p>
          </SectionHeader>
          
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true} // <--- HACE QUE SEA INFINITO
            autoplay={{ 
              delay: 3000, 
              disableOnInteraction: false 
            }}
            pagination={{ clickable: true }}
            navigation={true} // <--- FLECHAS PARA NAVEGAR
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={{ padding: '0 1rem 4rem 1rem' }}
          >
            {destacados.map((flavor) => (
              <SwiperSlide key={flavor.id}>
                <FlavorCard
                  name={flavor.name}
                  description={flavor.description}
                  price={`$${flavor.price.toFixed(2)}`}
                  image={flavor.image} 
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        <div style={{ marginTop: '1.5rem' }}>
          <DeliverySection />
        </div>
        
        {/* SECCIÓN POR QUÉ ELEGIRNOS */}
        <div style={{ marginTop: '3.5rem', marginBottom: '4rem' }}>
          <SectionHeader>
            <h2>¿Por qué elegir Velluto?</h2>
            <p>Creamos helados con ingredientes reales y recetas cuidadas.</p>
          </SectionHeader>

          <WhyUsGrid>
            <InfoCard $bgImage={imgNatural}>
              <h3>Ingredientes Naturales</h3>
              <p>Seleccionamos materias primas frescas para lograr sabor auténtico.</p>
            </InfoCard>

            <InfoCard $bgImage={imgArtesanal}>
              <h3>Recetas Artesanales</h3>
              <p>Cada lote se prepara con atención al detalle y procesos de calidad.</p>
            </InfoCard>

            <InfoCard $bgImage={imgSabores}>
              <h3>Sabores Memorables</h3>
              <p>Combinaciones clásicas y creativas pensadas para sorprender.</p>
            </InfoCard>
          </WhyUsGrid>
        </div>
      </MainContent>
    </>
  );
}