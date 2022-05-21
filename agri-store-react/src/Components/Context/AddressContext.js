import React, { createContext, useContext, useReducer, useState } from "react";
import { v4 as uuid } from "uuid";
import Toast from "../Toast/Toast";
const adressContext = createContext();
export const useAdressContext = () => useContext(adressContext);

function AddressContext({ children }) {
  const [alldata, setAlldata] = useState([]);
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
  });
  const { id, fullname, email, phone, pincode, address } = state;

  function formSubmitAddAdress(e) {
    e.preventDefault();
    setAlldata([
      ...alldata,
      { id: uuid(), fullname, email, phone, pincode, address },
    ]);
    Toast({ type: "info", mesg: "Adress added " });
    dispatch({ type: "FULLNAME", payload: "" });
    dispatch({ type: "PHONE", payload: "" });
    dispatch({ type: "EMAIL", payload: "" });
    dispatch({ type: "PINCODE", payload: "" });
    dispatch({ type: "ADDRESS", payload: "" });
  }

  console.log("this is all adress data ", alldata);

  function editAddress(id) {
    Toast({ type: "info", mesg: "This Feature is coming soon" });
    console.log("this feature is coming soon");
  }
  function saveEditedAddress() {}
  function deleteAddress(id) {
    setAlldata(alldata.filter((f) => f.id !== id));
    Toast({ type: " info", mesg: " Adress Removed " });
    console.log("delete adress");
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
          alldata,
          toggleSubmit,
        }}
      >
        {children}
      </adressContext.Provider>
    </div>
  );
}

export default AddressContext;
