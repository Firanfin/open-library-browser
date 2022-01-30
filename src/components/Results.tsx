import React from "react";
import { Book } from "../types/Book";
import styles from "./Results.module.css";
import LoadingSpinner from "./LoadingSpinner";
import BookCard from "./BookCard";

interface ResultProps {
  books: Book[];
  loading: boolean;
}

function Results({ books, loading }: ResultProps) {
  const loadingEffect = loading ? <LoadingSpinner /> : <></>;

  return (
    <div className={styles.container}>
      {loadingEffect}
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
}

export default Results;
