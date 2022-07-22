import { React, toast, axios } from "../Utils/CustomUtils";

export const addToWishlist = async (productdata, dispatch) => {
  const response = await axios({
    method: "POST",
    url: `/api/user/wishlist`,
    headers: { authorization: localStorage.getItem("token") },
    data: { product: productdata },
  });
  dispatch({ type: "WISH", payload: response.data.wishlist });
  toast.success(" Item is added to wishlist.");
};

export const deleteWishList = async (_id, dispatch) => {
  const response = await axios({
    method: "DELETE",
    url: `/api/user/wishlist/${_id}`,
    headers: { authorization: localStorage.getItem("token") },
    data: { product: dispatch },
  });
  dispatch({ type: "WISH", payload: response.data.wishlist });
  toast.success(" Item is removed from wishlist.");
};
