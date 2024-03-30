import React, { useState, useEffect } from "react";
import CircularProgress from "./CircularProgress";
import "./css/overview.css";

function TvOverview({ getApi }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGE2ZDRhZGMxMmIyZjhiYmE3OWI3OWVjODIyZWRjZCIsInN1YiI6IjY0NjhkMTBiMzNhMzc2MDEzYjNkZjk1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F60GxDSi1b41yQ_1yFJpzFT-C_h58Kq6kVW_ItU7Oec",
      },
    };
    fetch(getApi, options)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, [getApi]);
  return (
    <div
      className="TvOverview overview"
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${data.backdrop_path})`,
      }}
    >
      <div className="container">
        <div className="image">
          <img
            src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${data.poster_path}`}
            alt="..."
          />
        </div>
        <div className="details">
          <h2 className="title">{data.name}</h2>
          <div className="date">
            {data.release_date} .{" "}
            {data.id > 0 && data.genres.map((item) => item.name + " ")} . 2h
            21min
          </div>
          <div>
            <div className="rate">
              <CircularProgress
                progressValue={
                  data.id > 0 && Number(data.vote_average.toFixed(1) * 10)
                }
              />
              <span>User Score</span>
            </div>
            <div className="play">
              <div></div>
              <span>Play Trailer</span>
            </div>
          </div>
          <h3>Overview</h3>
          <p>{data.overview}</p>
          <div>
            <div>
              <h4>status</h4>
              <p>{data.status}</p>
            </div>
            <div>
              <h4>Original language</h4>
              <p>{data.id > 0 && data.spoken_languages[0].name}</p>
            </div>
            <div>
              <h4>budget</h4>
              <p>${data.budget}</p>
            </div>
            <div>
              <h4>Revenue</h4>
              <p>${data.revenue}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TvOverview;
