import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingReiew from "../components/LoadingReiew";
import ReviewCard from "../components/ReviewCard";

import Zoom from "react-reveal/Zoom";

import "../css/reviewsPage.css";

function ReviewsPage({ type }) {
  const { reviewId } = useParams();
  const [data, setData] = useState({});
  const [moreData, setMoreData] = useState({});
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
      `https://api.themoviedb.org/3/${type}/${reviewId}/reviews?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
    // fetch data for add name and image
    fetch(
      `https://api.themoviedb.org/3/${type}/${reviewId}?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setMoreData(response))
      .catch((err) => console.error(err));
  }, [reviewId]);
  return (
    <div>
      <div className="reviews-page-head">
        <div className="container">
          <img
            src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${moreData.backdrop_path}`}
            alt="..."
          />
          <div>
            <h2>{moreData.title || moreData.name}</h2>
            <Link to={`/${type}/${reviewId}`}>← Back to main</Link>
          </div>
        </div>
      </div>
      <div className="reviews container">
        {data.id > 0 ? (
          data.results.map((item) => (
            <Zoom key={item.id}>
              <ReviewCard
                writer={item.author}
                rate={item.author_details.rating}
                date={item.created_at.split("T")[0]}
                img={item.author_details.avatar_path}
                content={item.content}
              />
            </Zoom>
          ))
        ) : (
          <LoadingReiew />
        )}
      </div>
    </div>
  );
}

export default ReviewsPage;
