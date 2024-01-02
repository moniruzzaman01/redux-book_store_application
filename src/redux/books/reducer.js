import { ADDBOOK, UPDATEBOOK, DELETEBOOK, LOADBOOK } from "./actionTypes";

//initial state
const initialState = [
  {
    name: "Slow Horses (Deluxe Edition)",
    author: "Mick Herron",
    thumbnail:
      "https://m.media-amazon.com/images/I/51Ga5GuElyL._SX331_BO1,204,203,200_.jpg",
    price: 14,
    rating: 3,
    featured: false,
    id: 1,
  },
  {
    name: "The Last Thing He Told Me: A Novel",
    author: "Laura Dave",
    thumbnail:
      "https://m.media-amazon.com/images/P/1501171348.01._SCLZZZZZZZ_SX500_.jpg",
    price: 13.99,
    rating: 4,
    featured: false,
    id: 2,
  },
];

//reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADBOOK:
      return action.payload.bookInfo;

    case ADDBOOK:
      return [
        ...state,
        {
          id: state.length,
          ...action.payload.bookInfo,
        },
      ];

    case UPDATEBOOK: {
      const newState = state.map((book) => {
        if (book.id == action.payload.bookId) {
          console.log(book, action.payload.updatedBookInfo);
          return {
            // ...book,
            ...action.payload.updatedBookInfo,
          };
        }
        return book;
      });
      return newState;
    }

    case DELETEBOOK:
      return state.filter((book) => book.id != action.payload.bookId);

    default:
      //   console.log("action dispatched!!!");
      return state;
  }
};

export default reducer;
