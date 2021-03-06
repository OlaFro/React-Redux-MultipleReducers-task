// const initialState = {
//   counter: 0,
//   orders: [],
// };

// export const reducer = (state = (initialState) => {
//   switch (action.type) {
//     case "INCREMENT_COUNTER":
//       return {
//         ...state,
//         counter: state.counter + 1,
//       };

//     case "DECREMENT_COUNTER":
//       return {
//         ...state,
//         counter: state.counter - 1,
//       };

//     case "ADD_PRODUCT":
//       return {
//         ...state,
//         order: [...state.order, action.payload],
//       };

//     default:
//       return state;
//   }
// });

export const bookReducer = (state = { books: [] }, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    default:
      return state;
  }
};

export const userReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};
