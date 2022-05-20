import axios from "axios";
import React, { createContext, useContext } from "react";
import Toast from "../Toast/Toast";
import { useProductContext } from "./ProductContextReducer";
const cartContext = createContext();
export const useCartContext = () => useContext(cartContext);

function CartPageContext({ children }) {
  const { state, dispatch } = useProductContext();
  const { cart } = state;

  // auth token
  // localStorage.setItem(
  //   "token",
  //   `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJlMzIzZmY2MC1hMTUzLTQ0MTYtYmEyNS0zNDQ0ZGI1NjliOWMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ._-fah2UEuueLmRHHl5uV4CYhiQdODX6neUkGbfTvtFM`
  // );

  // add data to cart
  const addToCart = async (productdata, dispatch) => {
    const response = await axios({
      method: "POST",
      url: `/api/user/cart`,
      headers: { authorization: localStorage.getItem("token") },
      data: { product: productdata },
    });
    dispatch({ type: "CART", payload: response.data.cart });
    Toast({ type: "success", mesg: "added to cart" });
  };

  // delete data from cart
  async function deleteQty(_id) {
    const response = await axios({
      method: "DELETE",
      url: `/api/user/cart/${_id}`,
      headers: { authorization: localStorage.getItem("token") },
      data: { product: dispatch },
    });
    dispatch({ type: "CART", payload: response.data.cart });
    Toast({ type: "info", mesg: "item removed from cart" });
  }

  // increment /decrement quantity in cart
  async function updateQty(actionType, _id) {
    const response = await axios({
      method: "POST",
      url: `/api/user/cart/${_id}`,
      headers: { authorization: localStorage.getItem("token") },
      data: {
        action: {
          type: actionType,
        },
      },
    });
    dispatch({ type: "CART", payload: response.data.cart });
    Toast({ type: "success", mesg: "quantity updated in cart" });
  }

  // returning the satate with data
  return (
    <div>
      <cartContext.Provider
        value={{ updateQty, deleteQty, cart, dispatch, addToCart }}
      >
        {children}
      </cartContext.Provider>
    </div>
  );
}

export default CartPageContext;
