import React from "react";
import styles from "./CoverModal.module.css";

interface CoverModalProps {
  coverId: number;
  closeModal: () => void
}

function CoverModal({coverId, closeModal}: CoverModalProps) {

  return (
    <div className={styles.background} onClick={closeModal}>
      <img
        src={`http://covers.openlibrary.org/b/id/${coverId}-L.jpg`}
        alt={`large-cover`}
        className={styles.cover}
      />
    </div>
  );
}

export default CoverModal;
