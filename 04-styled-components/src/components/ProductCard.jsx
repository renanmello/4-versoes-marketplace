import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const Price = styled.p`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Rating = styled.p`
  color: #f1c40f;
  margin-bottom: 1rem;
`;

const Buttons = styled.div`
  margin-top: auto;
  display: flex;
  gap: 0.5rem;
`;

const Button = styled.button`
  flex: 1;
  padding: 0.5rem;
  border-radius: 6px;
  font-weight: bold;
  background: ${(props) => (props.primary ? "#007bff" : "#ddd")};
  color: ${(props) => (props.primary ? "white" : "#333")};

  &:hover {
    background: ${(props) => (props.primary ? "#0056b3" : "#bbb")};
  }
`;

export default function ProductCard({ product }) {
  return (
    <Card>
      <Title>{product.name}</Title>
      <Price>R$ {product.price}</Price>
      <Rating>
        {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
      </Rating>
      <Buttons>
        <Button>Detalhes</Button>
        <Button primary>Adicionar</Button>
      </Buttons>
    </Card>
  );
}
