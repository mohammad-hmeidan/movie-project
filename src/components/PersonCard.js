import React, { useState } from "react";
import { Link } from "react-router-dom";

import ReactStars from "react-rating-stars-component";
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
        <ReactStars
          count={6}
          value={Math.random() * 6}
          size={30}
          isHalf={true}
          edit={false}
          activeColor="#ffd700"
        />
        <p>{otherName}</p>
      </div>
    </Link>
  );
}

export default PersonCard;
