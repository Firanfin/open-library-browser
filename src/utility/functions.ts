import { Book } from "../types/Book";
import axios from "axios";

export async function getBooks(name: string): Promise<Book[]> {
  const output: Book[] = [];

  const response = await axios.get(
    `https://openlibrary.org/search.json?title=${name}`
  );

  if (!response.data) {
    throw Error("No response");
  }

  if (!response.data.docs) {
    throw Error("No books found");
  }

  // Uncomment for debugging
  // console.log(response.data.docs);

  response.data.docs
    .map((doc: { title: string; author_name: string[]; cover_i: number }, index: number) => {
      if (index === 4) return;
      if (doc.title && doc.cover_i) {
        output.push({
          title: doc.title,
          author: doc.author_name,
          coverId: doc.cover_i,
        });
      }
    });

  console.log(output);

  return output;
}
