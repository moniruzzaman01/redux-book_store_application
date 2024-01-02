import { BOOKTYPEFILTER, BOOKNAMEFILTER, BOOKIDFILTER } from "./actionTypes";

const initialState = {
  isFeatured: false,
  searchText: "",
  updateBookId: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKTYPEFILTER:
      return {
        ...state,
        isFeatured: action.payload.isFeatured,
      };

    case BOOKNAMEFILTER:
      return {
        ...state,
        searchText: action.payload.searchText,
      };

    case BOOKIDFILTER:
      return {
        ...state,
        updateBookId: action.payload.updateBookId,
      };

    default:
      return state;
  }
};

export default reducer;
