import React from "react";
import { useLoginContext } from "../Components/Context/LoginPageContext";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";

import "./AccountPage.css";

function AccountPage() {
  const { loginData, logoutHandler } = useLoginContext();
  const { _id, email, name, number, cart, wishlist } = loginData;

  return (
    <div>
      <Header />
      <h1>Account Details </h1>

      <table className="table">
        <tr>
          <th>_id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Number</th>
          <th>Cart</th>
          <th>Wishlist</th>
        </tr>
        <tr>
          <td>{_id}</td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{number}</td>
          <td>{cart}</td>
          <td>{wishlist}</td>
        </tr>
      </table>

      <h1>Adress Management </h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Number</th>
          <th>Pincode</th>
          <th>Address</th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Number</th>
          <th>Pincode</th>
          <th>Address</th>
        </tr>
      </table>
      <Footer />
    </div>
  );
}

export default AccountPage;
