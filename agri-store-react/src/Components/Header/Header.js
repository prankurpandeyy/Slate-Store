import { React, Link, useState } from "../../Utils/CustomUtils";
import {
  useCartContext,
  useFilterContext,
  useWishlistContext,
} from "../../Context/AllContextIndex";



function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCartContext();
  const { wish } = useWishlistContext();
  const { dispatch } = useFilterContext();

  const token = window.localStorage.getItem("token");
  return (
    <div>
      <div class=" flex flex-row items-center justify-between   w-full p-2 sm:px-4 shadow-xl shadow-xs bg-gray-700 fixed-top top">
        <Link to="/">
          <div class="ml-8 text-lg text-white hidden md:flex">Car-kit</div>
        </Link>
        <span class="w-full md:w-1/3 h-10 cursor-pointer border border-gray-300 text-sm rounded-full flex">
          <input
            type="search"
            onChange={(e) =>
              dispatch({ type: "SEARCHBAR", payload: e.target.value })
            }
            e name="serch"
            placeholder="Search"
            class="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"
          />
        </span>
        <div class="flex  text-white text-2xl ">
          <div class="flex w-48 justify-between ">
            <Link to="/ProductListingPage">
              <span class="material-icons "> store </span>
            </Link>

            <div class="">
              <Link to="/WishlistPage">
                <span class="material-icons "> favorite</span>
              </Link>
              <span class="w-4 h-4 rounded-full text-center absolute leading text-xs bg-red-500">
                {wish.length}
              </span>
            </div>
            <div class="navbadge">
              <Link to="/CartPage">
                <span class="material-icons"> shopping_cart </span>
              </Link>
              <span class="w-4 h-4 rounded-full text-center absolute leading text-xs bg-red-500">
                {cart.length}
              </span>
            </div>

            {!token ? (
              <Link to="/LoginPage">
                <span class="material-icons "> login </span>
              </Link>
            ) : (
              <Link to="/Accountpage">
                <span class="material-icons "> account_circle </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// export { Header };
// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { cart } = useCartContext();
//   const { wish } = useWishlistContext();
//   const { dispatch } = useFilterContext();

//   const token = window.localStorage.getItem("token");

//   return (
//     <div>
//       <header class="text-gray-400 bg-gray-900 body-font z-10 fixed-top ">
//         <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//           <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
//               <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//             </svg>
//             <Link to='/'>

//               <span class="ml-3 text-xl">YourCar</span>
//             </Link>
//           </a>
//           <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
//             <a class="mr-5 hover:text-white"> <div class="relative mr-40">

//               {/* <input type="email" placeholder="search items" id="email" name="email" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" autofill-information="overall type: UNKNOWN_TYPE
// field rank in host form signature group: 0" autofill-prediction="UNKNOWN_TYPE" /> */}
//             </div>

//             </a>
//             {/* explore items */}
//             <a class="mr-5 hover:text-white">
//               <Link to="/ProductListingPage"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//                 <path d="M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z" />
//               </svg></Link>
//             </a>
//             {/* cart */}

//             <a class="mr-5 hover:text-white">
//               <Link to="/CartPage">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//                   <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
//                 </svg>
//               </Link>
//               {/* wishlist */}
//             </a>
//             <a class="mr-5 hover:text-white">
//               <Link to="/WishlistPage">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
//                 </svg></Link>
//             </a>

//           </nav>
//           <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">



//             {
//               !token ? (<Link to="/LoginPage">
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//                   <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" />
//                 </svg>
//               </Link>) : (
//                 <Link to='/Accountpage'>
//                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//                     <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
//                   </svg>

//                 </Link>
//               )
//             }

//           </button>
//         </div>
//       </header>


//     </div>
//   );
// };
export { Header }

