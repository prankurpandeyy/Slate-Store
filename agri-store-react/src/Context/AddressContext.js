import {
  React,
  createContext,
  useContext,
  useReducer,
  useState,
} from "../Utils/CustomUtils";

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

  return (
    <div>
      <adressContext.Provider
        value={{
          state,
          dispatch,
          toggleSubmit,
          fulladdressdata,
          fullname,
          email,
          phone,
          pincode,
          address,
          id,
        }}
      >
        {children}
      </adressContext.Provider>
    </div>
  );
}

export default AddressContext;
