import React from 'react'

function AddBook() {
  return (
    <div>
      <form>
        <input type='text' placeholder='Author' />
        <select>
          <option>Category</option>
        </select>
        <button>Add</button>
      </form>
    </div>
  )
}

export default AddBook