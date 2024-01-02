import { BOOKTYPEFILTER, BOOKNAMEFILTER } from "./actionTypes";

export const bookTypeFilter = (isFeatured) => {
  return {
    type: BOOKTYPEFILTER,
    payload: { isFeatured },
  };
};
export const bookNameFilter = (searchText) => {
  return {
    type: BOOKNAMEFILTER,
    payload: {
      searchText,
    },
  };
};
