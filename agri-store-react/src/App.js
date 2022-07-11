import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Homepage,
  LoginPage,
  SignupPage,
  ProductlistingPage,
  Checkoutpage,
  OrderSuccessPage,
  SingleProductPage,
  WishlistPage,
  CartPage,
  AccountPage,
  Authentication,
  PageNotFound,
} from "./Pages/IndexAllPages";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/LoginPage" element={<LoginPage />} />
        <Route exact path="/SignupPage" element={<SignupPage />} />
        <Route
          exact
          path="ProductListingPage"
          element={<ProductlistingPage />}
        />
        <Route exact path="/Checkoutpage" element={<Checkoutpage />} />
        <Route exact path="/ordersuccess/:id" element={<OrderSuccessPage />} />
        <Route
          exact
          path="/Productdetails/:id"
          element={<SingleProductPage />}
        />

        <Route
          path="/CartPage"
          element={
            <Authentication>
              <CartPage />
            </Authentication>
          }
        />
        <Route
          exact
          path="/WishlistPage"
          element={
            <Authentication>
              <WishlistPage />
            </Authentication>
          }
        />
        <Route
          exact
          path="/AccountPage"
          element={
            <Authentication>
              <AccountPage />
            </Authentication>
          }
        />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
