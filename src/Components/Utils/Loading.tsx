import React from "react";
import styles from "./styles/loading.module.css";
function Loading() {
  return (
    <div className={styles.main}>
      <div className={styles.inner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
export function BubbleLoading() {
  return (
    <div className={styles.spring}>
      <span className={styles.bubble1}></span>
      <span className={styles.bubble2}></span>
      <span className={styles.bubble3}></span>
      <span className={styles.bubble4}></span>
      <span className={styles.bubble5}></span>
    </div>
  );
}
export default Loading;
