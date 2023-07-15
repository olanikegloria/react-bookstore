import React from 'react';

const BookList = ({ editBook, deleteBook, id, title, author }) => {

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        <li key={id}>
          <h2>{title}</h2>
          <p>{author}</p>
          <button onClick={deleteBook}>Remove</button>
          <button onClick={editBook}>Edit</button>
        </li>
      </ul>
    </div>
  );
};

export default BookList;
