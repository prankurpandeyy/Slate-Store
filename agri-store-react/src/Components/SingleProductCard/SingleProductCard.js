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
      {/* <div className="single-product-card">
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
      </div> */}

      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={image && image}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {title && title}
              </h1>
              <div class="flex mb-4">
                <span class="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span class="text-gray-600 ml-3">4 Reviews</span>
                </span>
              </div>
              <p class="leading-relaxed">{description && description}</p>
              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div class="flex ml-6 items-center">
                  <div class="relative">
                    <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">
                  ${price && price}
                </span>

                {cart.some((prod) => prod._id === _id) ? (
                  <button
                    class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
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
                    class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                    onClick={() => addToCart(singleProduct, dispatch)}
                  >
                    ADD TO CART
                    <span class="material-icons buttonmi"> shopping_cart</span>
                  </button>
                )}

                {wish.some((wishlist) => wishlist._id === _id) ? (
                  <button
                    class="rounded-full w-10 h-10 bg-red-500 p-0 border-0 inline-flex items-center justify-center text-white ml-4"
                    onClick={(_id) => deleteWishList(_id, dispatch)}
                  >
                    <span class="material-icons buttonmi">
                      {" "}
                      favorite_border{" "}
                    </span>
                  </button>
                ) : (
                  <button
                    onClick={() => addToWishlist(singleProduct, dispatch)}
                    class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                  >
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SingleProductCard;
