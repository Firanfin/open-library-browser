import { Book } from "../types/Book";
import axios from "axios";

export async function getBooks(name: string): Promise<Book[]> {
  const output: Book[] = [];

  const response = await axios.get(`https://openlibrary.org/search.json?title=${name}`);

  if (!response.data) {
    throw Error("No response");
  }

  if (!response.data.docs) {
    throw Error("No books found");
  }

  response.data.docs.map((doc: { title: string; cover_i: number }) => {
    if (doc.title && doc.cover_i) {
      output.push({
        title: doc.title,
        coverId: doc.cover_i,
      });
    }
  });

  return output;
}
