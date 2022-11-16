import {
  React,
  createContext,
  useContext,
  useReducer,
  useEffect,
  toast,
} from "../Utils/CustomUtils";
import { getProdcutsData } from "../Services/ProductListingServices";

const productDataContext = createContext();
export const useProductDataContext = () => useContext(productDataContext);

function ProductListingPageContext({ children }) {
  const [state, dispatch] = useReducer(reducerFn, {
    productdata: [],
    isLoading: false,
  });

  function reducerFn(state, action) {
    switch (action.type) {
      case "APIPRODUCTDATA":
        return { ...state, productdata: action.payload };
      case "LOADINGSPINNER":
        return { ...state, isLoading: action.payload };
      default:
        return state;
    }
  }

  const { productdata, isLoading } = state;

  useEffect(() => {
    dispatch({ type: "LOADINGSPINNER", payload: true });
    toast.success(" Data is being retrieved.");
    getProdcutsData(dispatch);
  }, []);
  return (
    <div>
      <productDataContext.Provider
        value={{ productdata, state, isLoading, dispatch }}
      >
        {children}
      </productDataContext.Provider>
    </div>
  );
}

export default ProductListingPageContext;
// naming convetons on classed in csss
