import React, { useEffect, useState } from "react";
import LoadingCard from "../components/LoadingCard";
import MainCard from "../components/MainCard";
import Pagination from "../components/Pagination";
import Zoom from "react-reveal/Zoom";
import "../css/peoplePage.css";
import PersonCard from "../components/PersonCard";

function PeoplePage() {
  const [data, setData] = useState([]);
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
      `https://api.themoviedb.org/3/person/popular?language=en-US&page=${page}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, [page]);
  return (
    <div className="people-page container">
      <h2>Popular People</h2>
      <div className="people-container">
        {data.total_results > 0 ? (
          data.results.map((item) => (
            <Zoom key={item.id}>
              <PersonCard
                url={`/person/${item.id}`}
                img={`https://image.tmdb.org/t/p/w200/${item.profile_path}`}
                Name={item.original_name}
                otherName={item.known_for.map(
                  (item) => `${item.title || item.name} ,`
                )}
                gender={
                  item.gender === 0
                    ? "Not set / not specified"
                    : item.gender === 1
                    ? "Female"
                    : item.gender === 2
                    ? "Male"
                    : "Non-binary"
                }
              />
            </Zoom>
          ))
        ) : (
          <LoadingCard />
        )}
      </div>
      <Pagination pageCount={data.total_pages} page={page} setPage={setPage} />
    </div>
  );
}

export default PeoplePage;
