import React, { createContext, useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useCartContext } from "../Context/CartPageContext";
import { useProductContext } from "../Context/ProductContextReducer";

import "./TotalPrice.css";

function TotalPrice() {
  const { totalprice, cart, applyCoupon, newTotalPrice, discount } =
    useCartContext();
  const { state, dispatch } = useProductContext();
  const { coupon } = state;

  return (
    <div>
      <div class="columns">
        <ul class="price">
          <li class="grey">Total Price:₹ {totalprice}</li>
          <li>Product Quantity : {cart.length}</li>
          <li>Total Paybable amount :₹ {newTotalPrice}</li>
          <li class="grey">
            <Link to="/Checkoutpage">
              <button className="checkout">Checkout</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TotalPrice;
