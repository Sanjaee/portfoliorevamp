import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHome,
  faUser,
  faFolderOpen,
  faBookmark,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#header");

  return (
    <nav>
      <div className="nav__name">
        <span>Hi, my name is</span>
        <span>AHMAD AFRIZA</span>
      </div>
      <div className="nav__container">
        <div className="nav__menu">
          <a href="#header" onClick={() => setActiveNav("#header")}>
            <FontAwesomeIcon
              icon={activeNav === "#header" ? faHome : faHome}
              className={
                activeNav === "#header" ? "active__nav nav__icon" : "nav__icon"
              }
            />
            <span className="nav__link">Home</span>
          </a>
          <a href="#about" onClick={() => setActiveNav("#about")}>
            <FontAwesomeIcon
              icon={activeNav === "#about" ? faUser : faUser}
              className={
                activeNav === "#about" ? "active__nav nav__icon" : "nav__icon"
              }
            />
            <span className="nav__link">About</span>
          </a>
          <a href="#work" onClick={() => setActiveNav("#work")}>
            <FontAwesomeIcon
              icon={activeNav === "#work" ? faFolderOpen : faFolderOpen}
              className={
                activeNav === "#work" ? "active__nav nav__icon" : "nav__icon"
              }
            />
            <span className="nav__link">Work</span>
          </a>
        </div>
        <div className="nav__contact">
          <a href="#services" onClick={() => setActiveNav("#services")}>
            <FontAwesomeIcon
              icon={activeNav === "#services" ? faBookmark : faBookmark}
              className={
                activeNav === "#services"
                  ? "active__nav nav__icon"
                  : "nav__icon"
              }
            />
            <span className="nav__link">Service</span>
          </a>
          <a href="#footer" onClick={() => setActiveNav("#footer")}>
            <FontAwesomeIcon
              icon={activeNav === "#footer" ? faEnvelope : faEnvelope}
              className={
                activeNav === "#footer" ? "active__nav nav__icon" : "nav__icon"
              }
            />
            <span className="nav__link">Contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
