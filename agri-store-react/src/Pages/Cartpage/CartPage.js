import { useEffect } from "../../Utils/CustomUtils";
import "./CartPage.css";
import {
  Header,
  Footer,
  TotalPrice,
  Spinner,
} from "../../Components/AllComponentIndex";
import {
  useCartContext,
  useProductDataContext,
  useWishlistContext,
} from "../../Context/AllContextIndex";
import { removeFromCart, updateQty } from "../../Services/CartServices";
import { addToWishlist, deleteWishList } from "../../Services/WishlistServices";

function CartPage() {
  const { dispatch, wish } = useWishlistContext();
  const { isLoading } = useProductDataContext();
  const { cart, state, totalprice } = useCartContext();

  useEffect(() => {
    dispatch({
      type: "TOTALPRICE",
      payload: cart.reduce(
        (acc, item) => acc + Number(item.qty) * Number(item.price),
        0
      ),
    });
  }, [cart]);

  return (
    <div>
      <Header cart={cart} />

      {isLoading ? (
        <Spinner />
      ) : cart.length === 0 ? (
        <div className="cart-mesg"> there are no items in Cart </div>
      ) : (
        <table id="customers">
          <tr>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Delete</th>
            <th>Wishlist</th>
          </tr>

          {cart.map((prod) => (
            <tr>
              <td>{prod.title}</td>
              <td>
                <img src={prod.image} alt="image_text" className="cart-image" />
              </td>
              <td>
                <h3> $ {prod.price}</h3>
              </td>
              <td>
                <div className="cart-btn">
                  <button
                    class="hcard increase"
                    onClick={() => updateQty("increment", prod._id, dispatch)}
                  >
                    <span class="material-icons">add</span>
                  </button>
                  {prod.qty}
                  <button
                    class="hcard decrease"
                    onClick={() => updateQty("decrement", prod._id, dispatch)}
                  >
                    <span class="material-icons">remove</span>
                  </button>
                </div>
              </td>

              <td>
                <button
                  className="hcard decrease"
                  onClick={(_id) => removeFromCart(prod._id, dispatch)}
                >
                  <span class="material-icons">delete</span>
                </button>
              </td>
              <td>
                <div className="cart-btn">
                  {wish.some((wishlist) => wishlist._id === prod._id) ? (
                    <button
                      class="hcard decrease"
                      onClick={(_id) => deleteWishList(prod._id, dispatch)}
                    >
                      <span class="material-icons buttonmi">heart_broken</span>
                    </button>
                  ) : (
                    <button
                      class="hcard decrease"
                      onClick={() => addToWishlist(prod, dispatch)}
                    >
                      <span class="material-icons buttonmi">
                        {" "}
                        favorite_border{" "}
                      </span>
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </table>
      )}

      <div className="total-price">
        <TotalPrice />
      </div>

      <Footer />
    </div>
  );
}

export default CartPage;
