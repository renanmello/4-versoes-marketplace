import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background: white;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Button = styled.button`
  background: #007bff;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-size: 0.9rem;
  transition: 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <Title>Minha Loja</Title>
      <Button>Carrinho 🛒</Button>
    </Nav>
  );
}
