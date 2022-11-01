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
  const { isLoading } = useProductDataContext();
  const { searchbarData } = useCatagoriesFilterContext();

  return (
    <div className="bg-gray-200 h-screen">
      <Header />
      <Sidebar />
      <div className="flex flex-wrap ml-56 mt-12 mb-16 justify-center items-center">
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
