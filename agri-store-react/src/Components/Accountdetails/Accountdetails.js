import React from "react";
import { useNavigate } from "react-router-dom";
import {
  useLoginContext,
  useCartContext,
  useWishlistContext,
} from "../../Context/AllContextIndex";
import { logoutHandler } from "../../Services/AuthServices";
import "./Accountdetails.css";
function Accountdetails() {
  const { loginData } = useLoginContext();
  const { _id, name, email } = loginData;

  const { cart } = useCartContext();
  const { wish } = useWishlistContext();
  const navigate = useNavigate();
  function logOutUserFromApp() {
    logoutHandler();
    navigate("/");
  }

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
            <button className="btn btn-primary" onClick={logOutUserFromApp}>
              Logout{" "}
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Accountdetails;
