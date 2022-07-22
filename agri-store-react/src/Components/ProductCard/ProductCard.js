import { React, Link, toast } from "../../Utils/CustomUtils";
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
            <div class="price1">&#8377; {price}(K)</div>
            <div class="previous-price">
              &#8377;
              <s>1499K</s>
            </div>
          </div>
          <div class="discount">53% off</div>
        </div>

        <div class="card-actions">
          {cart.some((prod) => prod._id === productCardData._id) ? (
            <button
              class="btn  btn-primary icon"
              onClick={(_id) => removeFromCart(productCardData._id, dispatch)}
            >
              {" "}
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
    // < class="horizontal-card" key={_id}>
    //   <img class="horizontal-card__image" src={image} alt="image_ecom" />
    //   <div class="horizontal-card__content">
    //     <h2 class="horizontal-card__title">{title}</h2>
    //     <h3 class="horizontal-card__price">Price : ${price}</h3>
    //     <p class="horizontal-card__description"></p>
    //     <h3 class="horizontal-card__ratings">
    //       <Rating rating={rating} />
    //     </h3>
    //     <h4 class="horizontal-card__stock">
    //       Stock :{inStock ? `inStock` : ` No stock`}
    //     </h4>
    //   </div>
    //   <div class="horizontal-card__action-button">
    //     <div class="horizontal-card__add-to-cart">
    //       {cart.some((prod) => prod._id === productCardData._id) ? (
    //         <button
    //           class="btn btn-success icon"
    //           onClick={(_id) => deleteQty(productCardData._id)}
    //         >
    //           <span class="material-icons buttonmi">remove_shopping_cart </span>
    //         </button>
    //       ) : (
    //         <button
    //           class="btn btn-success icon"
    //           onClick={() => addToCart(productCardData, dispatch)}
    //         >
    //           <span class="material-icons buttonmi"> shopping_cart</span>
    //         </button>
    //       )}
    //     </div>

    //     {/* add to wishlist */}
    //     <div class="horizontal-card__add-to-wishlist">
    //       {wish.some((wishlist) => wishlist._id === productCardData._id) ? (
    //         <button
    //           class="btn btn-danger icon"
    //           onClick={(_id) => deleteWishList(productCardData._id)}
    //         >
    //           Remove
    //           <span class="material-icons buttonmi"> favorite_border </span>
    //         </button>
    //       ) : (
    //         <button
    //           class="btn btn-danger icon"
    //           onClick={() => addToWishlist(productCardData, dispatch)}
    //         >
    //           Wishlist
    //           <span class="material-icons buttonmi"> favorite_border </span>
    //         </button>
    //       )}
    //     </div>
    //   </div>
  );
}

export default ProductCard;
