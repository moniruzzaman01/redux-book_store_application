import { deleteBook } from "../books/actions";

const deleteFromDB = (bookId) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/books/${bookId}`, {
      method: "DELETE",
    });
    dispatch(deleteBook(bookId));
  };
};

export default deleteFromDB;
