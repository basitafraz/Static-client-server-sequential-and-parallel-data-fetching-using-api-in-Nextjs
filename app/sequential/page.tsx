import React from "react";

type Book = {
  id: number;
  name: string;
  type: string;
  available: boolean;
};

async function GetFicBooks() {
  const response = await fetch(
    "https://simple-books-api.glitch.me/books?type=fiction",
    {
      cache: "no-store",
    }
  );
  const data = response.json();
  return data;
}

async function GetNonBooks() {
  const response = await fetch(
    "https://simple-books-api.glitch.me/books?type=non-fiction",
    {
      cache: "no-store",
    }
  );
  const data = response.json();
  return data;
}

export default async function Sequential() {
  const fictionBooks = await GetFicBooks();
  const nonfictionBooks = await GetNonBooks();
//   const [fiction, non_fiction] = await Promise.all([
//     fictionBooks,
//     nonfictionBooks,
//   ]);

  return (
    <div>
      <h1>Fiction</h1>
      <ul>
        {fictionBooks.map((book: Book) => {
          return (
            <li key={book.id}>
              {book.name}-{book.type}
            </li>
          );
        })}
      </ul>

      <h1>Non-Fiction</h1>
      <ul>
        {nonfictionBooks.map((book: Book) => {
          return (
            <li key={book.id}>
              {book.name}-{book.type}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

//This is how you call different apis in parallel.
