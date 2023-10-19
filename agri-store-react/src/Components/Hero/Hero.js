import { React, Link } from "../../Utils/CustomUtils";


function Hero() {
  return (
    <div>

      <div class="mt-[-56px]">

        <section class="text-gray-400 bg-gray-900 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
              <img class="object-cover object-center rounded" alt="hero" src="https://svgshare.com/i/y5h.svg" />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Before they sold out
                <br class="hidden lg:inline-block" />All Super Cars
              </h1>
              <p class="mb-8 leading-relaxed">Try the new edge technology at cheap cost , selling the cars at best possible price in market.</p>
              <div class="flex justify-center">
                <button class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                  <Link to='/ProductListingPage'>
                    Explore Cars
                  </Link>

                </button>
                {/* <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export { Hero };
