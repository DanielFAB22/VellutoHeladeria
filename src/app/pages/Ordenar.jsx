import React, { useState } from "react";
import styled from "styled-components";

import {
  SABORES,
  BASES,
  TOPPINGS
} from "../../data/sabores";

const PageWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 3rem;
  text-align: center;
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
`;

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
`;

const OptionCard = styled.div`
  padding: 1.2rem;
  border-radius: 18px;
  border: 2px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.primary : theme.colors.border};

  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary + "10" : "white"};

  cursor: pointer;
  transition: 0.25s ease;

  text-align: center;

  &:hover {
    transform: translateY(-3px);
  }

  h3 {
    font-size: 1rem;
    margin-bottom: 0.4rem;
  }

  p {
    font-size: 0.9rem;
    opacity: 0.7;
  }
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

  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary : "#f5f5f5"};

  color: ${({ $active }) => ($active ? "white" : "black")};

  &:hover {
    transform: translateY(-3px);
  }
`;

const FlavorGroup = styled.div`
  margin-bottom: 2rem;
`;

const FlavorSelect = styled.select`
  width: 100%;
  padding: 1rem;

  border-radius: 14px;
  border: 2px solid ${({ theme }) => theme.colors.border};

  font-size: 1rem;
  font-family: inherit;

  outline: none;
`;

const ToppingsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ToppingButton = styled.button`
  padding: 0.8rem 1.2rem;

  border-radius: 999px;
  border: none;

  cursor: pointer;
  transition: 0.2s ease;

  background: ${({ $active, theme }) =>
    $active ? theme.colors.primary : "#f3f3f3"};

  color: ${({ $active }) => ($active ? "white" : "black")};

  font-weight: 500;

  &:hover {
    transform: translateY(-2px);
  }
`;

const SummaryCard = styled.div`
  position: sticky;
  top: 120px;

  background: white;
  border-radius: 24px;

  padding: 2rem;

  box-shadow: 0 10px 30px rgba(0,0,0,0.06);

  h2 {
    margin-bottom: 1.5rem;
  }
`;

const SummaryItem = styled.div`
  margin-bottom: 1rem;

  span {
    display: block;
    opacity: 0.6;
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
  }

  strong {
    font-size: 1rem;
  }
`;

const Total = styled.div`
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 1.3rem;
  }
`;

const OrderButton = styled.button`
  width: 100%;
  margin-top: 2rem;

  padding: 1rem;
  border: none;

  border-radius: 16px;

  background: ${({ theme }) => theme.colors.primary};

  color: white;

  font-size: 1rem;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s ease;

  &:hover {
    opacity: 0.92;
    transform: translateY(-2px);
  }
`;

export function Ordenar() {
  const [order, setOrder] = useState({
    base: "",
    scoops: 1,
    flavors: [""],
    toppings: []
  });

  const [cart, setCart] = useState([]);

  const handleScoops = (amount) => {
    setOrder({
      ...order,
      scoops: amount,
      flavors: Array(amount).fill("")
    });
  };

  const updateFlavor = (index, value) => {
    const updated = [...order.flavors];
    updated[index] = value;

    setOrder({
      ...order,
      flavors: updated
    });
  };

  const toggleTopping = (topping) => {
    if (order.toppings.includes(topping)) {
      setOrder({
        ...order,
        toppings: order.toppings.filter(t => t !== topping)
      });
    } else {
      setOrder({
        ...order,
        toppings: [...order.toppings, topping]
      });
    }
  };

  const addToCart = () => {
    setCart([...cart, order]);

    // reinicia constructor
    setOrder({
      base: "",
      scoops: 1,
      flavors: [""],
      toppings: []
    });
  };

  const total =
    order.scoops * 4 +
    order.toppings.length * 0.5;

  return (
    <PageWrapper>
      <Title>Arma tu helado</Title>

      <BuilderLayout>

        <div>

          {/* BASE */}
          <Section>
            <SectionTitle>Escoge la base</SectionTitle>

            <OptionsGrid>
              {BASES.map(base => (
                <OptionCard
                  key={base.id}
                  $active={order.base === base.name}
                  onClick={() =>
                    setOrder({
                      ...order,
                      base: base.name
                    })
                  }
                >
                  <h3>{base.name}</h3>
                  <p>{base.description}</p>
                </OptionCard>
              ))}
            </OptionsGrid>
          </Section>

          {/* SCOOPS */}
          <Section>
            <SectionTitle>¿Cuántas bolas?</SectionTitle>

            <ScoopSelector>
              {[1,2,3].map(num => (
                <ScoopButton
                  key={num}
                  $active={order.scoops === num}
                  onClick={() => handleScoops(num)}
                >
                  {num}
                </ScoopButton>
              ))}
            </ScoopSelector>
          </Section>

          {/* FLAVORS */}
          <Section>
            <SectionTitle>Selecciona los sabores</SectionTitle>

            {order.flavors.map((flavor, index) => (
              <FlavorGroup key={index}>
                <h3 style={{ marginBottom: "0.8rem" }}>
                  Bola {index + 1}
                </h3>

                <FlavorSelect
                  value={flavor}
                  onChange={(e) =>
                    updateFlavor(index, e.target.value)
                  }
                >
                  <option value="">
                    Escoge un sabor
                  </option>

                  {SABORES.map(sabor => (
                    <option
                      key={sabor.id}
                      value={sabor.name}
                    >
                      {sabor.name}
                    </option>
                  ))}
                </FlavorSelect>
              </FlavorGroup>
            ))}
          </Section>

          {/* TOPPINGS */}
          <Section>
            <SectionTitle>Toppings</SectionTitle>

            <ToppingsGrid>
              {TOPPINGS.map(topping => (
                <ToppingButton
                  key={topping.id}
                  $active={order.toppings.includes(topping.name)}
                  onClick={() =>
                    toggleTopping(topping.name)
                  }
                >
                  {topping.name}
                </ToppingButton>
              ))}
            </ToppingsGrid>
          </Section>

        </div>

        {/* SUMMARY */}
        <SummaryCard>

          <h2>Tu pedido</h2>

          <SummaryItem>
            <span>Base</span>
            <strong>
              {order.base || "No seleccionada"}
            </strong>
          </SummaryItem>

          <SummaryItem>
            <span>Bolas</span>
            <strong>{order.scoops}</strong>
          </SummaryItem>

          <SummaryItem>
            <span>Sabores</span>

            {order.flavors.map((f, i) => (
              <div key={i}>
                {f || "Sin seleccionar"}
              </div>
            ))}
          </SummaryItem>

          <SummaryItem>
            <span>Toppings</span>

            <strong>
              {order.toppings.length > 0
                ? order.toppings.join(", ")
                : "Ninguno"}
            </strong>
          </SummaryItem>

          <Total>
            <span>Total</span>
            <h3>${total.toFixed(2)}</h3>
          </Total>

          <OrderButton onClick={addToCart}>
            Agregar pedido
          </OrderButton>

          {cart.length > 0 && (
            <>
              <h2 style={{ marginTop: "3rem" }}>
                Tu domicilio
              </h2>

              {cart.map((item, index) => (
                <div
                  key={index}
                  style={{
                    padding: "1rem",
                    marginTop: "1rem",
                    borderRadius: "18px",
                    background: "#f8f8f8"
                  }}
                >
                  <p>
                    <strong>Base:</strong> {item.base}
                  </p>

                  <p>
                    <strong>Bolas:</strong> {item.scoops}
                  </p>

                  <p>
                    <strong>Sabores:</strong>{" "}
                    {item.flavors.join(", ")}
                  </p>

                  <p>
                    <strong>Toppings:</strong>{" "}
                    {item.toppings.length > 0
                      ? item.toppings.join(", ")
                      : "Ninguno"}
                  </p>
                </div>
              ))}
            </>
          )}
        </SummaryCard>

      </BuilderLayout>
    </PageWrapper>
  );
}