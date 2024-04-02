import React from "react";

function Sort({ type, sortBy, setSortBy }) {
  let hidden = (e) => {
    document.querySelector(e).classList.toggle("hidden");
  };
  let changeSort = (sort, sortName) => {
    setSortBy({ sort: sort, sortName: sortName });
  };
  return (
    <div className="according sort">
      <div onClick={() => hidden(".according.sort ")}>
        <h2>Sort</h2>
        <span>{">"}</span>
      </div>
      <div className="according-item hidden">
        <p>sort results by</p>
        <div className="dropdown">
          <button onClick={() => hidden(".sort .dropdown .dropdown-menu")}>
            {sortBy.sortName} <span>{">"}</span>
          </button>
          <ul className="dropdown-menu hidden">
            <li>
              <div
                onClick={() =>
                  changeSort("popularity.desc", "popularity Descending")
                }
              >
                popularity Descending
              </div>
            </li>
            <li>
              <div
                onClick={() =>
                  changeSort("popularity.asc", "Popularity ascending")
                }
              >
                Popularity ascending
              </div>
            </li>
            <li>
              <div
                onClick={() =>
                  changeSort("vote_average.desc", "Rating Descending")
                }
              >
                Rating Descending
              </div>
            </li>
            <li>
              <div
                onClick={() =>
                  changeSort("vote_average.asc", "Rating ascending")
                }
              >
                Rating ascending
              </div>
            </li>
            <li>
              <div
                onClick={() =>
                  changeSort(
                    type === "movie"
                      ? "primary_release_date.desc"
                      : "first_air_date.desc",
                    type === "movie"
                      ? "Release Data Descending"
                      : "First air data Descending"
                  )
                }
              >
                {type === "movie"
                  ? "Release Data Descending"
                  : "First air data Descending"}
              </div>
            </li>
            <li>
              <div
                onClick={() =>
                  changeSort(
                    type === "movie"
                      ? "primary_release_date.asc"
                      : "first_air_date.asc",
                    type === "movie"
                      ? "Release Data ascending"
                      : "First air data ascending"
                  )
                }
              >
                {type === "movie"
                  ? "Release Data ascending"
                  : "First air data ascending"}
              </div>
            </li>
            <li>
              <div
                onClick={() =>
                  changeSort(
                    type === "movie" ? "title.desc" : "name.desc",
                    type === "movie" ? "Title (A-Z)" : "Name (A-Z)"
                  )
                }
              >
                {type === "movie" ? "Title (A-Z)" : "Name (A-Z)"}
              </div>
            </li>
            <li>
              <div
                onClick={() =>
                  changeSort(
                    type === "movie" ? "title.asc" : "name.asc",
                    type === "movie" ? "Title (Z-A)" : "Name (Z-A)"
                  )
                }
              >
                {type === "movie" ? "Title (Z-A)" : "Name (Z-A)"}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sort;
