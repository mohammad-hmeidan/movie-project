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
          <Link to="/movie-project/">
            <img src={logo} alt=".." />
          </Link>
        </div>
        <div className="links">
          <div className="menu-bar" onClick={() => toggleMenu()}>
            <i className="fa-solid fa-bars active"></i>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul id="toggle">
            <li>
              <Link to="/movie-project/movie/popular">
                <i className="fa-solid fa-clapperboard"></i> Movies
              </Link>
            </li>
            <li>
              <Link to="/movie-project/tv/popular">
                <i className="fa-solid fa-tv"></i> Tv shows
              </Link>
            </li>
            <li>
              <Link to="/movie-project/people">
                <i className="fa-solid fa-person"></i> People
              </Link>
            </li>
            <li>
              <Link to="/movie-project/search/multi">
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
