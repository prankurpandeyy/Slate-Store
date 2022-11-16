import { React, Link } from "../../Utils/CustomUtils";
import "../../Utils/CustomCSSUtils.css";
import { useCatagoriesFilterContext } from "../../Context/CatagoriesFilterContext";

function FeaturedBrands() {
  const { searchbarData } = useCatagoriesFilterContext();
  const featuredCars = searchbarData.slice(6, 10);
  const carsCatagory = searchbarData.slice(1, 5);

  return (
    <div>
      <div class="sm:flex  flex-wrap justify-center items-center text-center gap-8">
        <div class="w-full  sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
          <div class="flex-shrink-0">
            <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                class="h-6 w-6"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
            </div>
          </div>
          <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
            Car sold
          </h3>
          <p class="text-md  text-gray-500 dark:text-gray-300 py-4">
            Sold the 2000+ cars in an year turing the dream into reality with
            hassle free experince.
          </p>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg dark:bg-gray-800">
          <div class="flex-shrink-0">
            <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                class="h-6 w-6"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
            </div>
          </div>
          <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
            Branches
          </h3>
          <p class="text-md text-gray-500 dark:text-gray-300 py-4">
            Having 150+ branches operational in 25+ cities covering all metros
            and top tier-1/2 cities.
          </p>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
          <div class="flex-shrink-0">
            <div class="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                class="h-6 w-6"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
              </svg>
            </div>
          </div>
          <h3 class="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
            Happy Customer
          </h3>
          <p class="text-md  text-gray-500 dark:text-gray-300 py-4">
            700+ happy customers and their smiles which power to us and
            motivates to do more for them.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold underline text-center m-2 ">
        Top Catagories Cars
      </h2>
      <div className="flex justify-between ">
        {carsCatagory.map((car) => (
          <div class="w-80 flex justify-center items-center">
            <div class="w-full p-4">
              <div class="card flex flex-col justify-center p-2 bg-gray-400 rounded-lg text-black">
                <div class="prod-title">
                  <p class="text-2xl uppercase text-white font-bold">
                    {car.title}
                  </p>
                  <p class="uppercase text-sm text-gray-400">
                    {car.categoryName}
                  </p>
                </div>
                <div class="prod-img">
                  <img
                    src={car.image}
                    alt="image_text"
                    class="w-full object-cover object-center"
                  />
                </div>
                <div class="prod-info grid gap-10">
                  <div>
                    <ul class="flex flex-row justify-center items-center"></ul>
                  </div>
                  <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                    <p class="font-bold text-xl">{car.price}$</p>
                    <p class="px-6 py-2 flex justify-center items-center transition ease-in duration-200 uppercase rounded-full hover:bg-gray-200 hover:text-black border-2 border-gray-900 focus:outline-none">
                      {car.rating}
                      <span className="material-icons">star</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold underline text-center m-2 ">
        Featured Cars
      </h2>
      <div className="flex justify-between mb-16 ">
        {featuredCars.map((car) => (
          <div class="w-80 flex justify-center items-center">
            <div class="w-full p-4">
              <div class="card flex flex-col justify-center p-2 bg-gray-400 rounded-lg text-black">
                <div class="prod-title">
                  <p class="text-2xl uppercase text-white font-bold">
                    {car.title}
                  </p>
                  <p class="uppercase text-sm text-gray-400">
                    {car.categoryName}
                  </p>
                </div>
                <div class="prod-img">
                  <img
                    src={car.image}
                    alt="image_text"
                    class="w-full object-cover object-center"
                  />
                </div>
                <div class="prod-info grid gap-10">
                  <div>
                    <ul class="flex flex-row justify-center items-center"></ul>
                  </div>
                  <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                    <p class="font-bold text-xl">{car.price} $</p>

                    <Link to={`/Productdetails/${car._id}`}>
                      <button class="px-6 py-2 flex justify-center items-center transition ease-in duration-200 uppercase rounded-full hover:bg-gray-200 hover:text-black border-2 border-gray-900 focus:outline-none">
                        More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { FeaturedBrands };
