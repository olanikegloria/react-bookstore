import React from 'react';
import { removeItem } from '../redux/books/bookSlice'
import { useDispatch } from 'react-redux';
// import {store} from '../redux/store'

const BookList = ({ editBook, id, title, author }) => {
const dispatch = useDispatch();
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  }


  return (
    <div>
      <ul>
        <li key={id}>
          <h2>{title}</h2>
          <p>{author}</p>
          <button
            onClick={() => handleRemoveItem(id)}
          >Remove</button>
          <button onClick={editBook}>Edit</button>
        </li>
      </ul>
    </div>
  );
};

export default BookList;