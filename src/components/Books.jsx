import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import loadBookFromDB from "../redux/thunk/loadBookFromDB";
import Book from "./Book";

export default function Books() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBookFromDB);
  }, [dispatch]);

  return (
    <div className="lws-bookContainer">
      {books.map((book, key) => (
        <Book key={key} book={book} />
      ))}
    </div>
  );
}
