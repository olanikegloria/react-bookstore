import React from 'react';
import { deleteBook, getBooks} from '../redux/books/bookSlice'
import { useDispatch } from 'react-redux';

const BookList = ({ book, id }) => {
  const dispatch = useDispatch();
  const handleRemoveItem = async (item, id) => {
    await dispatch(deleteBook({item, id}));
    await dispatch(getBooks());
  }

  return (
    <div>
      <ul>
        <li key={id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>{book.category}</p>
          <button
            onClick={() => handleRemoveItem(book, id)}
          >Remove</button>
          <button>Edit</button>
        </li>
      </ul>
    </div>
  );
};

export default BookList;