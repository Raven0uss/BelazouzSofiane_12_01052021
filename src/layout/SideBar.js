import React from "react";
import yogaIcon from "../assets/yoga-icon.png";
import swimIcon from "../assets/swim-icon.png";
import cycleIcon from "../assets/cycle-icon.png";
import dumbbellIcon from "../assets/dumbbell-icon.png";

// Links with ID and icon for SideMenu
const sideLinks = [
  {
    id: "yoga",
    icon: yogaIcon,
  },
  {
    id: "swim",
    icon: swimIcon,
  },
  {
    id: "cycle",
    icon: cycleIcon,
  },
  {
    id: "dumbbell",
    icon: dumbbellIcon,
  },
];

/**
 * SideBar Layout
 * @date 2021-06-11
 * @returns {Component} - JSX React Component
 */
class SideBar extends React.Component {
  render() {
    return (
      <div id="sidebar">
        <div id="sidebar-links-container">
          {sideLinks.map((link) => (
            <a className="sidebar-link" key={link.id} href={`#${link.id}`}>
              <img
                src={link.icon}
                alt={link.id}
                className="sidebar-link-icon"
              />
            </a>
          ))}
        </div>
        <p className="copyright-text">Copyright, SportSee 2020</p>
      </div>
    );
  }
}

export default SideBar;
