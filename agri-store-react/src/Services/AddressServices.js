import toast from "react-hot-toast";
import { v4 as uuid } from "uuid";

export function formSubmitAddAdress(e, addressData, fulladdressdata, dispatch) {
  e.preventDefault();

  dispatch({
    type: "ADDRESSDATA",
    payload: [...fulladdressdata, addressData],
  });
  toast.success("Address is added !.");
  dispatch({ type: "FULLNAME", payload: "" });
  dispatch({ type: "PHONE", payload: "" });
  dispatch({ type: "EMAIL", payload: "" });
  dispatch({ type: "PINCODE", payload: "" });
  dispatch({ type: "ADDRESS", payload: "" });
}

export function deleteAddress(id, dispatch, fulladdressdata) {
  dispatch({
    type: "ADDRESSDATA",
    payload: fulladdressdata.filter((f) => f.id !== id),
  });
  toast.success("Address is removed !.");
}
