import React from "react";
import Landing from "../components/Landing";
import Wrapper from "../components/Wrapper";
import "../css/homePage.css";

const HomePage = () => {
  return (
    <div>
      <Landing />
      <Wrapper
        type="movie"
        title="Trending movie"
        selectedtime={true}
        initialApi="https://api.themoviedb.org/3/trending/movie/day"
        circularActive={true}
      />
      <Wrapper
        type="tv"
        title="Trending Tv"
        selectedtime={true}
        initialApi="https://api.themoviedb.org/3/trending/tv/day"
        circularActive={true}
      />
    </div>
  );
};

export default HomePage;
