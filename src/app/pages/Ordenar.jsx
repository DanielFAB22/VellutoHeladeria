import React, { useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  SABORES,
  BASES,
  TOPPINGS
} from "../../data/sabores";

// --- ESTILOS ---
const PageWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 3rem;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.title};
`;

const BuilderLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  @media (min-width: 900px) {
    grid-template-columns: 1fr 380px;
    align-items: start;
  }
`;

const Section = styled.div`
  margin-bottom: 3rem;
  background: white;
  padding: 2rem;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  opacity: 0; 
`;

const SectionTitle = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
`;

const OptionCard = styled.div`
  padding: 1.2rem;
  border-radius: 18px;
  border: 2px solid ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.border)};
  background: ${({ $active, theme }) => ($active ? theme.colors.primary + "10" : "white")};
  cursor: pointer;
  transition: 0.25s ease;
  text-align: center;
  &:hover { transform: translateY(-3px); }
  h3 { font-size: 1rem; margin-bottom: 0.4rem; }
  p { font-size: 0.85rem; opacity: 0.7; line-height: 1.3; margin-bottom: 0.5rem; }
  .extra { color: #e67e22; font-weight: bold; font-size: 0.85rem; display: block; margin-top: 5px; }
`;

const ScoopSelector = styled.div`
  display: flex;
  gap: 1rem;
`;

const ScoopButton = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 20px;
  border: none;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s ease;
  background: ${({ $active, theme }) => ($active ? theme.colors.primary : "#f5f5f5")};
  color: ${({ $active }) => ($active ? "white" : "black")};
  &:hover { transform: translateY(-3px); }
`;

const FlavorSelect = styled.select`
  width: 100%;
  padding: 1rem;
  border-radius: 14px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  margin-bottom: 1.5rem;
  background: white;
`;

const ToppingsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const ToppingButton = styled.button`
  padding: 0.8rem 1.2rem;
  border-radius: 999px;
  border: 1px solid ${({ $active, theme }) => ($active ? theme.colors.primary : "#eee")};
  cursor: pointer;
  transition: 0.2s ease;
  background: ${({ $active, theme }) => ($active ? theme.colors.primary : "white")};
  color: ${({ $active }) => ($active ? "white" : "black")};
  font-weight: 500;
  &:hover { transform: translateY(-2px); }
`;

const SummaryCard = styled.div`
  position: sticky;
  top: 100px;
  background: white;
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 10px 40px rgba(0,0,0,0.08);
  border: 1px solid #f0f0f0;
`;

const SummaryItem = styled.div`
  margin-bottom: 1.2rem;
  span { display: block; opacity: 0.5; font-size: 0.85rem; text-transform: uppercase; margin-bottom: 0.4rem; letter-spacing: 0.5px; }
  strong { font-size: 1rem; color: ${({ theme }) => theme.colors.text}; }
`;

const Total = styled.div`
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 2px solid #f9f9f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 { font-size: 1.5rem; color: ${({ theme }) => theme.colors.primary}; }
`;

const OrderButton = styled.button`
  width: 100%;
  margin-top: 2rem;
  padding: 1.2rem;
  border: none;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover { transform: scale(1.02); filter: brightness(1.05); }
`;

// --- TOAST FIJO (Siempre en el DOM) ---
const ToastContainer = styled.div`
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  pointer-events: none;
`;

const ToastBody = styled.div`
  background: ${({ $type }) => ($type === "error" ? "#e74c3c" : "#2ecc71")};
  color: white;
  padding: 1rem 2rem;
  border-radius: 15px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.25);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 300px;
  justify-content: center;
  opacity: 0; /* Empieza oculto */
`;

const formatCOP = (val) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(val);

export function Ordenar() {
  const [order, setOrder] = useState({ base: "", scoops: 1, flavors: [""], toppings: [] });
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState({ message: "", type: "success" });

  // Animaciones iniciales de las secciones
  useGSAP(() => {
    gsap.to(".reveal-section", {
      opacity: 1,
      y: -20,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out"
    });
  }, []);

  // FUNCIÓN DE TOAST CORREGIDA
  const showToast = (message, type = "success") => {
    setNotification({ message, type });

    // Timeline para manejar entrada y salida sin conflictos
    const tl = gsap.timeline();

    tl.fromTo(".toast-inner", 
      { 
        y: -50, 
        opacity: 0 
      }, 
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.4, 
        ease: "back.out(1.7)",
        overwrite: "all" // Mata cualquier animación previa si das click rápido
      }
    ).to(".toast-inner", {
      y: -20,
      opacity: 0,
      duration: 0.4,
      delay: 2.5, // Tiempo que se queda visible
      ease: "power2.in"
    });
  };

  const handleScoops = (num) => setOrder({ ...order, scoops: num, flavors: Array(num).fill("") });

  const updateFlavor = (idx, val) => {
    const updated = [...order.flavors];
    updated[idx] = val;
    setOrder({ ...order, flavors: updated });
  };

  const toggleTopping = (t) => {
    const exists = order.toppings.find(item => item.id === t.id);
    setOrder({
      ...order,
      toppings: exists ? order.toppings.filter(item => item.id !== t.id) : [...order.toppings, t]
    });
  };

  const calculateTotal = () => {
    const baseObj = BASES.find(b => b.name === order.base);
    const baseP = baseObj ? baseObj.price : 0;
    const flavorsP = order.flavors.reduce((acc, id) => acc + (SABORES.find(s => s.id === id)?.price || 0), 0);
    const toppingsP = order.toppings.reduce((acc, t) => acc + t.price, 0);
    return baseP + flavorsP + toppingsP;
  };

  const total = calculateTotal();

  const handleAddToCart = () => {
    if (!order.base) return showToast("Por favor, elige una base primero 🍦", "error");
    if (order.flavors.some(f => f === "")) return showToast("Elige todos los sabores de tus bolas ✨", "error");

    setCart([...cart, { ...order, finalPrice: total }]);
    showToast("¡Agregado al carrito de Velluto! 😋");
    
    // Reset del formulario
    setOrder({ base: "", scoops: 1, flavors: [""], toppings: [] });
  };

  return (
    <PageWrapper>
      {/* Notificación persistente controlada por GSAP */}
      <ToastContainer>
        <ToastBody className="toast-inner" $type={notification.type}>
          {notification.type === "success" ? "✅" : "⚠️"} {notification.message}
        </ToastBody>
      </ToastContainer>

      <Title>Crea tu Obra Maestra</Title>

      <BuilderLayout>
        <div>
          <Section className="reveal-section">
            <SectionTitle>1. Elige tu Base</SectionTitle>
            <OptionsGrid>
              {BASES.map(b => (
                <OptionCard key={b.id} $active={order.base === b.name} onClick={() => setOrder({ ...order, base: b.name })}>
                  <h3>{b.name}</h3>
                  <p>{b.description}</p>
                  {b.price > 0 && <span className="extra">+{formatCOP(b.price)}</span>}
                </OptionCard>
              ))}
            </OptionsGrid>
          </Section>

          <Section className="reveal-section">
            <SectionTitle>2. ¿Cuántas Bolas?</SectionTitle>
            <ScoopSelector>
              {[1, 2, 3].map(n => (
                <ScoopButton key={n} $active={order.scoops === n} onClick={() => handleScoops(n)}>{n}</ScoopButton>
              ))}
            </ScoopSelector>
          </Section>

          <Section className="reveal-section">
            <SectionTitle>3. Selecciona Sabores</SectionTitle>
            {order.flavors.map((fid, i) => (
              <div key={i} style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ marginBottom: '0.5rem', opacity: 0.6, fontSize: '0.9rem' }}>Bola #{i + 1}</h4>
                <FlavorSelect value={fid} onChange={(e) => updateFlavor(i, e.target.value)}>
                  <option value="">Escoge un sabor...</option>
                  {SABORES.map(s => <option key={s.id} value={s.id}>{s.name} ({formatCOP(s.price)})</option>)}
                </FlavorSelect>
              </div>
            ))}
          </Section>

          <Section className="reveal-section">
            <SectionTitle>4. Toppings Finales</SectionTitle>
            <ToppingsGrid>
              {TOPPINGS.map(t => (
                <ToppingButton key={t.id} $active={order.toppings.some(item => item.id === t.id)} onClick={() => toggleTopping(t)}>
                  {t.name} (+{formatCOP(t.price)})
                </ToppingButton>
              ))}
            </ToppingsGrid>
          </Section>
        </div>

        <SummaryCard>
          <h2 style={{ marginBottom: '1.5rem' }}>Tu Pedido</h2>
          
          <SummaryItem>
            <span>Base</span>
            <strong>{order.base || "Pendiente..."}</strong>
          </SummaryItem>

          <SummaryItem>
            <span>Sabores</span>
            {order.flavors.filter(f => f !== "").length > 0 ? (
                order.flavors.map((id, i) => (
                  <div key={i} style={{ fontSize: '0.9rem', marginBottom: '4px' }}>
                    • {SABORES.find(s => s.id === id)?.name}
                  </div>
                ))
            ) : (
                <strong style={{ opacity: 0.3 }}>Sin seleccionar</strong>
            )}
          </SummaryItem>

          <SummaryItem>
            <span>Toppings</span>
            <strong>{order.toppings.length > 0 ? order.toppings.map(t => t.name).join(", ") : "Ninguno"}</strong>
          </SummaryItem>

          <Total>
            <span>Subtotal</span>
            <h3>{formatCOP(total)}</h3>
          </Total>

          <OrderButton onClick={handleAddToCart}>Agregar al Carrito</OrderButton>

          {cart.length > 0 && (
            <div style={{ marginTop: '1.5rem', textAlign: 'center', background: '#f8f8f8', padding: '10px', borderRadius: '10px' }}>
              🍨 <strong>{cart.length}</strong> helado(s) listos
            </div>
          )}
        </SummaryCard>
      </BuilderLayout>
    </PageWrapper>
  );
}