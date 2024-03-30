import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import MainCard from "../components/MainCard";
import Pagination from "../components/Pagination";

import Zoom from "react-reveal/Zoom";

import "../css/searchPage.css";

function SearchPage() {
  // get query to search
  const location = useLocation();
  const useQuery = () => {
    return new URLSearchParams(location.search);
  };
  const query = useQuery();
  let [searchQuery, setSearchQuery] = useState(query.get("query"));
  // get type search multi,movie,tv,people
  const { searchType } = useParams();

  const [data, setData] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [searchType, searchQuery]);
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
      `https://api.themoviedb.org/3/search/${searchType}?query=${encodeURIComponent(
        searchQuery
      )}&language=en-US&page=${page}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, [searchType, searchQuery, page]);
  let changeQuery = (e) => {
    e.target.addEventListener("keydown", (e1) => {
      if (e1.key === "Enter") {
        setSearchQuery(e.target.value);
        // change query in url
        window.history.pushState(
          {},
          "",
          `/search/${searchType}?query=${e.target.value}`
        );
      }
    });
  };
  return (
    <div className="search-page container">
      <div className="search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="search"
          placeholder="Search for a movie, person, tv"
          onChange={(e) => changeQuery(e)}
        />
      </div>
      <div className="movie-page container container-search">
        <div className="sidebar-search">
          <h2>Search Results</h2>
          <ul>
            <li>
              <Link
                className={searchType === "multi" ? "active" : ""}
                to={`/search/multi?query=${encodeURIComponent(searchQuery)}`}
              >
                Multi
              </Link>
            </li>
            <li>
              <Link
                className={searchType === "movie" ? "active" : ""}
                to={`/search/movie?query=${encodeURIComponent(searchQuery)}`}
              >
                Movie
              </Link>
            </li>
            <li>
              <Link
                className={searchType === "tv" ? "active" : ""}
                to={`/search/tv?query=${encodeURIComponent(searchQuery)}`}
              >
                TV Show
              </Link>
            </li>
            <li>
              <Link
                className={searchType === "person" && "active"}
                to={`/search/person?query=${encodeURIComponent(searchQuery)}`}
              >
                People
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="container-box">
            {data.page > 0 &&
              data.results.map((item) => (
                <Zoom key={Math.random() * item.id}>
                  <MainCard
                    url={`/${
                      searchType !== "multi" ? searchType : item.media_type
                    }/${item.id}`}
                    circularActive={item.vote_average ? true : false}
                    vote_average={
                      item.vote_average
                        ? Number(item.vote_average.toFixed(1)) * 10
                        : ""
                    }
                    title={item.name || item.title}
                    img={`https://image.tmdb.org/t/p/w200${
                      item.poster_path || item.profile_path
                    }`}
                    date={
                      item.first_air_date ||
                      item.release_date ||
                      (item.gender === 1
                        ? "female"
                        : item.gender === 2
                        ? "Male"
                        : "Not selected")
                    }
                  />
                </Zoom>
              ))}
          </div>
          {data.total_results > 0 ? (
            <Pagination
              pageCount={data.total_pages}
              page={page}
              setPage={setPage}
            />
          ) : (
            <h2>No results found</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
