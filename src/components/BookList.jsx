/* eslint-disable react/prop-types */
import BookShow from "./BookShow";
import BooksContext from "../context/books";
import { useContext } from 'react'; // Ensure useContext is imported

function useBooksContext(){
  return useContext(BooksContext);
}

function BookList() {
  const { books } = useBooksContext();
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;