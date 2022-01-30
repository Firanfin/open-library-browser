import React, { useState } from "react";
import SearchBox from "./components/SearchBox";
import styles from "./App.module.css";
import { getBooks } from "./utility/functions";
import { Book } from "./types/Book";
import Results from "./components/Results";
import Header from "./components/Header";

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchPhrase, setSearchPhrase] = useState<string>("");
  const [searchError, setSearchError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  function loadBooks() {
    setLoading(true);
    setBooks([]);

    getBooks(searchPhrase)
      .then((res) => {
        setBooks(res);
        setLoading(false);
      })
      .catch((err) => {
        setBooks([]);
        setLoading(false);
        setSearchError("Something went wrong");

        console.error(err);
      });
  }

  return (
    <div className={styles.container}>
      <Header />

      <SearchBox onSearch={loadBooks} onTextChange={setSearchPhrase} error={searchError} />

      <Results books={books} loading={loading} />
    </div>
  );
}

export default App;
