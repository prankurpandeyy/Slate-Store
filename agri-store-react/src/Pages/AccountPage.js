import React from "react";
import AccountTabs from "../Components/AccountTabs/AccountTabs";
import Address from "../Components/Address";
import { useAdressContext } from "../Components/Context/AddressContext";
import { useCartContext } from "../Components/Context/CartPageContext";
import { useLoginContext } from "../Components/Context/LoginPageContext";
import { useWishlistContext } from "../Components/Context/WishlistPageContext";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";

import "./AccountPage.css";

function AccountPage() {
  return (
    <div>
      <Header />
      <AccountTabs />
      <Footer />
    </div>
  );
}

export default AccountPage;
