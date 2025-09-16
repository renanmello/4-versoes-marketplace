import React from "react";
import styles from "./Skeleton.module.css";

export default function Skeleton() {
  return (
    <div className={styles.skeleton}>
      <div className={styles.img}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  );
}
