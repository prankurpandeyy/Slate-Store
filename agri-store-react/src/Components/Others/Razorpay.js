import { React, useNavigate, toast } from "../../Utils/CustomUtils";

import {
  useProductContext,
  useCartContext,
  useAdressContext,
} from "../../Context/AllContextIndex";

function Razorpay() {
  const { totalprice, cart, applyCoupon, newTotalPrice, discount } =
    useCartContext();
  const { fulladdressdata } = useAdressContext();
  const { state, dispatch } = useProductContext();
  const orderData = state;
  console.log(
    "🚀 ~ file: Razorpay.js ~ line 15 ~ Razorpay ~ orderData",
    orderData
  );

  const navigate = useNavigate();
  const finalAmount = totalprice + 50 - discount;
  const handlePay = (e) => {
    e.preventDefault();

    var options = {
      key: "rzp_test_Q8sjoBrO5RGyOl",
      key_secret: "DLl9vs2NrFN4fPuWFDxN0sr3",
      amount: finalAmount * 100,
      address: fulladdressdata,
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
            address: fulladdressdata,
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
      <button
        type="button"
        onClick={handlePay}
        class="first-line:py-2 px-4  bg-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
      >
        PAY NOW
      </button>
    </div>
  );
}

export default Razorpay;
