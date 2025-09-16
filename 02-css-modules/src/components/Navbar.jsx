import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.body.className = dark ? styles.dark : "";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.right}>
        <button aria-label="Toggle Theme" onClick={() => setDark(!dark)}>🌓</button>
        <span className={styles.badge}>3</span>
      </div>
    </nav>
  );
}
