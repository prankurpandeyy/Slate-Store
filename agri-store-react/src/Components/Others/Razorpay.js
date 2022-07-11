import React from "react";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import {
  useProductContext,
  useCartContext,
} from "../../Context/AllContextIndex";

function Razorpay() {
  const { totalprice, cart, applyCoupon, newTotalPrice, discount } =
    useCartContext();
  const { state, dispatch } = useProductContext();
  const orderData = state;

  const navigate = useNavigate();
  const finalAmount = totalprice + 50 - discount;
  const handlePay = (e) => {
    e.preventDefault();

    var options = {
      key: "rzp_test_Q8sjoBrO5RGyOl",
      key_secret: "DLl9vs2NrFN4fPuWFDxN0sr3",
      amount: finalAmount * 100,
      currency: "INR",
      name: "Slate Store ",
      description: "We sell cars",
      handler: function (response) {
        dispatch({
          type: "ORDERDATA",
          payload: {
            order_id: response.razorpay_payment_id,
            amount: finalAmount,
            cart: [...cart],
          },
        });
        // alert("Payment Successful");
        navigate(`/ordersuccess/${response.razorpay_payment_id}`);
        cart.length = [];
        toast.success("Payment success!.");
      },
      prefill: {
        name: "PRANKUR  PANDEY",
        email: "PRANKUR@gmail.com",
        contact: "7580909961",
      },
      notes: {
        address: "Razorpay Corporate office",
      },
      theme: {
        color: "#76C310",
      },
    };

    var pay = new window.Razorpay(options);
    pay.open();
  };

  return (
    <div>
      <button onClick={handlePay} className="btn btn-primary">
        Pay Now
      </button>
    </div>
  );
}

export default Razorpay;
