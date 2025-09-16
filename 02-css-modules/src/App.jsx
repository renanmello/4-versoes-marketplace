import React from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import styles from "./App.module.css";

const products = [
  { id: 1, title: "Produto A", price: "R$ 100", rating: 4, tag: "Novo", image: "https://via.placeholder.com/300" },
  { id: 2, title: "Produto B", price: "R$ 200", rating: 5, tag: "Promo", image: "https://via.placeholder.com/300" },
  { id: 3, title: "Produto C", price: "R$ 150", rating: 3, tag: "Novo", image: "https://via.placeholder.com/300" },
  { id: 4, title: "Produto D", price: "R$ 250", rating: 4, tag: "Promo", image: "https://via.placeholder.com/300" },
  { id: 5, title: "Produto E", price: "R$ 300", rating: 5, tag: "Novo", image: "https://via.placeholder.com/300" },
  { id: 6, title: "Produto F", price: "R$ 180", rating: 2, tag: "Promo", image: "https://via.placeholder.com/300" }
];

export default function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <main className={styles.grid}>
        {products.map(p => <ProductCard key={p.id} {...p} />)}
      </main>
    </div>
  );
}
