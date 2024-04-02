import React, { useState } from "react";
import { Link } from "react-router-dom";

import loadingImage from "../images/loading-image.gif";
import errorImage from "../images/error-image.jpg";

function PersonCard({ url, img, Name, otherName, gender }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleImageLoaded = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageLoaded(false);
    setHasError(true);
  };

  return (
    <Link to={url}>
      <div className="box">
        <img
          src={
            !imageLoaded && !hasError
              ? loadingImage
              : hasError
              ? errorImage
              : img
          }
          alt="..."
          loading="lazy"
          onLoad={handleImageLoaded}
          onError={handleImageError}
        />
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
