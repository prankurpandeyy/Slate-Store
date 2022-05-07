import { useContext } from "react";
import { ProductListingPagecontext } from "../Components/Context/ContextProductListingPage";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import ProductCard from "../Components/ProductCard/ProductCard";

import "./Wishlist.css";
function WishlistPage() {
  const { wish } = useContext(ProductListingPagecontext);

  return (
    <div>
      <Header />
      {wish.length === 0 ? (
        <div className="cart-mesg"> there are no items in cart </div>
      ) : (
        <div className="wishlist-cards">
          {wish.map((wishlistpagedata) => {
            return (
              <ProductCard
                productCardData={wishlistpagedata}
                key={wishlistpagedata._id}
              />
            );
          })}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default WishlistPage;
