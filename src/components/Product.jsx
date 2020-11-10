import React, { Component } from "react";
import "./Product.css";
import {
  incrementCounter,
  decrementCounter,
  addProduct,
} from "../redux/actions";
import { connect } from "react-redux";

class Product extends Component {
  render() {
    return (
      <div className="Product">
        <h3>iPhone</h3>
        <div>
          <button
            onClick={() => {
              this.props.incrementCounter();
            }}
          >
            {" "}
            +{" "}
          </button>
          {this.props.counter}
          <button
            onClick={() => {
              this.props.decrementCounter();
            }}
          >
            {" "}
            -{" "}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    orders: state.orders,
  };
};

export default connect(mapStateToProps, {
  incrementCounter,
  decrementCounter,
  addProduct,
})(Product);
