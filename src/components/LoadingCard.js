import React from "react";
import "./css/loadingCard.css";

function LoadingCard({ count = 5 }) {
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push(
      <div className="loading-card loading" key={i}>
        <div className="image loading-effect"></div>
        <div className="details">
          <h3 className="loading-effect"></h3>
          <p className="loading-effect"></p>
        </div>
      </div>
    );
  }
  return <>{items}</>;
}

export default LoadingCard;
