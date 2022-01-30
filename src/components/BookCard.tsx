import React from "react";
import styles from "./BookCard.module.css";
import { Book } from "../types/Book";

function BookCard({ book }: { book: Book }) {
  const coverUrl = `http://covers.openlibrary.org/b/id/${book.coverId}-S.jpg`;

  return (
    <div className={styles.container}>
      <img src={coverUrl} alt="" />
      <div className={styles.title}>{book.title}</div>
    </div>
  );
}

export default BookCard;
