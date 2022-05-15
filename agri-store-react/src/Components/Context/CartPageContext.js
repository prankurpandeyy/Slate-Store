import axios from "axios";
import React, { createContext, useContext, useState } from "react";

export const cartContext = createContext();
function CartPageContext({ children }) {
  const [cart, setCart] = useState([]);
  const app = 123;
  // token
  localStorage.setItem(
    "token",
    `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJlMzIzZmY2MC1hMTUzLTQ0MTYtYmEyNS0zNDQ0ZGI1NjliOWMiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ._-fah2UEuueLmRHHl5uV4CYhiQdODX6neUkGbfTvtFM`
  );
  // add data to cart
  const addToCart = async (productdata, setCart) => {
    const response = await axios({
      method: "POST",
      url: `/api/user/cart`,
      headers: { authorization: localStorage.getItem("token") },
      data: { product: productdata },
    });
    setCart(response.data.cart);
  };
  // delete data from cart
  async function deleteQty(_id) {
    const response = await axios({
      method: "DELETE",
      url: `/api/user/cart/${_id}`,
      headers: { authorization: localStorage.getItem("token") },
      data: { product: setCart },
    });
    setCart(response.data.cart);
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
    setCart(response.data.cart);
  }
  return (
    <div>
      <cartContext.Provider
        value={{ updateQty, deleteQty, cart, setCart, addToCart, app }}
      >
        {children}
      </cartContext.Provider>
    </div>
  );
}

export default CartPageContext;
