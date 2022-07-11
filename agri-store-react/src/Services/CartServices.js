import axios from "axios";
import toast from "react-hot-toast";

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

  toast.success(" Removed from cart.");
}

export const addToCart = async (productdata, dispatch) => {
  const response = await axios({
    method: "POST",
    url: `/api/user/cart`,
    headers: { authorization: localStorage.getItem("token") },
    data: { product: productdata },
  });
  dispatch({ type: "CART", payload: response.data.cart });
  toast.success(" Added to cart.");
};
