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
    <div className="bg-gray-700 h-screen">
      <Header />
      <div className="flex justify-start items-start">

        <Sidebar />
        <div className="flex flex-wrap   ml-64 mt-24 mb-8  items-center justify-center">
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
      </div>

    </div>
  );
}

export default ProductlistingPage;
