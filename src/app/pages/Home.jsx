import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Hero } from "../components/Hero";
import { FlavorCard } from "../components/FlavorCard";
import { SABORES } from "../../data/sabores.js";


import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


import imgNatural from "../../assets/porqueelegirnos/vanilla.jpg";
import imgArtesanal from "../../assets/porqueelegirnos/vanilla2.jpg";
import imgSabores from "../../assets/porqueelegirnos/helados1.jpg";

gsap.registerPlugin(ScrollTrigger);



const MainContent = styled.div`
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  overflow-x: clip; 
  position: relative;
  width: 100%;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  opacity: 0;

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

const SwiperWrapper = styled.div`
  position: relative;
 
  margin: 0 auto; 
  width: 100%;

  .swiper {
    overflow: visible !important; 
    cursor: grab;
    
    &:active {
      cursor: grabbing;
    }
  }

 
  .swiper-pagination {
    bottom: 0px !important;
  }

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: #ccc;
    opacity: 0.5;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.primary};
    opacity: 1;
    width: 25px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    .swiper {
      overflow: hidden !important; 
    }
  }
`;

const ContactCTA = styled.section`
  background: ${({ theme }) => theme.colors.secondary || '#fdf2e9'};
  border-radius: 40px;
  padding: 5rem 2rem;
  text-align: center;
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadow.soft};

  h2 {
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    font-size: 1.2rem;
    max-width: 500px;
    color: ${({ theme }) => theme.colors.dark};
    margin-bottom: 1rem;
  }

  button {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    padding: 1.2rem 3rem;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
      filter: brightness(1.1);
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }
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
  opacity: 0;

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
  const navigate = useNavigate();

  useGSAP(() => {
    gsap.utils.toArray(".reveal-header").forEach((header) => {
      gsap.to(header, {
        scrollTrigger: { trigger: header, start: "top 85%" },
        opacity: 1,
        y: -20,
        duration: 1,
        ease: "power3.out"
      });
    });

    gsap.to(".info-card", {
      scrollTrigger: { trigger: ".why-us-section", start: "top 75%" },
      opacity: 1,
      y: -20,
      duration: 0.8,
      stagger: 0.2,
      ease: "back.out(1.4)"
    });

    gsap.from(".contact-anim", {
      scrollTrigger: { trigger: ".contact-anim", start: "top 85%" },
      scale: 0.9,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  }, []);

  return (
    <>
      <Hero />
      <MainContent>
        <div style={{ marginTop: '3rem' }}>
          <SectionHeader className="reveal-header">
            <h2>Sabores Destacados</h2>
            <p>Nuestros favoritos de la temporada, listos para refrescar tu día.</p>
          </SectionHeader>
          
          <SwiperWrapper>
            <Swiper
              Quitamos Navigation de aquí
              modules={[Pagination, Autoplay]}
              spaceBetween={25}
              slidesPerView={1}
              loop={true} 
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              Aseguramos que el grabCursor esté activo para el control invisible
              grabCursor={true}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              style={{ padding: '1.5rem 0 4rem 0' }}
            >
              {destacados.map((flavor) => (
                <SwiperSlide key={flavor.id}>
                  <FlavorCard
                    name={flavor.name}
                    description={flavor.description}
                    price={flavor.price} 
                    image={flavor.image} 
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperWrapper>
        </div>

        <ContactCTA className="contact-anim">
          <h2>¿Tienes alguna duda?</h2>
          <p>Estamos aquí para ayudarte a elegir el sabor perfecto o resolver tus inquietudes sobre Velluto.</p>
          <button onClick={() => navigate("/contacto")}>
            Contactar ahora
          </button>
        </ContactCTA>
        
        <div className="why-us-section" style={{ marginBottom: '4rem' }}>
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