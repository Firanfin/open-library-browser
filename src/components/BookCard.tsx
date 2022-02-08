import React from "react";
import styles from "./BookCard.module.css";
import { Book } from "../types/Book";

interface BookCardProps {
  book: Book;
  openModal: (coverId: number) => void
}

function BookCard({ book, openModal }: BookCardProps) {

  return (
    <div className={styles.container}>
      <img
        src={`http://covers.openlibrary.org/b/id/${book.coverId}-S.jpg`}
        alt={`${book.title}-cover`}
        className={styles.cover}
        onClick={() => openModal(book.coverId)}
      />
      <div className={styles.title}>{book.title}</div>
      {
        book.authors
        &&
        <>
            <div className={styles.by}>{"by"}</div>
            <div className={styles.author}>{book.authors.join(", ")}</div>
        </>
      }
    </div>
  );
}

export default BookCard;
