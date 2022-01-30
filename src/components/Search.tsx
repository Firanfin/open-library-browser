import React, { FormEvent } from "react";
import styles from "./Search.module.css";

interface SearchProps {
  onSearch: () => void;
  onTextChange: (value: string) => void;
  error: string;
}

function Search({ onSearch, onTextChange, error }: SearchProps) {

  function handleSubmit(e: FormEvent) {
    onSearch();
    e.preventDefault();
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input type="text" className={styles.input} onChange={(e) => onTextChange(e.target.value)} />
      <button className={styles.button} onClick={onSearch}>Search</button>
      <div className={styles.error}>{error}</div>
    </form>
  );
}

export default Search;
