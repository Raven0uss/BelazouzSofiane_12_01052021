import React from "react";
import logo from "../assets/logo.png";

// Links for the header
const headerLinks = [
  {
    id: "home",
    label: "Accueil",
  },
  {
    id: "profile",
    label: "Profil",
  },
  {
    id: "settings",
    label: "Réglage",
  },
  {
    id: "community",
    label: "Communauté",
  },
];

/**
 * Header Layout
 * @date 2021-06-11
 * @returns {Component} - JSX React Component
 */
class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={logo} alt="SportSee" id="header-logo" />
        {headerLinks.map((link) => (
          <a href={`#${link.id}`} key={link.id} className="header-link">
            {link.label}
          </a>
        ))}
      </header>
    );
  }
}

export default Header;
