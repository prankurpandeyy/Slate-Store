import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer class="footer-items">
        <div class="h3">
          Made with <code> ❤️ </code>by Prankur Pandey
        </div>

        <div class="social-media-links">
          <div class="github">
            <i class="fa fa-github"></i>
          </div>
          <div class="twitter">
            <i class="fa fa-twitter"></i>
          </div>
          <div class="Linkedin">
            <i class="fa fa-linkedin"></i>
          </div>
        </div>
        <div class="H5">© 2021 Agri UI</div>
      </footer>
    </div>
  );
}

export { Footer };
