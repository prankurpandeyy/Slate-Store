import { React, toast } from "../Utils/CustomUtils";

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
export function editAddress() {
  toast.success("Feature is coming  !.");
}

export function clearState(e, dispatch) {
  dispatch({ type: "SORT", payload: true });
  dispatch({ type: "SLIDER", payload: (e.target.value = 105) });
  dispatch({ type: "STOCK", payload: "" });
  dispatch({ type: "RATING", payload: false });
  dispatch({
    type: "CATEGORY",
    payload: { petrol: false, diesel: false, ev: false },
  });
}
