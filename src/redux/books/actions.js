import { ADDBOOK, UPDATEBOOK, DELETEBOOK, LOADBOOK } from "./actionTypes";

export const loadBook = (bookInfo) => {
  return {
    type: LOADBOOK,
    payload: { bookInfo },
  };
};
export const addBook = (bookInfo) => {
  return {
    type: ADDBOOK,
    payload: { bookInfo },
  };
};
export const updateBook = (bookId, updatedBookInfo) => {
  console.log(bookId, updatedBookInfo);
  return {
    type: UPDATEBOOK,
    payload: { bookId, updatedBookInfo },
  };
};
export const deleteBook = (bookId) => {
  return {
    type: DELETEBOOK,
    payload: { bookId },
  };
};
