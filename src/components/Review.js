import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { Link } from "react-router-dom";
import "./css/review.css";
import LoadingReiew from "./LoadingReiew";

function Review({ type, selectId }) {
  const [data, setData] = useState({});
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGE2ZDRhZGMxMmIyZjhiYmE3OWI3OWVjODIyZWRjZCIsInN1YiI6IjY0NjhkMTBiMzNhMzc2MDEzYjNkZjk1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F60GxDSi1b41yQ_1yFJpzFT-C_h58Kq6kVW_ItU7Oec",
      },
    };
    fetch(
      `https://api.themoviedb.org/3/${type}/${selectId}/reviews?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, [selectId, type]);
  return (
    <div className="review container">
      <h2>Social Reviews</h2>
      <div className=" review-container">
        {data.total_results > 0 ? (
          <ReviewCard
            writer={data.results[0].author}
            rate={data.results[0].author_details.rating}
            date={data.results[0].created_at.split("T")[0]}
            content={data.results[0].content}
            img={data.results[0].author_details.avatar_path}
          />
        ) : data.total_results === 0 ? null : (
          <LoadingReiew count={1} />
        )}
      </div>
      {data.total_results > 0 ? (
        <div>
          <Link to={`/${type}/${selectId}/reviews`}>Read All Review </Link>
        </div>
      ) : data.total_results === 0 ? (
        <div style={{ fontSize: "1.2rem" }}>there isn't results</div>
      ) : null}
    </div>
  );
}

export default Review;
