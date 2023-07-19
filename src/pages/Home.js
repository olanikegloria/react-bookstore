import React from 'react';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';
import { useSelector } from 'react-redux'
const Home = () => {
  const { books, isLoading } = useSelector((store) => store.book)

  return (
    isLoading ? <h1>Loading.....</h1> : (
      <>
        <h1>Book List</h1>
        {Object.keys(books).map((book) => (
          <>
            {books[book].map(item => (
              <BookList
                key={item.id}
                id={item.id}
                title={item.title}
                author={item.author}
                category={item.category}
              />
            ))}
          </>
        ))}
        <AddBook />
      </>
    )
  )
}
export default Home;