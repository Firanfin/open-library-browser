import React from "react";
import styles from "./SearchBox.module.css";

interface SearchBoxProps {
  onClick: () => void;
}

function SearchBox({ onClick }: SearchBoxProps) {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" />
      <button className={styles.button} onClick={onClick}>
        Search
      </button>
    </div>
  );
}

export default SearchBox;
