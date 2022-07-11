import App from "./App";
import {
  AddressContext,
  CartPageContext,
  FilterContextReducer,
  LoginPageContext,
  ProductContextReducer,
  ProductListingPageContext,
  WishlistPageContext,
  CatagoriesFilter,
} from "./Context/CoreContextFiles";
import toast, { Toaster } from "react-hot-toast";

export function PageStructure() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <AddressContext>
        <LoginPageContext>
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
        </LoginPageContext>
      </AddressContext>
    </div>
  );
}
