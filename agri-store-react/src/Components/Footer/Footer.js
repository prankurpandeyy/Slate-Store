import React from "../../Utils/CustomUtils";
import "../../Utils/CustomCSSUtils.css";
function Footer() {
  return (
    <div>
      <footer class="bg-white dark:bg-gray-800 w-full p-2 bottom-0 fixed-bottom">
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
      </footer>

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
