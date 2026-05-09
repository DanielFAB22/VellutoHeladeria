import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; 
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  SABORES,
  BASES,
  TOPPINGS
} from "../../data/sabores";



const BuilderLayout = styled.div` display: grid; grid-template-columns: 1fr; gap: 2rem; @media (min-width: 1100px) { grid-template-columns: 1.2fr 300px 350px; align-items: start; } `;
const VisualContainer = styled.div` display: flex; flex-direction: column; align-items: center; justify-content: flex-end; height: 400px; background: #fdfaf6; border-radius: 24px; position: sticky; top: 100px; overflow: hidden; padding-bottom: 30px; border: 1px dashed ${({ theme }) => theme.colors.border}; `;
const ScoopVisual = styled.div` width: 85px; height: 85px; border-radius: 50%; background: ${({ $color }) => $color || "#f0f0f0"}; margin-bottom: -45px; z-index: ${({ $index }) => 10 - $index}; box-shadow: inset -10px -10px 0 rgba(0,0,0,0.06); border: 2px solid rgba(255,255,255,0.4); position: relative; &::before { content: ''; position: absolute; top: 15px; left: 20px; width: 15px; height: 10px; background: rgba(255,255,255,0.3); border-radius: 50%; } `;
const PageWrapper = styled.div` max-width: 1300px; margin: 0 auto; padding: 4rem 2rem; `;
const Title = styled.h1` font-size: 2.8rem; margin-bottom: 3rem; text-align: center; font-family: ${({ theme }) => theme.fonts.title}; `;
const Section = styled.div` margin-bottom: 2rem; background: white; padding: 2rem; border-radius: 24px; border: 1px solid ${({ theme }) => theme.colors.border}; opacity: 0; `;
const SectionTitle = styled.h2` font-size: 1.4rem; margin-bottom: 1.5rem; color: ${({ theme }) => theme.colors.primary}; `;
const OptionsGrid = styled.div` display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; `;
const OptionCard = styled.div` padding: 1.2rem; border-radius: 18px; border: 2px solid ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.border)}; background: ${({ $active, theme }) => ($active ? theme.colors.primary + "10" : "white")}; cursor: pointer; transition: 0.25s ease; text-align: center; &:hover { transform: translateY(-3px); } h3 { font-size: 1rem; margin-bottom: 0.4rem; } p { font-size: 0.85rem; opacity: 0.7; line-height: 1.3; } .extra { color: #e67e22; font-weight: bold; font-size: 0.85rem; display: block; margin-top: 5px; } `;
const ScoopSelector = styled.div` display: flex; gap: 1rem; `;
const ScoopButton = styled.button` width: 60px; height: 60px; border-radius: 15px; border: none; font-size: 1.2rem; font-weight: 700; cursor: pointer; background: ${({ $active, theme }) => ($active ? theme.colors.primary : "#f5f5f5")}; color: ${({ $active }) => ($active ? "white" : "black")}; `;
const FlavorSelect = styled.select` width: 100%; padding: 1rem; border-radius: 14px; border: 2px solid ${({ theme }) => theme.colors.border}; margin-bottom: 1rem; background: white; `;
const ToppingsGrid = styled.div` display: flex; flex-wrap: wrap; gap: 0.8rem; `;
const ToppingButton = styled.button` padding: 0.6rem 1rem; border-radius: 999px; border: 1px solid ${({ $active, theme }) => ($active ? theme.colors.primary : "#eee")}; cursor: pointer; background: ${({ $active, theme }) => ($active ? theme.colors.primary : "white")}; color: ${({ $active }) => ($active ? "white" : "black")}; `;
const SummaryCard = styled.div` position: sticky; top: 100px; background: white; border-radius: 24px; padding: 2rem; box-shadow: 0 10px 40px rgba(0,0,0,0.08); border: 1px solid #f0f0f0; `;
const SummaryItem = styled.div` margin-bottom: 1.2rem; span { display: block; opacity: 0.5; font-size: 0.8rem; text-transform: uppercase; margin-bottom: 0.2rem; } strong { font-size: 0.95rem; } `;
const Total = styled.div` margin-top: 1.5rem; padding-top: 1rem; border-top: 2px solid #f9f9f9; display: flex; justify-content: space-between; align-items: center; h3 { font-size: 1.4rem; color: ${({ theme }) => theme.colors.primary}; } `;

const OrderButton = styled.button` 
  width: 100%; 
  margin-top: 1.5rem; 
  padding: 1rem; 
  border: none; 
  border-radius: 16px; 
  background: ${({ theme }) => theme.colors.primary}; 
  color: white; 
  font-weight: 700; 
  cursor: pointer;
  transition: 0.3s;
  &:hover { filter: brightness(1.1); }
`;

const CheckoutButton = styled(OrderButton)`
  background: #2ecc71;
  margin-top: 0.8rem;
  &:hover { background: #27ae60; }
`;

const ToastContainer = styled.div` position: fixed; top: 10%; left: 50%; transform: translateX(-50%); z-index: 9999; pointer-events: none; `;
const ToastBody = styled.div` background: ${({ $type }) => ($type === "error" ? "#e74c3c" : "#2ecc71")}; color: white; padding: 1rem 2rem; border-radius: 15px; opacity: 0; `;

const BaseVisual = styled.div`
  z-index: 1;
  ${({ $type }) => $type === "Cono" && `width: 80px; height: 110px; background: #e3a661; clip-path: polygon(0 0, 100% 0, 50% 100%); background-image: repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(0,0,0,0.1) 5px, rgba(0,0,0,0.1) 10px);`}
  ${({ $type }) => $type === "Vaso" && `width: 100px; height: 60px; background: #fff; border: 2px solid #eee; border-radius: 0 0 20px 20px;`}
  ${({ $type }) => ($type === "Brownie" || $type === "Waffle Bowl") && `width: 120px; height: 40px; background: #5d4037; border-radius: 10px;`}
`;

const formatCOP = (val) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(val);


export function Ordenar({ cart, setCart }) {
  const [order, setOrder] = useState({ base: "", scoops: 1, flavors: [""], toppings: [] });
  const [notification, setNotification] = useState({ message: "", type: "success" });
  const navigate = useNavigate();

  useGSAP(() => {
    gsap.to(".reveal-section", { opacity: 1, y: -20, stagger: 0.1, duration: 0.6, ease: "power3.out" });
  }, []);

  useGSAP(() => {
    gsap.fromTo(".scoop-anim", 
      { y: -200, opacity: 0, scale: 0.5 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: "bounce.out" }
    );
  }, [order.flavors, order.scoops]);

  const showToast = (message, type = "success") => {
    setNotification({ message, type });
    const tl = gsap.timeline();
    tl.fromTo(".toast-inner", { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: "back.out(1.7)", overwrite: "all" })
      .to(".toast-inner", { y: -20, opacity: 0, duration: 0.4, delay: 2.5, ease: "power2.in" });
  };

  const getColor = (flavorId) => SABORES.find(s => s.id === flavorId)?.color || "transparent";

  const updateFlavor = (idx, val) => {
    const updated = [...order.flavors];
    updated[idx] = val;
    setOrder({ ...order, flavors: updated });
  };

  const calculateTotal = () => {
    const baseP = BASES.find(b => b.name === order.base)?.price || 0;
    const flavorsP = order.flavors.reduce((acc, id) => {
        const sabor = SABORES.find(s => s.id === id);
        return acc + (sabor ? sabor.price : 0);
    }, 0);
    const toppingsP = order.toppings.reduce((acc, t) => acc + t.price, 0);
    return baseP + flavorsP + toppingsP;
  };

  const handleAddToCart = () => {
    if (!order.base) return showToast("Elige una base 🍦", "error");
    if (order.flavors.some(f => f === "")) return showToast("Completa tus sabores ✨", "error");
    
    
    const flavorNames = order.flavors.map(id => SABORES.find(s => s.id === id).name);
    
    setCart([...cart, { ...order, flavors: flavorNames, finalPrice: calculateTotal() }]);
    showToast("¡Agregado a Velluto! 😋");
    
    
    setOrder({ base: "", scoops: 1, flavors: [""], toppings: [] });
  };

  return (
    <PageWrapper>
      <ToastContainer>
        <ToastBody className="toast-inner" $type={notification.type}>
          {notification.type === "success" ? "✅" : "⚠️"} {notification.message}
        </ToastBody>
      </ToastContainer>

      <Title>Crea tu Obra Maestra</Title>

      <BuilderLayout>
        <div>
          <Section className="reveal-section">
            <SectionTitle>1. Base y Tamaño</SectionTitle>
            <OptionsGrid>
              {BASES.map(b => (
                <OptionCard key={b.id} $active={order.base === b.name} onClick={() => setOrder({ ...order, base: b.name })}>
                  <h3>{b.name}</h3>
                  {b.price > 0 && <span className="extra">+{formatCOP(b.price)}</span>}
                </OptionCard>
              ))}
            </OptionsGrid>
            <div style={{ marginTop: '1.5rem' }}>
              <p style={{ marginBottom: '0.8rem', fontSize: '0.9rem' }}>¿Cuántas bolas quieres?</p>
              <ScoopSelector>
                {[1, 2, 3].map(n => (
                  <ScoopButton key={n} $active={order.scoops === n} onClick={() => setOrder({ ...order, scoops: n, flavors: Array(n).fill("") })}>{n}</ScoopButton>
                ))}
              </ScoopSelector>
            </div>
          </Section>

          <Section className="reveal-section">
            <SectionTitle>2. Sabores</SectionTitle>
            {order.flavors.map((fid, i) => (
              <FlavorSelect key={i} value={fid} onChange={(e) => updateFlavor(i, e.target.value)}>
                <option value="">Bola #{i + 1}: Selecciona...</option>
                {SABORES.map(s => <option key={s.id} value={s.id}>{s.name} (+{formatCOP(s.price)})</option>)}
              </FlavorSelect>
            ))}
          </Section>

          <Section className="reveal-section">
            <SectionTitle>3. Toppings</SectionTitle>
            <ToppingsGrid>
              {TOPPINGS.map(t => (
                <ToppingButton key={t.id} $active={order.toppings.some(item => item.id === t.id)} onClick={() => {
                  const exists = order.toppings.find(item => item.id === t.id);
                  setOrder({...order, toppings: exists ? order.toppings.filter(it => it.id !== t.id) : [...order.toppings, t]});
                }}>
                  {t.name}
                </ToppingButton>
              ))}
            </ToppingsGrid>
          </Section>
        </div>

        <VisualContainer className="reveal-section">
          {order.flavors.map((flavorId, index) => (
            flavorId && (
              <ScoopVisual 
                key={`${flavorId}-${index}`} 
                className="scoop-anim"
                $color={getColor(flavorId)} 
                $index={index} 
              />
            )
          )).reverse()}
          <BaseVisual $type={order.base} />
        </VisualContainer>

        <SummaryCard className="reveal-section">
          <h2 style={{ marginBottom: '1rem' }}>Resumen</h2>
          <SummaryItem><span>Base</span><strong>{order.base || "---"}</strong></SummaryItem>
          <SummaryItem><span>Bolas</span><strong>{order.flavors.filter(f => f).length} seleccionadas</strong></SummaryItem>
          <Total>
            <span>Total Helado</span>
            <h3>{formatCOP(calculateTotal())}</h3>
          </Total>
          
          <OrderButton onClick={handleAddToCart}>Añadir al Carrito</OrderButton>

          
          {cart.length > 0 && (
            <div style={{ marginTop: '1.5rem', borderTop: '2px solid #f9f9f9', paddingTop: '1rem' }}>
              <p style={{ textAlign: 'center', marginBottom: '0.8rem', fontSize: '0.85rem' }}>
                🛒 Tienes <strong>{cart.length}</strong> helados listos
              </p>
              <CheckoutButton onClick={() => navigate("/recibo")}>
                Finalizar Compra ({formatCOP(cart.reduce((acc, item) => acc + item.finalPrice, 0))})
              </CheckoutButton>
            </div>
          )}
        </SummaryCard>
      </BuilderLayout>
    </PageWrapper>
  );
}