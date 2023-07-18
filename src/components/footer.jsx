import React from "react";


// A function to represent the footer
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="footer-col-1">
            <a className="logo" href="index.html">
              Abodes
            </a>
            <ul>
              <li>200 Rodeo Drive</li>
              <li>Los Angeles, CA</li>
              <li>90210</li>
            </ul>
          </div>
          <div className="footer-col-2">
            <h4>Help</h4>
            <ul>
              <li>
                <a href="#">Plans</a>
              </li>
              <li>
                <a href="#">Track Order</a>
              </li>
              <li>
                <a href="#">Store Locator</a>
              </li>
              <li>
                <a href="#">Return Policy</a>
              </li>
              <li>
                <a href="#">My Account</a>
              </li>
            </ul>
          </div>
          <div className="footer-col-3">
            <h4>About Us</h4>
            <ul>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Affiliate</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-col-4">
            <h4>Follow Us</h4>
            <ul>
              <li>
                <a href="https://www.facebook.com/">Facebook</a>
              </li>
              <li>
                <a href="https://www.twitter.com/">Twitter</a>
              </li>
              <li>
                <a href="https://www.instagram.com">Instagram</a>
              </li>
              <li>
                <a href="https://www.youtube.com">Youtube</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
     
    </footer>
  );
};


// Finally, the Footer component is exported as the default export, 
// making it available for use in other parts of the application.
export default Footer;
