import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import LoginPage from "./Pages/LoginPage";
import ProductlistingPage from "./Pages/ProductlistingPage";
import SignupPage from "./Pages/SignupPage";
import "./App.css";
import { CartPage } from "./Pages/CartPage";
import WishlistPage from "./Pages/WishlistPage";
import Toast from "./Components/Toast/Toast";
import AccountPage from "./Pages/AccountPage";
import PageNotFound from "./Components/PageNotFound";
import Authentication from "./Components/Authentication";
import Checkoutpage from "./Pages/Checkoutpage";
import Razorpay from "./Components/Razorpay";
import OrderSuccessPage from "./Pages/OrderSuccessPage";
import SingleProductPage from "./Pages/SingleProductPage";

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
