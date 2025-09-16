import React, { useState, useEffect } from "react";
import styles from "./ProductCard.module.css";
import Button from "./Button";
import Skeleton from "./Skeleton";

export default function ProductCard({ title, price, rating, tag, image }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Skeleton />;

  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.img} loading="lazy" />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.price}>{price}</p>
      <p className={styles.rating}>{"★".repeat(rating)}</p>
      <span className={styles.tag}>{tag}</span>
      <Button variant="solid">Adicionar</Button>
    </div>
  );
}
