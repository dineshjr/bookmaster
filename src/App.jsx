import { useEffect , useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import "./index.css";
import BooksContext from "./context/books";

function App() {
 const {fetchBooks} =  useContext(BooksContext);
  useEffect(() => {
    fetchBooks();
  } , [fetchBooks]);

  return (
    <>
      <div className="app">
        <h1>Reading List</h1>
        <BookCreate />
        <BookList />
      </div>
    </>
  );
}

export default App;
