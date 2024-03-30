import React from "react";
import { Link } from "react-router-dom";

function PersonCard({ url, img, Name, otherName, gender }) {
  return (
    <Link to={url}>
      <div className="box">
        <img src={img} alt="..." />
        <h3>{Name}</h3>
        <span className="title">{gender}</span>
        <div className="rate">
          <i className="filled fas fa-star"></i>
          <i className="filled fas fa-star"></i>
          <i className="filled fas fa-star"></i>
          <i className="filled fas fa-star"></i>
          <i className="far fa-star"></i>
        </div>
        <p>{otherName}</p>
      </div>
    </Link>
  );
}

export default PersonCard;
