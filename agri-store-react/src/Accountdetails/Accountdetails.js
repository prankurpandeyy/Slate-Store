import React from "react";
import { useCartContext } from "../Components/Context/CartPageContext";
import { useLoginContext } from "../Components/Context/LoginPageContext";
import { useWishlistContext } from "../Components/Context/WishlistPageContext";
import "./Accountdetails.css";
function Accountdetails() {
  const { state, logoutHandler } = useLoginContext();

  const { loginData } = state;
  const { _id, email, name, number } = loginData;
  const { cart } = useCartContext();
  const { wish } = useWishlistContext();
  return (
    <div>
      <table>
        <tr>
          <th>_Id:</th>
          <td> {_id}</td>
        </tr>
        <tr>
          <th>Name:</th>
          <td>{name}</td>
        </tr>
        <tr>
          <th>Email:</th>
          <td>{email}</td>
        </tr>
        <tr>
          <th>Cart:</th>
          <td>{cart.length}</td>
        </tr>
        <tr>
          <th>Wishlist:</th>
          <td>{wish.length}</td>
        </tr>
        <tr>
          <th>Logout:</th>
          <td>
            <button className="btn btn-primary" onClick={logoutHandler}>
              Logout{" "}
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Accountdetails;
