import "../index.css";
import { useState , useContext } from "react";
import BooksContext from '../context/books'

// eslint-disable-next-line react/prop-types, no-unused-vars
const BookCreate = () => {
  const [title, setTitle] = useState("");
  const {createBook} = useContext(BooksContext);
  const handleChange = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.length === 0) {
      alert("Please enter title");
    } else {
      createBook(title);
      setTitle("")
    }
  };
  return (
    <>
      <div className="book-create">
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input onChange={handleChange} value={title} className="input" />
          <button className="button">Create Book</button>
        </form>
      </div>
    </>
  );
};

export default BookCreate;
