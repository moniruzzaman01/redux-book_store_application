import { BOOKTYPEFILTER } from "./actionTypes";

export const bookTypeFilter = (isFeatured) => {
  return {
    type: BOOKTYPEFILTER,
    payload: { isFeatured },
  };
};
