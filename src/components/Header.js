import React, { useState } from 'react';
import Logo from '../assets/images/logo.svg';

const navLinks = [
  'Delivery',
  'Shopping',
  'Home Improvement',
  'Small Business Software',
  'Re-Spruce',
  'Contact',
];

function Header() {
  const links = navLinks.map(link => {
    return (
      <li className={link === 'Contact' ? 'mblContact' : ''}>
        <a href="#">{link}</a>
      </li>
    );
  });

  const [navActive, setNavActive] = useState(false);

  return (
    <div>
      <header className={navActive ? 'header-active' : ''}>
        <img className="logo" src={Logo} alt="SpruceBox" />
        <nav>
          <ul className={`navLinks ${navActive ? 'nav-active' : ''}`}>
            {links}
          </ul>
        </nav>
        <a className="contact" href="#">
          <button>Contact Us</button>
        </a>
        <div
          className="hamburger"
          onClick={() => {
            setNavActive(!navActive);
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </header>
    </div>
  );
}

export default Header;
