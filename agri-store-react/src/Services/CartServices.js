import { React, toast, axios } from "../Utils/CustomUtils";

const token = localStorage.getItem("token");
export async function updateQty(actionType, _id, dispatch) {
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
  toast.success(" Item Qty is updated .");
}

export async function removeFromCart(_id, dispatch) {
  const response = await axios({
    method: "DELETE",
    url: `/api/user/cart/${_id}`,
    headers: { authorization: localStorage.getItem("token") },
    data: { product: dispatch },
  });
  dispatch({ type: "CART", payload: response.data.cart });
  toast.success("Rrmoved from cart.");
}

export const addToCart = async (productdata, dispatch) => {
  try {
    const response = await axios({
      method: "POST",
      url: `/api/user/cart`,
      headers: { authorization: localStorage.getItem("token") },
      data: { product: productdata },
    });

    dispatch({ type: "CART", payload: response.data.cart });
    toast.success("Added to cart.");
  } catch (error) {
    toast.error("login first");
  }
};
