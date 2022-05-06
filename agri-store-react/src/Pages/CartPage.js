import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./CartPage.css";
import { ProductListingPagecontext } from "../Components/Context/ContextProductListingPage";
import { Header } from "../Components/Header/Header";
function CartPage() {
  const { cart, setCart, deleteQty, updateQty } = useContext(
    ProductListingPagecontext
  );
  const [totalprice, setTotalPrice] = useState();

  console.log(cart);
  useEffect(() => {
    setTotalPrice(
      cart.reduce((acc, item) => acc + Number(item.qty) * Number(item.price), 0)
    );
  }, [cart]);

  return (
    <div>
      <Header cart={cart} />
      <div className="cart-price-container">
        <table id="customers">
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Remove</th>
          </tr>
        </table>

        {cart.map((prod) => (
          <div className="card-item-style">
            <table>
              <tr>
                <div className="card-title">
                  <td>{prod.title}</td>
                </div>
                <td>
                  <div className="card-image">
                    <img src={prod.image} alt="logo" />
                  </div>
                </td>
                <td>
                  <div className="card-price">₹{prod.price}</div>
                </td>

                <td>
                  <div class="hcard-btn">
                    <button
                      class="hcard increase"
                      onClick={() => updateQty("increment", prod._id)}
                    >
                      <span class="material-icons">add</span>
                    </button>
                    {prod.qty}
                    <button
                      class="hcard decrease"
                      onClick={() => updateQty("decrement", prod._id)}
                    >
                      <span class="material-icons">remove</span>
                    </button>
                  </div>
                </td>
                <td>
                  <button
                    className="hcard decrease"
                    onClick={(_id) => deleteQty(prod._id)}
                  >
                    <span class="material-icons">delete</span>
                  </button>
                </td>
              </tr>
            </table>
            <hr />
          </div>
        ))}
      </div>
      <div className="total-price">
        <h4 style={{ fontWeight: "bold" }}> Invoice </h4>
        <hr />
        <h6> Total Item in cart : {cart.length} </h6>
        <hr />
        <h6> Total Amount : {totalprice} </h6>
      </div>
    </div>
  );
}

export { CartPage };
