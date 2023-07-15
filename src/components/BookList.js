import React from 'react';

const BookList = () => {
  const books = [
    { id: 0, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
    { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
    { id: 2, title: 'The Silmarillion', author: 'J.R.R. Tolkien' },
  ];

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
