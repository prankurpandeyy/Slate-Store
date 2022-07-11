import React from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "../Context/ProductContextReducer";
import "./OrderConfirm.css";
function OrderConfirm() {
  const { state, dispatch } = useProductContext();
  const orderData = state;

  return (
    <div className="order-success-page">
      <img
        src="https://raw.githubusercontent.com/iprankurpandey/github-imagehosting/main/undraw_confirmed_re_sef7.svg"
        alt="order-scuccess"
        className="order-success"
      />

      <div className="order-success-details">
        <div className="order-success-text">
          <h1>Order Successful !</h1>
          <h3>Order Id : {orderData.orderData.order_id}</h3>
          <h3>
            Product Quantity :{" "}
            {orderData.orderData.cart && orderData.orderData.cart.length}
          </h3>
          <h2>Total Paid amount : {orderData.orderData.amount}</h2>
          <h4> Product Ordered List : </h4>
        </div>
        <table className="checkout-table">
          <tr>
            <th>Title</th>
            <th>Image</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
          {orderData.orderData.cart &&
            orderData.orderData.cart.map((prod) => (
              <tr>
                <td>{prod.title}</td>
                <td>
                  <img
                    src={prod.image}
                    alt="purchased-products"
                    style={{ height: "5rem", width: "10rem" }}
                  />
                </td>
                <td>{prod.qty}</td>
                <td>{prod.price}</td>
                <td>{prod.qty * prod.price}</td>
              </tr>
            ))}
        </table>
        {/* <button className="btn btn-secondary"> Download Invoice </button> */}
        <Link to="/">
          <button className="btn btn-secondary"> Back to Home </button>
        </Link>
      </div>
    </div>
  );
}

export default OrderConfirm;
