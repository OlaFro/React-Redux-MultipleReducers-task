import React from "react";
// import Product from "./Product";
import AddBook from "./addBook";
import AddUser from "./addUser";
import "./ProductList.css";
import { useSelector } from "react-redux";

export default function ProductList() {
  const data = useSelector((state) => state);

  console.log(data);
  return (
    <div className="ProductList">
      {/* <Product /> */}
      <AddBook />
      {data.books.books.map((elem) => (
        <p>{`${elem}`}</p>
      ))}
      <AddUser />
      {data.user.users.map((elem) => (
        <p>{`${elem}`}</p>
      ))}
    </div>
  );
}
