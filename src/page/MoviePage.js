import React, { useEffect, useState } from "react";
import Filters from "../components/Filters";
import LoadingCard from "../components/LoadingCard";
import MainCard from "../components/MainCard";
import Pagination from "../components/Pagination";
import Sort from "../components/Sort";

import Zoom from "react-reveal/Zoom";

import "../css/moviePage.css";

function MoviePage({ type, urlvar }) {
  const [data, setData] = useState({});
  const [releaseDateGte, setReleaseDateGte] = useState("");
  const [releaseDateLte, setreleaseDateLte] = useState("");
  const [sortBy, setSortBy] = useState({
    sort: "popularity.desc",
    sortName: "Popularity Descending",
  });
  const [language, setLanguage] = useState({
    language: "en",
    originalLang: "English",
  });
  const [genres, setGenres] = useState({ genresId: 80, genresName: "Crime" });
  const [page, setPage] = useState(1);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGE2ZDRhZGMxMmIyZjhiYmE3OWI3OWVjODIyZWRjZCIsInN1YiI6IjY0NjhkMTBiMzNhMzc2MDEzYjNkZjk1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F60GxDSi1b41yQ_1yFJpzFT-C_h58Kq6kVW_ItU7Oec",
      },
    };
    fetch(
      `https://api.themoviedb.org/3/discover/${type}?language=en-US&page=${page}&sort_by=${
        sortBy.sort
      }&with_original_language=${language.language}&${
        type === "movie" ? "release_date.gte" : "first_air_date.gte"
      }=${releaseDateGte}&${
        type === "movie" ? "release_date.lte" : "first_air_date.lte"
      }=${releaseDateLte}&with_genres=${genres.genresId}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, [
    page,
    language.language,
    sortBy.sort,
    releaseDateGte,
    releaseDateLte,
    genres.genresId,
    type,
    urlvar,
  ]);
  useEffect(() => {
    setPage(1);
  }, [
    language.language,
    sortBy.sort,
    releaseDateGte,
    releaseDateLte,
    genres.genresId,
    type,
    urlvar,
  ]);
  return (
    <div className="movie-page container">
      <div>
        <h1>{urlvar + " " + type}</h1>
        <Sort type={type} sortBy={sortBy} setSortBy={setSortBy} />
        <Filters
          type={type}
          setLanguage={setLanguage}
          language={language}
          setreleaseDateLte={setreleaseDateLte}
          setReleaseDateGte={setReleaseDateGte}
          setGenres={setGenres}
        />
      </div>
      <div>
        <div className="search-controller">
          <div className="filter-item">page: {page}</div>
          <div className="filter-item">Language: {language.originalLang}</div>
          <div className="filter-item">{sortBy.sortName}</div>
          <div className="filter-item">From: {releaseDateGte}</div>
          <div className="filter-item">To: {releaseDateLte}</div>
          <div className="filter-item">Genres: {genres.genresName}</div>
        </div>
        <div className="container-box">
          {data.total_results > 0 ? (
            data.results.map((item) => (
              <Zoom key={item.id}>
                <MainCard
                  circularActive={true}
                  url={
                    type === "movie"
                      ? `/movie-project/movie/${item.id}`
                      : `/movie-project/tv/${item.id}`
                  }
                  img={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                  title={item.title || item.name}
                  date={item.release_date || item.first_air_date}
                  vote_average={Number(item.vote_average.toFixed(1)) * 10}
                />
              </Zoom>
            ))
          ) : (
            <LoadingCard count={20} />
          )}
        </div>
        <Pagination
          pageCount={data.total_pages}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}

export default MoviePage;
