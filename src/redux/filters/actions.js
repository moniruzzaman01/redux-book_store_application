import { BOOKTYPEFILTER, BOOKNAMEFILTER, BOOKIDFILTER } from "./actionTypes";

export const bookTypeFilter = (isFeatured) => {
  return {
    type: BOOKTYPEFILTER,
    payload: { isFeatured },
  };
};
export const bookNameFilter = (searchText) => {
  return {
    type: BOOKNAMEFILTER,
    payload: { searchText },
  };
};
export const bookIdFilter = (updateBookId) => {
  return {
    type: BOOKIDFILTER,
    payload: { updateBookId },
  };
};
