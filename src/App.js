import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./page/HomePage";
import MovieDetailsPage from "./page/MovieDetailsPage";
import ReviewsPage from "./page/ReviewsPage";
import PeoplePage from "./page/PeoplePage";
import MoviePage from "./page/MoviePage";
import PersonDetailsPage from "./page/PersonDetailsPage";
import TvDetailsPage from "./page/TvDetailsPage";

import "../src/app.css";
import SearchPage from "./page/SearchPage";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Routes>
        <Route path="/movie-project/" element={<HomePage />} />
        <Route
          path="/movie-project/movie/popular"
          element={<MoviePage type="movie" urlvar="popular" />}
        />
        <Route
          path="/movie-project/movie/:movieId"
          element={<MovieDetailsPage />}
        />
        <Route
          path="/movie-project/movie/:movieId/reviews"
          element={<ReviewsPage type="movie" />}
        />
        <Route
          path="/movie-project/tv/popular"
          element={<MoviePage type="tv" urlvar="popular" />}
        />
        <Route path="/movie-project/tv/:tvid" element={<TvDetailsPage />} />
        <Route
          path="/movie-project/tv/:tvid/reviews"
          element={<ReviewsPage type="tv" />}
        />
        <Route path="/movie-project/people" element={<PeoplePage />} />
        <Route
          path="/movie-project/person/:personId"
          element={<PersonDetailsPage />}
        />
        <Route
          path="/movie-project/search/:searchType"
          element={<SearchPage />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
