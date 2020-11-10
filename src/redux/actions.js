export function incrementCounter() {
  return {
    type: "INCREMENT_COUNTER",
  };
}

export function decrementCounter() {
  return {
    type: "DECREMENT_COUNTER",
  };
}

export function addProduct(product) {
  return {
    type: "ADD_PRODUCT",
    payload: product,
  };
}

export function addBook(book) {
  return {
    type: "ADD_BOOK",
    payload: book,
  };
}

export function addUser(user) {
  return {
    type: "ADD_USER",
    payload: user,
  };
}
