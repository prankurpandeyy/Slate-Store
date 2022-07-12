import {
  React,
  useEffect,
  useState,
  axios,
  toast,
  useParams,
} from "../../Utils/CustomUtils";

import {
  useWishlistContext,
  useCartContext,
  useProductContext,
} from "../../Context/AllContextIndex";
import { Rating } from "../../Components/AllComponentIndex";
import "./SingleProductCard.css";
import { addToCart, removeFromCart } from "../../Services/CartServices";
import { addToWishlist, deleteWishList } from "../../Services/WishlistServices";
function SingleProductCard() {
  const { wish } = useWishlistContext();
  const { dispatch } = useProductContext();
  const { cart } = useCartContext();
  const [singleProduct, setSingleProduct] = useState([]);
  const {
    _id,
    inStock,
    manufacturedBy,
    image,
    title,
    rating,
    price,
    description,
    categoryName,
  } = singleProduct;
  const productId = useParams();

  // function to get the product  data from the product id
  function getProductById(productId) {
    axios
      .get(`/api/products/${productId}`)
      .then((res) => {
        setSingleProduct(res.data.product);
      })
      .catch((err) => {
        console.log(" err", err);
      });
  }

  useEffect(() => {
    toast.success(" Fetching single card data.");
    getProductById(productId.id);
  }, [productId]);

  return (
    <div>
      <div className="single-product-card">
        <div className="product-image">
          <img
            src={image && image}
            alt="demo"
            className="single-product-image"
          />
        </div>
        <div className="product-details">
          <div className="product-title">
            <h2> {title && title} </h2>
          </div>
          <div className="product-description">
            <p>Description : {description && description}</p>
            <div className="techincal-details">
              <p>Fuel Type : {categoryName && categoryName}</p>
              <p> Price : {price && price}</p>
              <p> ManufacturedBy : {manufacturedBy && manufacturedBy}</p>
              Rating : <Rating rating={rating && rating} />
              Stock :
              {inStock ? (
                <div style={{ fontSize: "1.5rem", color: "black" }}>
                  In Stock
                </div>
              ) : (
                <div style={{ fontSize: "1.5rem", color: "black" }}>
                  Out of Stock
                </div>
              )}
            </div>
            <div className="product-action-button">
              {cart.some((prod) => prod._id === _id) ? (
                <button
                  class="btn  btn-primary icon1"
                  onClick={(_id) => removeFromCart(_id, dispatch)}
                >
                  {" "}
                  REMOVE FROM CART
                  <span class="material-icons buttonmi">
                    remove_shopping_cart{" "}
                  </span>
                </button>
              ) : (
                <button
                  class="btn btn-primary icon1"
                  onClick={() => addToCart(singleProduct, dispatch)}
                >
                  ADD TO CART
                  <span class="material-icons buttonmi"> shopping_cart</span>
                </button>
              )}
              {wish.some((wishlist) => wishlist._id === _id) ? (
                <button
                  class="btn btn-primary icon1"
                  onClick={(_id) => deleteWishList(_id, dispatch)}
                >
                  REMOVE FROM WISHLIST
                  <span class="material-icons buttonmi"> favorite_border </span>
                </button>
              ) : (
                <button
                  class="btn btn-primary icon1"
                  onClick={() => addToWishlist(singleProduct, dispatch)}
                >
                  ADD TO WISHLIST
                  <span class="material-icons buttonmi"> favorite_border </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductCard;
