import { useNavigate } from "../../Utils/CustomUtils";
import "../../Utils/CustomCSSUtils.css";

import {
  useLoginContext,
  useCartContext,
  useWishlistContext,
} from "../../Context/AllContextIndex";
import { logoutHandler } from "../../Services/AuthServices";

function Accountdetails() {
  const { loginData } = useLoginContext();
  const { _id, name, email } = loginData;
  console.log(
    "🚀 ~ file: Accountdetails.js ~ line 14 ~ Accountdetails ~ loginData",
    loginData
  );

  const { cart } = useCartContext();
  const { wish } = useWishlistContext();
  const navigate = useNavigate();
  function logOutUserFromApp() {
    logoutHandler();
    navigate("/");
    window.location.reload();
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
            <button
              type="button"
              onClick={logOutUserFromApp}
              class="py-2 px-4  bg-red-600 hover:bg-red-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              {" "}
              Logout{" "}
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Accountdetails;
