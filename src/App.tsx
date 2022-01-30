import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import styles from "./App.module.css";
import { getBooks } from "./utility/functions";
import { Book } from "./types/Book";
import Results from "./components/Results";
import Header from "./components/Header";

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  function loadBooks() {
    setLoading(true);
    setBooks([]);

    getBooks("lord").then((res) => {
      setBooks(res);
      setLoading(false);
    });
  }

  return (
    <div className={styles.container}>
      <Header />

      <SearchBox onClick={loadBooks} />

      <Results books={books} loading={loading} />
    </div>
  );
}

export default App;
