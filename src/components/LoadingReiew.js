import React from "react";
import "./css/loadingReview.css";

function LoadingReiew({ count = 5 }) {
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push(
      <div className="review-card loading" key={i}>
        <div className="header-review-card">
          <div className="image loading-effect"></div>
          <div className="title">
            <div className="loading-effect"></div>
            <div className="loading-effect"></div>
          </div>
        </div>
        <div className="content">
          <div className="loading-effect"></div>
          <div className="loading-effect"></div>
          <div className="loading-effect"></div>
          <div className="loading-effect"></div>
        </div>
      </div>
    );
  }
  return <>{items}</>;
}

export default LoadingReiew;
