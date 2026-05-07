import React from "react";
import styled from "styled-components";
import { Hero } from "../components/Hero";
import { FlavorCard } from "../components/FlavorCard";
import { DeliverySection } from "../components/DeliverySection";
import { SABORES } from "../../data/sabores.js";

// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import imgNatural from "../../assets/porqueelegirnos/vanilla.jpg";
import imgArtesanal from "../../assets/porqueelegirnos/vanilla2.jpg";
import imgSabores from "../../assets/porqueelegirnos/helados1.jpg";

// Registrar el plugin
gsap.registerPlugin(ScrollTrigger);

const MainContent = styled.div`
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  opacity: 0; // Para la animación inicial

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
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid ${({ theme }) => theme.colors.border};
  opacity: 0; // Para la animación inicial

  background-image: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), 
    url(${props => props.$bgImage});
  background-size: cover;
  background-position: center;

  &:hover {
    transform: translateY(-10px) scale(1.02);
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
    z-index: 2;
    font-weight: 500;
  }
`;

export function Home() {
  const destacados = SABORES.slice(0, 6);

  useGSAP(() => {
    // 1. Animación de los encabezados de sección
    gsap.utils.toArray(".reveal-header").forEach((header) => {
      gsap.to(header, {
        scrollTrigger: {
          trigger: header,
          start: "top 85%",
        },
        opacity: 1,
        y: -20,
        duration: 1,
        ease: "power3.out"
      });
    });

    // 2. Animación del Carrusel (Slide up)
    gsap.from(".swiper-container", {
      scrollTrigger: {
        trigger: ".swiper-container",
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out"
    });

    // 3. Animación de las InfoCards con Stagger
    gsap.to(".info-card", {
      scrollTrigger: {
        trigger: ".why-us-section",
        start: "top 75%",
      },
      opacity: 1,
      y: -20,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.4)"
    });

    // 4. Animación sutil de la sección de Delivery
    gsap.from(".delivery-anim", {
      scrollTrigger: {
        trigger: ".delivery-anim",
        start: "top 80%",
      },
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  }, []);

  return (
    <>
      <Hero />
      <MainContent>
        {/* Sabores Destacados */}
        <div style={{ marginTop: '3rem' }}>
          <SectionHeader className="reveal-header">
            <h2>Sabores Destacados</h2>
            <p>Nuestros favoritos de la temporada, listos para refrescar tu día.</p>
          </SectionHeader>
          
          <div className="swiper-container">
            <Swiper
              modules={[Pagination, Autoplay, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true} 
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={true} 
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              style={{ padding: '2rem 1rem 4rem 1rem' }}
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
        </div>
        
        {/* Delivery Section */}
        <div className="delivery-anim" style={{ marginTop: '1.5rem' }}>
          <DeliverySection />
        </div>
        
        {/* Why Us Section */}
        <div className="why-us-section" style={{ marginTop: '3.5rem', marginBottom: '4rem' }}>
          <SectionHeader className="reveal-header">
            <h2>¿Por qué elegir Velluto?</h2>
            <p>Creamos helados con ingredientes reales y recetas cuidadas.</p>
          </SectionHeader>

          <WhyUsGrid>
            <InfoCard className="info-card" $bgImage={imgNatural}>
              <h3>Ingredientes Naturales</h3>
              <p>Seleccionamos materias primas frescas para lograr sabor auténtico.</p>
            </InfoCard>

            <InfoCard className="info-card" $bgImage={imgArtesanal}>
              <h3>Recetas Artesanales</h3>
              <p>Cada lote se prepara con atención al detalle y procesos de calidad.</p>
            </InfoCard>

            <InfoCard className="info-card" $bgImage={imgSabores}>
              <h3>Sabores Memorables</h3>
              <p>Combinaciones clásicas y creativas pensadas para sorprender.</p>
            </InfoCard>
          </WhyUsGrid>
        </div>
      </MainContent>
    </>
  );
}