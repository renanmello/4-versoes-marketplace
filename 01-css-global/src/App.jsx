import React from "react";
import { PRODUCTS } from "./data/products";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <section className="product-grid" aria-label="Lista de produtos">
          {PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
        </section>
      </main>
    </>
  );
}
