import React from 'react';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';
import { useSelector } from 'react-redux'
const Home = () => {
  const { books } = useSelector((store) => store.book)
  console.log(books)
  return (
    <>
      <h1>Book List</h1>
      {books.map((book) => (
        <BookList
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
      <AddBook />
    </>
  )
}
export default Home;