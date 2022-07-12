import { React, toast, useNavigate } from "../../Utils/CustomUtils";
import {
  useCatagoriesFilterContext,
  useProductDataContext,
} from "../../Context/AllContextIndex";
import {
  Footer,
  Header,
  Spinner,
  ProductCard,
  Sidebar,
} from "../../Components/AllComponentIndex";

import "./ProductlistingPage.css";

function ProductlistingPage() {
  const { state, dispatch } = useProductDataContext();
  const { isLoading } = state;
  const { searchbarData } = useCatagoriesFilterContext();

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="productlisting-cards">
        {isLoading ? (
          <Spinner />
        ) : (
          searchbarData.map((productCardData) => {
            return (
              <ProductCard
                productCardData={productCardData}
                key={productCardData._id}
              />
            );
          })
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ProductlistingPage;
