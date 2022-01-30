import React, { FormEvent } from "react";
import styles from "./SearchBox.module.css";

interface SearchBoxProps {
  onSearch: () => void;
  onTextChange: (value: string) => void;
  error: string;
}

function SearchBox({ onSearch, onTextChange, error }: SearchBoxProps) {

  return (
    <div className={styles.container}>
      <input type="text" className={styles.input} onChange={(e) => onTextChange(e.target.value)} />
      <button className={styles.button} onClick={onSearch}>Search</button>
      <div className={styles.error}>{error}</div>
    </div>
  );
}

export default SearchBox;
