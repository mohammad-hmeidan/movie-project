import React, { useState } from "react";
import { Link } from "react-router-dom";
import CircularProgress from "./CircularProgress";
import loadingImage from "../images/loading-image.gif";
import errorImage from "../images/error-image.jpg";

function MainCard({
  circularActive = false,
  url = "/",
  img,
  title = "undefined",
  date = "???/??/???",
  vote_average = "N/R",
}) {
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
    <div className="main-card">
      <Link to={url}>
        <div className="image">
          <img
            src={
              !imageLoaded && !hasError
                ? loadingImage
                : hasError
                ? errorImage
                : img
            }
            alt={title}
            loading="lazy"
            onLoad={handleImageLoaded}
            onError={handleImageError}
          />
        </div>
        <div className="details">
          <h3>{title}</h3>
          <p>{date}</p>
          {circularActive ? (
            <CircularProgress progressValue={vote_average} />
          ) : null}
        </div>
      </Link>
    </div>
  );
}

export default MainCard;
