import React, { useEffect, useState } from "react";
import MainCard from "./MainCard";
import LoadingCard from "./LoadingCard";

import Zoom from "react-reveal/Zoom";

function Wrapper({
  type,
  title,
  selectedtime,
  initialApi,
  circularActive = false,
}) {
  const [apiUrl, setApiUrl] = useState(initialApi);
  const [data, setData] = useState(null);
  let [activeTimeFrame, setActiveTimeFrame] = useState("day");

  let url = "";
  useEffect(() => {
    if ((title === "Recommendation") | (type === "cast")) {
      url = initialApi;
    } else {
      url = apiUrl;
    }
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGE2ZDRhZGMxMmIyZjhiYmE3OWI3OWVjODIyZWRjZCIsInN1YiI6IjY0NjhkMTBiMzNhMzc2MDEzYjNkZjk1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F60GxDSi1b41yQ_1yFJpzFT-C_h58Kq6kVW_ItU7Oec", // الرمز الخاص بك
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, [apiUrl, initialApi]);

  const handleChangeApi = (timeframe) => {
    setActiveTimeFrame(timeframe);
    const newApiUrl =
      timeframe === "week" ? initialApi.replace("day", "week") : initialApi;
    setApiUrl(newApiUrl);
  };

  if (!data) {
    return (
      <div className="container-scroller container">
        <LoadingCard />
      </div>
    );
  }

  const content =
    type === "movie" || type === "tv" ? (
      data.total_results > 0 ? (
        data.results.map((item) => (
          <Zoom key={Math.random() * item.id}>
            <MainCard
              title={item.title || item.name}
              url={`/movie-project/${type}/${item.id}`}
              img={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}
              date={item.release_date || item.first_air_date}
              vote_average={Math.round(item.vote_average * 10)}
              circularActive={circularActive}
            />
          </Zoom>
        ))
      ) : (
        <LoadingCard />
      )
    ) : data.cast && data.cast.length > 0 ? (
      data.cast.slice(0, 15).map((item) => (
        <Zoom key={item.credit_id}>
          <MainCard
            title={item.title || item.name}
            url={`/movie-project/${item.media_type || "person"}/${item.id}`}
            date={item.character}
            img={`https://image.tmdb.org/t/p/w200/${
              item.profile_path || item.poster_path
            }`}
            vote_average={Math.round(item.vote_average * 10)}
            circularActive={circularActive}
          />
        </Zoom>
      ))
    ) : (
      <LoadingCard />
    );

  return (
    <div className="wrapper container">
      <div className="head">
        <h2>{title}</h2>
        {selectedtime === true && (
          <div className="selector">
            <div
              className={activeTimeFrame === "day" ? "active" : ""}
              onClick={() => handleChangeApi("day")}
            >
              Today
            </div>
            <div
              className={activeTimeFrame === "week" ? "active" : ""}
              onClick={() => handleChangeApi("week")}
            >
              This week
            </div>
            <div
              className={`background ${
                activeTimeFrame === "week" ? "active" : ""
              }`}
            ></div>
          </div>
        )}
      </div>
      <div className="container-scroller">{content}</div>
    </div>
  );
}

export default Wrapper;
