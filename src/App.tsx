import React from "react";
import SearchBox from "./components/SearchBox";
import styles from "./App.module.css";
import { getBooks } from "./utility/functions";

function App() {
  const book = getBooks("the lord of the rings").then(console.log);

  return (
    <div className={styles.container}>
      <div className={styles.header}>Open Library Book Browser</div>
      <div>
        <SearchBox />
      </div>
    </div>
  );
}

export default App;
