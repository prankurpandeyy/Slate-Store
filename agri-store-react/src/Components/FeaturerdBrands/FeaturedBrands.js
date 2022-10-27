import { React, Link } from "../../Utils/CustomUtils";
import "../../Utils/CustomCSSUtils.css";
import { useCatagoriesFilterContext } from "../../Context/CatagoriesFilterContext";

function FeaturedBrands() {
  const { searchbarData } = useCatagoriesFilterContext();
  const featuredCars = searchbarData.slice(6, 10);
  const carsCatagory = searchbarData.slice(1, 5);

  return (
    <div>
      <div class="sm:flex flex-wrap justify-center items-center text-center gap-8">
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
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
            Website Design
          </h3>
          <p class="text-md  text-gray-500 dark:text-gray-300 py-4">
            Encompassing today’s website design technology to integrated and
            build solutions relevant to your business.
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
            Branding
          </h3>
          <p class="text-md text-gray-500 dark:text-gray-300 py-4">
            Share relevant, engaging, and inspirational brand messages to create
            a connection with your audience.
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
            SEO Marketing
          </h3>
          <p class="text-md  text-gray-500 dark:text-gray-300 py-4">
            Let us help you level up your search engine game, explore our
            solutions for digital marketing for your business.
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
              <div class="card flex flex-col justify-center p-10 bg-gray-700 rounded-lg shadow-2xl">
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
                    class="w-full object-cover object-center"
                  />
                </div>
                <div class="prod-info grid gap-10">
                  <div>
                    <ul class="flex flex-row justify-center items-center"></ul>
                  </div>
                  <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                    <p class="font-bold text-xl">65 $</p>
                    <button class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                      Add to cart
                    </button>
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
      <div className="flex justify-between ">
        {featuredCars.map((car) => (
          <div class="w-80 flex justify-center items-center">
            <div class="w-full p-4">
              <div class="card flex flex-col justify-center p-10 bg-gray-700 rounded-lg shadow-2xl">
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
                    class="w-full object-cover object-center"
                  />
                </div>
                <div class="prod-info grid gap-10">
                  <div>
                    <ul class="flex flex-row justify-center items-center"></ul>
                  </div>
                  <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                    <p class="font-bold text-xl">65 $</p>
                    <button class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <section class="icons-container">
        <div class="icons">
          <span class="material-icons fbmi">check_circle</span>
          <div class="content">
            <h3>150+</h3>
            <p>branches</p>
          </div>
        </div>

        <div class="icons">
          <span class="material-icons fbmi">local_shipping</span>
          <div class="content">
            <h3>4770+</h3>
            <p>cars sold</p>
          </div>
        </div>

        <div class="icons">
          <span class="material-icons fbmi">groups</span>
          <div class="content">
            <h3>320+</h3>
            <p>happy clients</p>
          </div>
        </div>

        <div class="icons">
          <span class="material-icons fbmi">directions_car</span>
          <div class="content">
            <h3>1500+</h3>
            <p>news cars</p>
          </div>
        </div>
      </section>

      <div class="featured-products">
        <div class="featured-catagories">
          <div class="h1"> Catagories</div>
        </div>

        <div class="catagory-choice">
          {carsCatagory.map((car) => (
            <div>
              <Link
                to={`/ProductListingPage/${car.categoryName}`}
                style={{ textDecoration: "none" }}
              >
                <div class="first-catagory box">
                  <img
                    src={car.image}
                    alt="car"
                    className="catagory-cars-image"
                  />
                  <h3 style={{ textTransform: "uppercase", padding: "0.5rem" }}>
                    {car.categoryName}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div class="featured-brands">
          <div class="h1">Featured Cars</div>
        </div>

        <div class="featured-cars">
          {featuredCars.map((car) => (
            <div class="car" key={car._id}>
              <img src={car.image} alt="car" class="car-image" />
              <div class="car-info">
                <div class="car-name">{car.title}</div>
                <div class="car-price">${car.price}K</div>
                <Link to={`/Productdetails/${car._id}`}>
                  <button className="btn btn-primary-outline">View</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export { FeaturedBrands };
