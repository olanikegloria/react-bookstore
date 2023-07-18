import React, { useState } from 'react'
import { addItem } from '../redux/books/bookSlice';
import { useDispatch } from 'react-redux';

function AddBook() {
  const [authInput, setAuthIput] = useState("")
  const [titleinput, setTitleIput] = useState("")
  const [bookcategory, setCategory] = useState("")

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem(
      { title: authInput, author: titleinput, category:bookcategory }
    ));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Author' onChange={(event) => setAuthIput(event.target.value)} />
        <select onClick={(event) => setCategory(event.target.value)} >
          <option>fiction</option>
          <option>drama</option>
        </select>
        <input type='text' placeholder='add book title' name="title" onChange={(event) => setTitleIput(event.target.value)} />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default AddBook;