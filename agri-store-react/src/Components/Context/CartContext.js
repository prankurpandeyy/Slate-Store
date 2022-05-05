import React, { useContext } from "react";
import { ProductListingPagecontext } from "./ContextProductListingPage";
import axios from "axios";
function CartContext() {
  const { productdata, setProductData } = useContext(ProductListingPagecontext);

  const addToCart = async (productdata, setCart) => {
    const response = await axios({
      method: "POST",
      url: `/api/user/cart`,
      headers: { authorization: localStorage.getItem("token") },
      data: { product: productdata },
    });
    console.log(response.data.cart);
    setCart(response.data.cart);
  };

  const addToWishlist = async (productdata, setWish) => {
    const response = await axios({
      method: "POST",
      url: `/api/user/wishlist`,
      headers: { authorization: localStorage.getItem("token") },
      data: { product: productdata },
    });
    console.log(response.data.wishlist);
    setWish(response.data.wishlist);
  };

  return <div>cart context</div>;
}

export { CartContext };
