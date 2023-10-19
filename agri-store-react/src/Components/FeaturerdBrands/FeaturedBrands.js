import { React, Link } from "../../Utils/CustomUtils";
import "../../Utils/CustomCSSUtils.css";
import { useCatagoriesFilterContext } from "../../Context/CatagoriesFilterContext";

function FeaturedBrands() {
  const { searchbarData } = useCatagoriesFilterContext();
  const featuredCars = searchbarData.slice(2, 10);
  console.log("🚀 ~ file: FeaturedBrands.js:8 ~ FeaturedBrands ~ featuredCars:", featuredCars)
  const carsCatagory = searchbarData.slice(1, 5);

  return (
    <div>
      {/* <div class="sm:flex  flex-wrap justify-center items-center text-center gap-8">
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
      </div> */}
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-col text-center w-full mb-20">
            <h2 class="text-xs text-red-400 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-white">Master Cleanse Reliac Heirloom</h1>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 class="text-white text-lg title-font font-medium">Support </h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">Best In House Machines and Mechanices to deliver top notch service.</p>

                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 class="text-white text-lg title-font font-medium">On Road Service</h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">Our Service on wheels if you are stuck at remote locations.</p>

                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
                <div class="flex items-center mb-3">
                  <div class="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <h2 class="text-white text-lg title-font font-medium">No Cash</h2>
                </div>
                <div class="flex-grow">
                  <p class="leading-relaxed text-base">We are digital first we accept online payments as our preference .</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* display selected car data on click redirect to the full view of car with details*/}
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">


            {
              featuredCars.map((cars) => {
                return (<div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a class="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={cars.image} />
                  </a>
                  <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{cars.categoryName}</h3>
                    <Link to={`/Productdetails/${cars._id}`}>

                      <h2 class="text-white title-font text-lg font-medium">{cars.title}</h2>
                    </Link>
                    <p class="mt-1">₹{cars.price}</p>
                  </div>
                </div>)
              })
            }
          </div>
        </div>
      </section>

      {/* user base data  */}
      <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Master Cleanse Reliac Heirloom</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
          </div>
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-red-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M8 17l4 4 4-4m-4-5v9"></path>
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                </svg>
                <h2 class="title-font font-medium text-3xl text-white">2.7K</h2>
                <p class="leading-relaxed">Part Serviced</p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-red-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
                <h2 class="title-font font-medium text-3xl text-white">1.3K</h2>
                <p class="leading-relaxed">Customers</p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-red-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                </svg>
                <h2 class="title-font font-medium text-3xl text-white">74</h2>
                <p class="leading-relaxed">People Team</p>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-red-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h2 class="title-font font-medium text-3xl text-white">46</h2>
                <p class="leading-relaxed">Minute Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* testimonial data from customers */}


      <section class="text-gray-400 bg-gray-900 body-font mb-12">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Sundar_pichai.png" />
                <p class="leading-relaxed">At first it was impossible to do the car selling and service in 46 minutes but It was smooth and fine, Great Team, Great Work!</p>
                <span class="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
                <h2 class="text-white font-medium title-font tracking-wider text-sm">SUNDER PICHAI </h2>
                <p class="text-gray-500">CEO,Alphabet</p>
              </div>
            </div>
            <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div class="h-full text-center">
                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src="https://upload.wikimedia.org/wikipedia/commons/f/f8/Ratan_Tata_photo.jpg" />
                <p class="leading-relaxed">Time is money and this bussiness plays on time, skilled team and nice folks makes, looking forward to implement the time boundation TATA too.</p>
                <span class="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
                <h2 class="text-white font-medium title-font tracking-wider text-sm">RATAN TATA </h2>
                <p class="text-gray-500">CHAIRMAN , TATA GROUP</p>
              </div>
            </div>
            <div class="lg:w-1/3 lg:mb-0 p-4">
              <div class="h-full text-center">
                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Bill_Gates_2017_%28cropped%29.jpg" />
                <p class="leading-relaxed">First time someone is valuing the time of common people and giving rewards for the car selling and service ,great concept , good folks.</p>
                <span class="inline-block h-1 w-10 rounded bg-red-500 mt-6 mb-4"></span>
                <h2 class="text-white font-medium title-font tracking-wider text-sm">BILL GATES</h2>
                <p class="text-gray-500">CHAIRMAN, MICROSOFT GROUP</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export { FeaturedBrands };
