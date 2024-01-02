import { updateBook } from "../books/actions";

const updateBookToDB = (bookId, bookInfo) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/books/${bookId}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookInfo),
    });
    dispatch(updateBook(bookId, bookInfo));
  };
};
export default updateBookToDB;
