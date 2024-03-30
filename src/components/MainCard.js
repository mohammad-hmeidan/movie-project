import React from "react";
import { Link } from "react-router-dom";
import CircularProgress from "./CircularProgress";

function MainCard({
  circularActive = false,
  url = "/",
  img,
  title = "undefined",
  date = "???/??/???",
  vote_average = "N/R",
}) {
  return (
    <div className="main-card">
      <Link to={url}>
        <div className="image">
          <img src={img} alt="Loading" />
        </div>
        <div className="details">
          <h3>{title}</h3>
          <p>{date}</p>
          {circularActive === true ? (
            <CircularProgress progressValue={vote_average} />
          ) : null}
        </div>
      </Link>
    </div>
  );
}

export default MainCard;
