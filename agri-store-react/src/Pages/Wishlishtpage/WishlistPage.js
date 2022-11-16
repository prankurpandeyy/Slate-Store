import { React } from "../../Utils/CustomUtils";
import {
  useProductDataContext,
  useWishlistContext,
} from "../../Context/AllContextIndex";
import {
  Footer,
  Header,
  ProductCard,
  Spinner,
} from "../../Components/AllComponentIndex";

import "./Wishlist.css";
function WishlistPage() {
  const { wish } = useWishlistContext();
  const { isLoading } = useProductDataContext();

  return (
    <div>
      <Header />

      {isLoading ? (
        <Spinner />
      ) : wish.length === 0 ? (
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
