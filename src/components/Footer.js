import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/big-logo.svg";
import "./css/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="..." />
        </div>
        <div className="movies">
          <h3>
            <Link to="/movie-project/movie/popular">Movies</Link>
          </h3>
        </div>
        <div className="tv-show">
          <h3>
            <Link to="/movie-project/tv/popular">TV Show</Link>
          </h3>
        </div>
        <div className="people">
          <h3>
            <Link to="/movie-project/people">People</Link>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
