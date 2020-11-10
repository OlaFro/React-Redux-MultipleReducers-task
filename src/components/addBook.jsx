import React from "react";
import { addBook } from "../redux/actions";
import { useDispatch } from "react-redux";
import "./inputs.css";

export default function AddBook() {
  const dispatch = useDispatch();

  return (
    <div className="input">
      <input type="text"></input>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(addBook(e.target.previousElementSibling.value));
        }}
        type="button"
      >
        Add Book
      </button>
    </div>
  );
}
