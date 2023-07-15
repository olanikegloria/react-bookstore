import React from 'react';
import { useState } from 'react';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';

const Home = () => {
  const [books, setState] = useState([
    { id: 0, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
    { id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
    { id: 2, title: 'The Silmarillion', author: 'J.R.R. Tolkien' },
  ]);

  const handleDelete = (id) => {
    console.log('Hello', id);
    setState(books.filter((book) => book.id !== id));
  };
  
  return (
    <>
      {books.map((book) => (
        <BookList 
          key={book.id} 
          id={book.id} 
          title={book.title} 
          author={book.author} 
          deleteBook={() => handleDelete(book.id)}
        />
      ))}
      <AddBook />
    </>
  )
}

export default Home
