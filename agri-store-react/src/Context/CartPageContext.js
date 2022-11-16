import { React, createContext, useContext } from "../Utils/CustomUtils";
import { useProductContext } from "./ProductContext";
const cartContext = createContext();
export const useCartContext = () => useContext(cartContext);

function CartPageContext({ children }) {
  const { state, dispatch } = useProductContext();
  const { cart, totalprice } = state;

  let discount = (totalprice * 25) / 100;

  return (
    <div>
      <cartContext.Provider
        value={{
          cart,
          dispatch,
          discount,
          totalprice,
        }}
      >
        {children}
      </cartContext.Provider>
    </div>
  );
}

export default CartPageContext;
