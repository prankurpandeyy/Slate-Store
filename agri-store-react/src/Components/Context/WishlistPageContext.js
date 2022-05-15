import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import CartPageContext, { cartContext } from "./CartPageContext";
import { ProductContext } from "./ProductContextReducer";

export const wishlistContext = createContext();

function WishlistPageContext({ children }) {
  // const { productstate } = useContext(ProductContext);
  // console.log(`reducer cart data`, productstate);

  const [wish, setWish] = useState([]);
  const deleteWishList = async (_id) => {
    const response = await axios({
      method: "DELETE",
      url: `/api/user/wishlist/${_id}`,
      headers: { authorization: localStorage.getItem("token") },
      data: { product: setWish },
    });
    setWish(response.data.wishlist);
  };

  // add to wishlist
  const addToWishlist = async (productdata, setWish) => {
    const response = await axios({
      method: "POST",
      url: `/api/user/wishlist`,
      headers: { authorization: localStorage.getItem("token") },
      data: { product: productdata },
    });
    // dispatch({ type: "WISHLIST", payload: response.data.wishlist });
    setWish(response.data.wishlist);
  };
  return (
    <div>
      <wishlistContext.Provider
        value={{ wish, setWish, deleteWishList, addToWishlist }}
      >
        {children}
      </wishlistContext.Provider>
    </div>
  );
}

export default WishlistPageContext;
