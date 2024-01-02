import { BOOKTYPEFILTER, BOOKNAMEFILTER } from "./actionTypes";

const initialState = {
  isFeatured: false,
  searchText: "",
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

    default:
      return state;
  }
};

export default reducer;
