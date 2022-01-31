import React from "react";
import styles from "./BookCard.module.css";
import { Book } from "../types/Book";

function BookCard({ book }: { book: Book }) {
  function openModal() {

  }

  return (
    <div className={styles.container}>
      <img
        src={`http://covers.openlibrary.org/b/id/${book.coverId}-S.jpg`}
        alt={`${book.title}-cover`}
        className={styles.cover}
        onClick={openModal}
      />
      <div className={styles.title}>{book.title}</div>
      <div className={styles.by}>{"by"}</div>
      <div className={styles.author}>{book.author.join(", ")}</div>
    </div>
  );
}

export default BookCard;
