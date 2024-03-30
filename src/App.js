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
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/movie/popular"
          element={<MoviePage type="movie" urlvar="popular" />}
        />
        <Route path="/movie/:movieId" element={<MovieDetailsPage />} />
        <Route
          path="/movie/:movieId/reviews"
          element={<ReviewsPage type="movie" />}
        />
        <Route
          path="/tv/popular"
          element={<MoviePage type="tv" urlvar="popular" />}
        />
        <Route path="/tv/:tvid" element={<TvDetailsPage />} />
        <Route path="/tv/:tvid/reviews" element={<ReviewsPage type="tv" />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/person/:personId" element={<PersonDetailsPage />} />
        <Route path="/search/:searchType" element={<SearchPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
