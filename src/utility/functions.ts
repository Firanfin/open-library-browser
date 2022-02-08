import { Book } from "../types/Book";
import axios from "axios";

export async function getBooks(name: string): Promise<Book[]> {
  const output: Book[] = [];

  const response = await axios.get(
    `https://openlibrary.org/search.json?title=${name}`
  );

  response.data.docs
    .splice(0, 100)
    .map((doc: { title: string; author_name: string[]; cover_i: number }, index: number) => {
      if (doc.title && doc.cover_i) {
        output.push({
          title: doc.title,
          authors: doc.author_name,
          coverId: doc.cover_i,
        });
      }
    });

  console.log(output);

  return output;
}
