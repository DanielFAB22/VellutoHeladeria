import styled from "styled-components";


const CardContainer = styled.div`
  border: 2px solid black;
  padding: 1rem;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const ImagePlaceholder = styled.div`
  width: 8rem; /
  height: 8rem; 
  border: 2px solid black;
  flex-shrink: 0;
  position: relative;
  background-color: white;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const InfoWrapper = styled.div`
  flex: 1;

  h3 {
    font-weight: 600;
    margin-bottom: 0.25rem;
    color: #1f2937;
    font-size: 1rem;
  }

  .price {
    font-size: 0.875rem;
    color: #4b5563; 
    margin-bottom: 0.25rem;
  }

  .description {
    font-size: 0.875rem;
    color: #374151; 
    line-height: 1.25rem;
  }
`;

const ActionWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const OrderButton = styled.button`
  border: 2px solid black;
  border-radius: 9999px;
  padding: 0.25rem 1.5rem;
  background-color: white;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f9fafb;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;



export function FlavorCard({ name, description, price }) {
  return (
    <CardContainer>
      <ContentWrapper>
        
        <ImagePlaceholder>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <line x1="0" y1="0" x2="100" y2="100" stroke="black" strokeWidth="1" />
            <line x1="100" y1="0" x2="0" y2="100" stroke="black" strokeWidth="1" />
          </svg>
        </ImagePlaceholder>
        
        <InfoWrapper>
          <h3>{name}</h3>
          <p className="price">{price}</p>
          <p className="description">{description}</p>
        </InfoWrapper>
      </ContentWrapper>
      
      <ActionWrapper>
        <OrderButton>
          Ordenar »
        </OrderButton>
      </ActionWrapper>
    </CardContainer>
  );
}