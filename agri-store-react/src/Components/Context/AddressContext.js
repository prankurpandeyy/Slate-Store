import React, { createContext, useContext, useReducer, useState } from "react";
import toast from "react-hot-toast";
import { v4 as uuid } from "uuid";
import Toast from "../Toast/Toast";
const adressContext = createContext();
export const useAdressContext = () => useContext(adressContext);

function AddressContext({ children }) {
  const [toggleSubmit, setToggleSubmit] = useState(false);
  function adresssdataFn(state, action) {
    switch (action.type) {
      case "FULLNAME":
        return { ...state, fullname: action.payload };
      case "EMAIL":
        return { ...state, email: action.payload };
      case "PHONE":
        return { ...state, phone: action.payload };
      case "PINCODE":
        return { ...state, pincode: action.payload };
      case "ADDRESS":
        return { ...state, address: action.payload };
      case "ADDRESSDATA":
        return { ...state, fulladdressdata: action.payload };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(adresssdataFn, {
    fullname: "",
    email: "",
    phone: "",
    pincode: "",
    address: "",
    fulladdressdata: [],
  });
  const { id, fullname, email, phone, pincode, address, fulladdressdata } =
    state;

  function formSubmitAddAdress(e) {
    e.preventDefault();
    dispatch({
      type: "ADDRESSDATA",
      payload: [
        ...fulladdressdata,
        { id: uuid(), fullname, email, phone, pincode, address },
      ],
    });
    Toast({ type: "info", mesg: "Adress added " });
    dispatch({ type: "FULLNAME", payload: "" });
    dispatch({ type: "PHONE", payload: "" });
    dispatch({ type: "EMAIL", payload: "" });
    dispatch({ type: "PINCODE", payload: "" });
    dispatch({ type: "ADDRESS", payload: "" });
  }

  function editAddress() {
    console.log(`edit `);
  }
  function saveEditedAddress() {
    console.log(`edit `);
  }
  function deleteAddress(id) {
    dispatch({
      type: "ADDRESSDATA",
      payload: fulladdressdata.filter((f) => f.id !== id),
    });
    toast.success("Address is removed !.");
  }
  return (
    <div>
      <adressContext.Provider
        value={{
          state,
          dispatch,
          formSubmitAddAdress,
          editAddress,
          saveEditedAddress,
          deleteAddress,
          toggleSubmit,
          fulladdressdata,
        }}
      >
        {children}
      </adressContext.Provider>
    </div>
  );
}

export default AddressContext;
