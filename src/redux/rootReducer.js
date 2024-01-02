import booksReducer from "./books/reducer";
import filtersReducer from "./filters/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  books: booksReducer,
  filters: filtersReducer,
});

export default rootReducer;
