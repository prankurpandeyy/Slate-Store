import React, { createContext, useContext, useReducer } from "react";
const adressContext = createContext();
export const useAdressContext = () => useContext(adressContext);

function AddressContext({ children }) {
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

  function submitAdress() {
    dispatch();
  }
  return (
    <div>
      <adressContext.Provider value={{ state, dispatch, submitAdress }}>
        {children}
      </adressContext.Provider>
    </div>
  );
}

export default AddressContext;
