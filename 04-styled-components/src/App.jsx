import React, { useState, useEffect } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import SkeletonCard from "./components/SkeletonCard";
import styled from "styled-components";

const Container = styled.main`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const mockProducts = [
  { id: 1, name: "Produto Incrível A", price: "199,90", rating: 5 },
  { id: 2, name: "Produto Incrível B", price: "149,90", rating: 4 },
  { id: 3, name: "Produto Incrível C", price: "99,90", rating: 3 },
  { id: 4, name: "Produto Incrível D", price: "299,90", rating: 5 },
  { id: 5, name: "Produto Incrível E", price: "89,90", rating: 4 },
];

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          : mockProducts.map((p) => <ProductCard key={p.id} product={p} />)}
      </Container>
    </>
  );
}
