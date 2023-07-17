import React from 'react';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';
import { useSelector} from 'react-redux'
const Home = () => {
  const { books } = useSelector((store) => store.book)
  console.log(books)
  return (
    <>
      {books.map((book) => (
        <BookList
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
      <AddBook />
    </>
  )
}
export default Home;
