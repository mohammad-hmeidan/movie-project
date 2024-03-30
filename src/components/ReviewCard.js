import React from "react";

function ReviewCard({ writer, rate, date, content, img }) {
  return (
    <div className="review-card">
      <div className="header-review-card">
        <div className="image">
          <img
            src={`https://media.themoviedb.org/t/p/w45_and_h45_face/${img}`}
            alt="..."
          />
        </div>
        <div>
          <h2>A review by {writer}</h2>
          <div>
            <div className="rate">{rate}</div>
            <p>
              Written by {writer} on {date}
            </p>
          </div>
        </div>
      </div>
      <p>{content}</p>
    </div>
  );
}

export default ReviewCard;
