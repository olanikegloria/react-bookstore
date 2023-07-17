import React from 'react';
import { removeItem } from '../redux/books/bookSlice'
// import { useDispatch } from 'react-redux';
import {store} from '../redux/store'

const BookList = ({ editBook, id, title, author }) => {

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        <li key={id}>
          <h2>{title}</h2>
          <p>{author}</p>
          <button onClick={ store.dispatch(removeItem(id))}>Remove</button>
          <button onClick={editBook}>Edit</button>
        </li>
      </ul>
    </div>
  );
};

export default BookList;
