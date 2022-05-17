import axios from "axios";
import React, { createContext } from "react";
import { useProductContext } from "./ProductContextReducer";
export const wishlistContext = createContext();
function WishlistPageContext({ children }) {
  const { state, dispatch } = useProductContext();
  const { wish } = state;

  // add to wishlist
  const addToWishlist = async (productdata, dispatch) => {
    const response = await axios({
      method: "POST",
      url: `/api/user/wishlist`,
      headers: { authorization: localStorage.getItem("token") },
      data: { product: productdata },
    });
    dispatch({ type: "WISH", payload: response.data.wishlist });
    // setWish(response.data.wishlist);
  };

  // delete wishist
  const deleteWishList = async (_id) => {
    const response = await axios({
      method: "DELETE",
      url: `/api/user/wishlist/${_id}`,
      headers: { authorization: localStorage.getItem("token") },
      data: { product: dispatch },
    });
    dispatch({ type: "WISH", payload: response.data.wishlist });
    // setWish(response.data.wishlist);
  };

  return (
    <div>
      <wishlistContext.Provider
        value={{ wish, dispatch, deleteWishList, addToWishlist }}
      >
        {children}
      </wishlistContext.Provider>
    </div>
  );
}

export default WishlistPageContext;
