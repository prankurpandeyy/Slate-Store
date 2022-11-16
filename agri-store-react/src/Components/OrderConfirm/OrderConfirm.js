import { React, Link } from "../../Utils/CustomUtils";
import "../../Utils/CustomCSSUtils.css";
import { useProductContext } from "../../Context/AllContextIndex";

function OrderConfirm() {
  const { state } = useProductContext();
  const orderData = state;

  return (
    <div className="mt-36">
      <div className="order-success-page">
        <div class="bg-gray-100 h-screen ">
          <div class="bg-white p-6  md:mx-auto">
            <svg
              viewBox="0 0 24 24"
              class="text-green-600 w-16 h-16 mx-auto my-6"
            >
              <path
                fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
              ></path>
            </svg>
            <div class="text-center">
              <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">
                Payment Done!
              </h3>
              <p class="text-gray-600 my-2">
                Thank you for completing your secure online payment.
              </p>
              <p> Have a great day! </p>
              <div class="py-10 text-center">
                <Link to="/">
                  <button class="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                    GO BACK
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>

      {/* <div className="order-success-details">
        <div className="order-success-text">
          <h1>Order Successful !</h1>
          <h3 style={{ marginTop: "1rem" }}>
            Order Id : {orderData.orderData.order_id}
          </h3>
          <h3>
            Product Quantity :{" "}
            {orderData.orderData.cart && orderData.orderData.cart.length}
          </h3>
          <h3>
            Order to be Delivered At :{" "}
            {console.log(orderData.orderData.address)}
            {orderData.orderData.address.map((pata) => (
              <div className="delivery-address">
                <div>Name : {pata.fullname} ,</div>
                <div>Phone: {pata.phone} ,</div>
                <div>Address: {pata.address} ,</div>
                <div>Pincode:{pata.pincode} </div>
              </div>
            ))}
          </h3>

          <h2>Total Paid amount : {orderData.orderData.amount}</h2>
          <h4> Product Ordered List : </h4>
        </div>
        <table className="checkout-table">
          <tr>
            <th>Title</th>
            <th>Image</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
          {orderData.orderData.cart &&
            orderData.orderData.cart.map((prod) => (
              <tr>
                <td>{prod.title}</td>
                <td>
                  <img
                    src={prod.image}
                    alt="purchased-products"
                    style={{ height: "5rem", width: "10rem" }}
                  />
                </td>
                <td>{prod.qty}</td>
                <td>{prod.price}</td>
                <td>{prod.qty * prod.price}</td>
              </tr>
            ))}
        </table>

        <Link to="/">
          <button className="btn btn-secondary"> Back to Home </button>
        </Link>
      </div> */}
    </div>
  );
}

export default OrderConfirm;
