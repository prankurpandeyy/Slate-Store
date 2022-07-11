import React from "react";
import { useCartContext } from "../Context/CartPageContext";
import Razorpay from "../Razorpay";
import "./Checkout.css";
import AddAddress from "../../AddAddress/AddAddress";
import { useAdressContext } from "../Context/AddressContext";
function Checkout() {
  const { cart, totalprice, discount } = useCartContext();
  const { fulladdressdata } = useAdressContext();

  return (
    <div>
      <div className="checkout-container">
        <h2> Checkout Details</h2>
        <hr className="hr-checkout-page" />
        <h2> Product Details</h2>
        <hr className="hr-checkout-page" />
        <table className="checkout-table">
          <tr>
            <th>Title</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
          {cart.map((prod) => (
            <tr>
              <td>{prod.title}</td>
              <td>{prod.qty}</td>
              <td>{prod.price}</td>
              <td>{prod.qty * prod.price}</td>
            </tr>
          ))}
        </table>
        <hr className="hr-checkout-page" />
        <h2> Price Details</h2>
        <hr className="hr-checkout-page" />
        <div className="total-checkout-price">
          <div> Total Price</div>
          <div> ₹{totalprice}</div>
        </div>
        <div className="total-discount">
          <div> Total Discount</div>
          <div> ₹{discount}</div>
        </div>
        <div className="total-delivery-charge">
          <div> Delivery Charge</div>
          <div>₹ 50</div>
        </div>
        <hr className="hr-checkout-page" />
        <div className="grand-total">
          <div> Grand Total</div>
          <div> ₹{totalprice + 50 - discount}</div>
        </div>
        <hr className="hr-checkout-page" />
        <h2> Delivery Details</h2>
        <AddAddress />

        <div className="address-data">
          {fulladdressdata.map((item) => {
            return (
              <div className="address-data-container">
                <form>
                  <input
                    type="radio"
                    name="select-address"
                    className="input-type-radio"
                  />
                  <div className="fullname">
                    <div>Full Name :</div>
                    <div>{item.fullname}</div>
                  </div>
                  <div className="email">
                    <div>Email :</div>
                    <div>{item.email}</div>
                  </div>
                  <div className="phonenumber">
                    <div>Phone :</div>
                    <div>{item.phone}</div>
                  </div>
                  <div className="pincode">
                    <div>Pincode :</div>
                    <div>{item.pincode}</div>
                  </div>
                  <div className="address">
                    <div>Address :</div>
                    <div>{item.address}</div>
                  </div>
                </form>
              </div>
            );
          })}
        </div>
        <hr className="hr-checkout-page" />
        <h2> Payment Details</h2>
        <Razorpay />
        <hr className="hr-checkout-page" />
      </div>
    </div>
  );
}

export default Checkout;
