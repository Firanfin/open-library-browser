import React from "react";
import styles from "./LoadingSpinner.module.css";
import arrow from "../assets/arrow.svg";

function LoadingSpinner() {
  return <img src={arrow} className={styles.spinner} alt="loading-spinner" />;
}

export default LoadingSpinner;
