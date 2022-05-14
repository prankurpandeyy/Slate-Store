import axios from "axios";
import React, { createContext, useState } from "react";
export const wishlistContext = createContext();
function WishlistPageContext({ children }) {
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
