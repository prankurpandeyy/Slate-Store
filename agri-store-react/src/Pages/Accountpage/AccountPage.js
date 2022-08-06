import React from "react";
import {
  Footer,
  AccountTabs,
  Header,
  Spinner,
} from "../../Components/AllComponentIndex";
import { useProductDataContext } from "../../Context/ProductListingPageContext";
import "./AccountPage.css";

function AccountPage() {
  const { isLoading } = useProductDataContext();
  return (
    <div>
      <Header />
      {isLoading ? <Spinner /> : <AccountTabs />}
      <Footer />
    </div>
  );
}

export default AccountPage;
