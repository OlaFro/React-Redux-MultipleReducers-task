import React, { Component } from "react";
import "./Navbar.css";
import { Route, Switch, NavLink } from "react-router-dom";
import ProductList from "./ProductList";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="Navbar">
          <div className="Navbar-items">
            <NavLink
              exact
              className="Navbar-item"
              activeClassName="active"
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              exact
              className="Navbar-item"
              activeClassName="active"
              to="/products"
            >
              PRODUCTS
            </NavLink>
          </div>
          <NavLink exact activeClassName="active" to="/basket">
            <i class="fas fa-shopping-basket"></i>
          </NavLink>
        </div>
        <Switch>
          <Route exact path="/products" component={ProductList}></Route>
        </Switch>
      </div>
    );
  }
}
