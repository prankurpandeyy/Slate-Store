import { React, Link, useNavigate } from "../../Utils/CustomUtils";
import {
  useWishlistContext,
  useCartContext,
  useProductContext,
} from "../../Context/AllContextIndex";
import { addToCart, removeFromCart } from "../../Services/CartServices";
import { addToWishlist, deleteWishList } from "../../Services/WishlistServices";
import "./ProductCard.css";
function ProductCard({ productCardData }) {
  const { _id, image, title, price } = productCardData;
  const { wish } = useWishlistContext();
  const { dispatch } = useProductContext();
  const { cart } = useCartContext();

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  return (
    <div className="horizontal-card ">
      <div class="card-wrapper basic-card">
        <div>
          <Link
            to={`/Productdetails/${_id}`}
            style={{ textDecoration: "none" }}
          >
            {" "}
            <img src={image} class="card-img" alt="demo" />
            <h2 class="card-heading">{title}</h2>
          </Link>
        </div>

        <div class="card-contents">
          <div class="product-price">
            <div class="price1">$ {price}(K)</div>
            <div class="previous-price">
              $<s>1499K</s>
            </div>
          </div>
          <div class="discount">33% off</div>
        </div>

        <div class="card-actions">
          {cart.some((prod) => prod._id === productCardData._id) ? (
            <button
              class="btn  btn-primary icon"
              onClick={(_id) => removeFromCart(productCardData._id, dispatch)}
            >
              REMOVE FROM CART
              <span class="material-icons buttonmi">remove_shopping_cart </span>
            </button>
          ) : (
            <button
              class="btn btn-primary icon"
              onClick={() => addToCart(productCardData, dispatch)}
            >
              ADD TO CART
              <span class="material-icons buttonmi"> shopping_cart</span>
            </button>
          )}
          {wish.some((wishlist) => wishlist._id === productCardData._id) ? (
            <button
              class="btn btn-primary icon"
              onClick={(_id) => deleteWishList(productCardData._id, dispatch)}
            >
              REMOVE FROM WISHLIST
              <span class="material-icons buttonmi"> favorite_border </span>
            </button>
          ) : (
            <button
              class="btn btn-primary icon"
              onClick={() => addToWishlist(productCardData, dispatch)}
            >
              ADD TO WISHLIST
              <span class="material-icons buttonmi"> favorite_border </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
