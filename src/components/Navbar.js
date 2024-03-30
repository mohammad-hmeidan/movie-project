import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/main-logo.svg";
import "./css/navbar.css";

function Navbar() {
  let toggleMenu = () => {
    document.getElementById("toggle").classList.toggle("active");
    document
      .querySelectorAll(".links .menu-bar i")[0]
      .classList.toggle("active");
    document
      .querySelectorAll(".links .menu-bar i")[1]
      .classList.toggle("active");
  };
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt=".." />
          </Link>
        </div>
        <div className="links">
          <div className="menu-bar" onClick={() => toggleMenu()}>
            <i className="fa-solid fa-bars active"></i>
            <i class="fa-solid fa-xmark"></i>
          </div>
          <ul id="toggle">
            <li>
              <Link to="/movie/popular">
                <i className="fa-solid fa-clapperboard"></i> Movies
              </Link>
            </li>
            <li>
              <Link to="/tv/popular">
                <i className="fa-solid fa-tv"></i> Tv shows
              </Link>
            </li>
            <li>
              <Link to="/people">
                <i className="fa-solid fa-person"></i> People
              </Link>
            </li>
            <li>
              <Link to="/search/multi">
                <i className="fa-solid fa-magnifying-glass"></i>Search
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
