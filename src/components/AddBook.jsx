import { useDispatch, useSelector } from "react-redux";
import addBookToDB from "../redux/thunk/addBookToDB";
import { useEffect, useState } from "react";
import updateBookToDB from "../redux/thunk/updateBookToDB";

export default function AddBook() {
  const filters = useSelector((state) => state.filters);
  const book = useSelector((state) => state.books).find(
    (book) => book.id == filters.updateBookId
  );
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [featured, setFeatured] = useState(false);
  const [ratings, setRatings] = useState("");
  useEffect(() => {
    if (book) {
      const { name, author, thumbnail, price, featured, ratings } = book;
      setName(name);
      setAuthor(author);
      setThumbnail(thumbnail);
      setPrice(price);
      setFeatured(featured);
      setRatings(ratings);
    }
  }, [book]);

  const handleAddBook = () => {
    dispatch(
      addBookToDB({ name, author, thumbnail, price, ratings, featured })
    );
    setName("");
    setAuthor("");
    setThumbnail("");
    setPrice("");
    setFeatured(false);
    setRatings("");
  };

  const handleUpdateBook = () => {
    dispatch(
      updateBookToDB(book.id, {
        name,
        author,
        thumbnail,
        price,
        ratings,
        featured,
      })
    );
    setName("");
    setAuthor("");
    setThumbnail("");
    setPrice("");
    setFeatured(false);
    setRatings("");
  };

  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
      <form className="book-form">
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookname"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="category">Author</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookauthor"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="image">Image Url</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookthumbnail"
            name="thumbnail"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookprice"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="quantity">Rating</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookrating"
              name="rating"
              min="1"
              max="5"
              value={ratings}
              onChange={(e) => setRatings(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="input-Bookfeatured"
            type="checkbox"
            name="featured"
            className="w-4 h-4"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
          />
          <label htmlFor="featured" className="ml-2 text-sm">
            This is a featured book
          </label>
        </div>
        {book ? (
          <button
            onClick={handleUpdateBook}
            type="button"
            className="submit"
            id="submit"
          >
            Update Book
          </button>
        ) : (
          <button
            onClick={handleAddBook}
            type="button"
            className="submit"
            id="submit"
          >
            Add Book
          </button>
        )}
      </form>
    </div>
  );
}
