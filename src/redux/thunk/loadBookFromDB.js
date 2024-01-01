import { loadBook } from "../books/actions";

const loadBookFromDB = async (dispatch) => {
  const response = await fetch("http://localhost:9000/books");
  const books = await response.json();
  dispatch(loadBook(books));
};
export default loadBookFromDB;
