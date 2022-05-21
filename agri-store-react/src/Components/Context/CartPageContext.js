import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import Toast from "../Toast/Toast";
import { useProductContext } from "./ProductContextReducer";
const cartContext = createContext();
export const useCartContext = () => useContext(cartContext);

function CartPageContext({ children }) {
  const { state, dispatch } = useProductContext();
  const { cart, coupon } = state;
  const [totalprice, setTotalPrice] = useState();

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
  let discount = (totalprice * 25) / 100;
  let newTotalPrice = totalprice - discount;
  function applyCoupon(coupon) {
    if (coupon === "TANAY123") {
      console.log("featire coming soon");
      Toast({ type: "info", mesg: "this feature coming soon" });
    } else {
      console.log(coupon);
    }
  }

  return (
    <div>
      <cartContext.Provider
        value={{
          updateQty,
          deleteQty,
          cart,
          dispatch,
          addToCart,
          totalprice,
          setTotalPrice,
          applyCoupon,
          newTotalPrice,
          discount,
        }}
      >
        {children}
      </cartContext.Provider>
    </div>
  );
}

export default CartPageContext;
