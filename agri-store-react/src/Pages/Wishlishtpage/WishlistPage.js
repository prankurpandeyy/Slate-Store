import { React } from "../../Utils/CustomUtils";
import { useWishlistContext } from "../../Context/AllContextIndex";
import {
  Footer,
  Header,
  ProductCard,
} from "../../Components/AllComponentIndex";

import "./Wishlist.css";
function WishlistPage() {
  const { wish } = useWishlistContext();

  return (
    <div>
      <Header />
      {wish.length === 0 ? (
        <div className="cart-mesg"> there are no items in Wishlist </div>
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
