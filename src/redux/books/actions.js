import { ADDBOOK, UPDATEBOOK, DELETEBOOK } from "./actionTypes";

export const addBook = (bookInfo) => {
  return {
    type: ADDBOOK,
    payload: { bookInfo },
  };
};
export const updateBook = (bookId, updatedBookInfo) => {
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
