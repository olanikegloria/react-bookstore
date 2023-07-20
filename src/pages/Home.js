import React from 'react';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';
import { useSelector } from 'react-redux'
const Home = () => {
  const { books, isLoading } = useSelector((store) => store.book)
// console.log(books)
  return (
    isLoading ? <h1>Loading.....</h1> : (
      <>
        <h1>Book List</h1>
        {Object.keys(books).map((book) => (
          <div key={Math.random().toString() + new Date().toISOString()}>
            {books[book].map(item => (
              <BookList
                key={Math.random().toString() + new Date().toISOString()}
                book={item}
                id={book}
              />
            ))}
          </div>
        ))}
        <AddBook />
      </>
    )
  )
}
export default Home;