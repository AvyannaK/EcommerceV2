import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// A function to represent the navigation bar
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

// Hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

//   Link component from the react-router-dom library, which is used to create a link to the home page.
  return (
    <header>
      <div className="container">
        <div className="navbar">
          <Link className="logo" to="/">
            Abodes
          </Link>
          {/* The nav-list class is conditionally assigned the show class based on the value of isMenuOpen.
           This class determines whether the navigation links should be visible or hidden. 
           The show class is responsible for showing the menu when isMenuOpen is true. */}
          <ul className={`nav-list ${isMenuOpen ? 'show' : ''}`}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          {/* The hide class is conditionally assigned based on the value of isMenuOpen to hide the hamburger icon when the menu is open.
           The hide class is responsible for hiding the hamburger icon when isMenuOpen is true. */}
          <div className="hamburger" onClick={toggleMenu}>
            <i className={`fas fa-bars ${isMenuOpen ? 'hide' : ''}`}></i>
          </div>
        </div>
      </div>

      <div className={`navdrop ${isMenuOpen ? 'show' : ''}`}>
        <ul className="navd">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

// Finally, the Navbar component is exported as the default export, 
// making it available for use in other parts of the application.
export default Navbar;
