import App from "./App";
import CatagoriesFilter from "./Components/CatagoriesFilter";
import CartPageContext from "./Components/Context/CartPageContext";
import FilterContextReducer from "./Components/Context/FilterContextReducer";
import { ProductContextReducer } from "./Components/Context/ProductContextReducer";
import ProductListingPageContext from "./Components/Context/ProductListingPageContext";
import WishlistPageContext from "./Components/Context/WishlistPageContext";
import Toast from "./Components/Toast/Toast";
import { ToastContainer } from "react-toastify";

export function PageStructure() {
  return (
    <div>
      <ProductContextReducer>
        <FilterContextReducer>
          <CartPageContext>
            <ProductListingPageContext>
              <WishlistPageContext>
                <CatagoriesFilter>
                  <App />
                </CatagoriesFilter>
              </WishlistPageContext>
            </ProductListingPageContext>
          </CartPageContext>
        </FilterContextReducer>
      </ProductContextReducer>
      <ToastContainer position="top-right" />
    </div>
  );
}
