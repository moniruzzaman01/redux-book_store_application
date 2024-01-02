import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import loadBookFromDB from "../redux/thunk/loadBookFromDB";
import Book from "./Book";

export default function Books() {
  const books = useSelector((state) => state.books);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBookFromDB);
  }, [dispatch]);

  return (
    <div className="lws-bookContainer">
      {books
        .filter((book) => {
          switch (filters.isFeatured) {
            case true:
              return book.featured == true;
            default:
              return true;
          }
        })
        .filter((book) => {
          return book.name.toLowerCase().includes(filters.searchText);
        })
        .map((book, key) => (
          <Book key={key} book={book} />
        ))}
    </div>
  );
}
