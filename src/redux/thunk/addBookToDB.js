import { addBook } from "../books/actions";

const addBookToDB = (bookInfo) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:9000/books", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookInfo),
    });
    const data = await response.json();
    dispatch(addBook(data));
  };
};
export default addBookToDB;
