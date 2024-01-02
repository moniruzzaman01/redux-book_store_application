import { BOOKTYPEFILTER } from "./actionTypes";

const initialState = {
  isFeatured: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKTYPEFILTER:
      return {
        ...state,
        isFeatured: action.payload.isFeatured,
      };
    default:
      return state;
  }
};

export default reducer;
