import React, { useState } from "react";
import Search from "./components/Search";
import styles from "./App.module.css";
import { getBooks } from "./utility/functions";
import { Book } from "./types/Book";
import Header from "./components/Header";
import CoverModal from "./components/CoverModal";
import BookCard from "./components/BookCard";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const [searchPhrase, setSearchPhrase] = useState<string>("");
  const [searchError, setSearchError] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const [modalCover, setModalCover] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const loadingEffect = loading ? <LoadingSpinner /> : <></>;

  function loadBooks() {
    setLoading(true);
    setBooks([]);

    getBooks(searchPhrase)
      .then((res) => {
        setBooks(res);
        setLoading(false);
        setSearchError("");
      })
      .catch((err) => {
        setBooks([]);
        setLoading(false);
        setSearchError("Something went wrong");

        console.error(err);
      });
  }

  function openModal(coverId: number) {
    setModalCover(coverId);
    setModalOpen(true);
  }

  function closeModal() {
    setModalCover(0);
    setModalOpen(false);
  }

  return (
    <div className={styles.container}>
      <Header />

      <Search
        onSearch={loadBooks}
        onTextChange={setSearchPhrase}
        error={searchError}
      />


      {/*Search results*/}
      <div className={styles.results}>
        {loadingEffect}
        {books.map((book, index) => (
          <BookCard key={index} book={book} openModal={openModal} />
        ))}
      </div>

      {modalOpen && <CoverModal coverId={modalCover} closeModal={closeModal} />}
    </div>
  );
}

export default App;
