import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Importamos para la navegación

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

const ImageWrapper = styled.div`
  width: 100%;
  height: 220px;
  border-radius: 18px;
  overflow: hidden; 
  background: #f5f5f5; 

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
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
    min-height: 3em; 
  }
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

export function FlavorCard({ name, description, price, image }) {
  const navigate = useNavigate();

  const handleOrder = () => {
    // Redirige a /ordenar y envía los datos del sabor seleccionado
    navigate("/ordenar", { 
      state: { 
        flavorName: name, 
        flavorPrice: price, 
        flavorImage: image 
      } 
    });
  };

  return (
    <CardContainer>
      <ImageWrapper>
        <img src={image || "/sabores/default.png"} alt={name} />
      </ImageWrapper>

      <InfoWrapper>
        <h3>{name}</h3>
        <p className="price">{price}</p>
        <p className="description">{description}</p>
      </InfoWrapper>

      {/* Agregamos el evento onClick al botón */}
      <OrderButton onClick={handleOrder}>
        Ordenar ahora
      </OrderButton>
    </CardContainer>
  );
}