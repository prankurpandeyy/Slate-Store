import React from "../../Utils/CustomUtils";
import "../../Utils/CustomCSSUtils.css";
function Footer() {
  return (
    <div>

      <footer class="text-gray-400 bg-gray-900 body-font fixed bottom-0 w-full  ">
        <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col  ">
          <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl">CarSale</span>
          </a>
          <p class="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2023 CarSale —
            <a href="https://prankurpandeyy.netlify.com" class="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@prankurpandeyy</a>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a class="text-gray-400" href="https://fb.com/prankurpandeyy">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">

                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-400" href="https://twitter.com/prankurpandeyy">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-400" href="https://instagram.com/prankurpandeyy">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-3 text-gray-400" href="https://linkedin.com/in/prankurpandeyy">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </footer>
      {/* <footer class="bg-gray-800 dark:bg-gray-800 w-full p-2 bottom-0 fixed-bottom">
        <div class="max-w-screen-xl mx-auto px-4">
          <ul class="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
            <li class="my-2">
              <a
                class="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="#"
              >
                FAQ
              </a>
            </li>
            <li class="my-2">
              <a
                class="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="#"
              >
                Configuration
              </a>
            </li>
            <li class="my-2">
              <a
                class="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="#"
              >
                Github
              </a>
            </li>
            <li class="my-2">
              <a
                class="text-gray-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="#"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </footer> */}

      {/* <footer className="footer-items">
        <div className="h4">
          Made with <code> ❤️ </code>by Prankur Pandey
        </div>
        <div className="social-media-links">
          <div className="github">
            <i className="fa fa-github" />
          </div>
          <div className="twitter">
            <i className="fa fa-twitter" />
          </div>
          <div className="Linkedin">
            <i className="fa fa-linkedin" />
          </div>
        </div>
        <div className="h4">© 2021 Agri UI</div>
      </footer> */}
    </div>
  );
}

export { Footer };
