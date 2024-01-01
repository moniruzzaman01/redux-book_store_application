import bookReducer from "./books/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ books: bookReducer });

export default rootReducer;
