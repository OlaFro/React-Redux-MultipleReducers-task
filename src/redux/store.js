import { createStore, combineReducers } from "redux";
import { bookReducer, userReducer } from "./reducer";

const rootReducer = combineReducers({
  books: bookReducer,
  user: userReducer,
});

export let store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});
