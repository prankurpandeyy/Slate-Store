import { React, Link } from "../../Utils/CustomUtils";
import { useCartContext } from "../../Context/AllContextIndex";
import "../../Utils/CustomCSSUtils.css";

function TotalPrice() {
  const { totalprice, cart } = useCartContext();

  return (
    <div>
      <div class="columns">
        <ul class="price">
          <li class="grey">Total Price:₹ {totalprice}</li>
          <li>Product Quantity : {cart.length}</li>
          <li>Total Paybable amount :₹ {totalprice}</li>
          <li class="grey">
            <Link to="/Checkoutpage">
              <button className="checkout">Checkout</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TotalPrice;
