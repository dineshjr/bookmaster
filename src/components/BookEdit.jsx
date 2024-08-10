/* eslint-disable react/prop-types */
import { useState , useContext } from "react";
import BooksContext from "../context/books";

const BookEdit = ({ book, onSubmit }) => {
  const [updateTitle, setUpdateTitle] = useState(book.title);
  const {editBookById} = useContext(BooksContext)
  const handleChange = (event) => {
    setUpdateTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    
    onSubmit();
    editBookById(book.id , updateTitle);
  };
  return (
    <>
      <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={updateTitle} onChange={handleChange} />
        <button className="button is-primary">Save</button>
      </form>
    </>
  );
};

export default BookEdit;
