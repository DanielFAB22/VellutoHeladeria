import styled from "styled-components";


const CardContainer = styled.div`
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 24px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  transition: 0.25s ease;
  box-shadow: ${({ theme }) => theme.shadow.soft};

  &:hover {
    transform: translateY(-6px);
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 220px;
  border-radius: 18px;
  background: linear-gradient(
    135deg,
    #f5e8da,
    #ead7c1
  );

  display: flex;
  align-items: center;
  justify-content: center;
`;


const InfoWrapper = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.4rem;
    color: ${({ theme }) => theme.colors.text};
  }

  .price {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    margin-bottom: 0.6rem;
  }

  .description {
    color: ${({ theme }) => theme.colors.dark};
    line-height: 1.6;
    font-size: 0.95rem;
  }
`;

const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const OrderButton = styled.button`
  width: 100%;
  padding: 0.9rem;
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.dark};
  }
`;


export function FlavorCard({ name, description, price }) {
  return (
  <CardContainer>

    <ImagePlaceholder>🍨</ImagePlaceholder>

    <InfoWrapper>
      <h3>{name}</h3>
      <p className="price">{price}</p>
      <p className="description">{description}</p>
    </InfoWrapper>

    <OrderButton>
      Ordenar ahora
    </OrderButton>

  </CardContainer>
);
}