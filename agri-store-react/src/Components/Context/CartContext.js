import React, { useContext } from "react";

import axios from "axios";
import { CartAndWishlistContext } from "./CartAndWishlistPageContext";
function CartContext() {
  const { productdata, setProductData } = useContext(CartAndWishlistContext);

  const addToCart = async (productdata, setCart) => {
    try {
      const response = await axios({
        method: "POST",
        url: `/api/user/cart`,
        headers: { authorization: localStorage.getItem("token") },
        data: { product: productdata },
      });
      setCart(response.data.cart);
    } catch (error) {
      console.log(`Cart is facing some issues`, error);
    }
  };

  const addToWishlist = async (productdata, setWish) => {
    try {
      const response = await axios({
        method: "POST",
        url: `/api/user/wishlist`,
        headers: { authorization: localStorage.getItem("token") },
        data: { product: productdata },
      });
      setWish(response.data.wishlist);
    } catch (error) {
      console.log(`Wishlist is facing some issues`, error);
    }
  };

  return <div>cart context</div>;
}

export { CartContext };
