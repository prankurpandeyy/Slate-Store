import { React, createContext, useContext } from "../Utils/CustomUtils";
import { useProductContext } from "./ProductContext";
const wishlistContext = createContext();
export const useWishlistContext = () => useContext(wishlistContext);

function WishlistPageContext({ children }) {
  const { wish, dispatch } = useProductContext();

  return (
    <div>
      <wishlistContext.Provider
        value={{
          wish,
          dispatch,
        }}
      >
        {children}
      </wishlistContext.Provider>
    </div>
  );
}

export default WishlistPageContext;
