import { addBook } from "../books/actions";

const addBookToDB = (bookInfo) => {
  return async (dispatch) => {
    await fetch("http://localhost:9000/books", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookInfo),
    });
    dispatch(addBook(bookInfo));
  };
};
export default addBookToDB;
