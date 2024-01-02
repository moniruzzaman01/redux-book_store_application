import { useDispatch, useSelector } from "react-redux";
import { bookTypeFilter } from "../redux/filters/actions";

export default function BooksFilter() {
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const handleFilter = (isFeatured) => {
    dispatch(bookTypeFilter(isFeatured));
  };
  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => handleFilter(false)}
          className={`filter-btn ${filters.isFeatured || "active-filter"}`}
          id="lws-filterAll"
        >
          All
        </button>
        <button
          onClick={() => handleFilter(true)}
          className={`filter-btn ${filters.isFeatured && "active-filter"}`}
          id="lws-filterFeatured"
        >
          Featured
        </button>
      </div>
    </div>
  );
}
