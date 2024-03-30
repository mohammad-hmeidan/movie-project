import React, { useState, useEffect } from "react";

function Filters({
  type,
  language,
  setLanguage,
  setreleaseDateLte,
  setReleaseDateGte,
  setGenres,
}) {
  let hiddenAccordin = (e) => {
    document.querySelector(e).classList.toggle("hidden");
  };

  // change language to new language
  const [langNow, setLangNow] = useState("English");
  let changeLanguage = (lang, langName) => {
    setLanguage({ language: lang, originalLang: langName });
    setLangNow(langName);
  };
  // change Date
  let changeDate = () => {
    let dategte = document.getElementById("release_date_gte").value;
    let datelte = document.getElementById("release_date_lte").value;
    setreleaseDateLte(datelte);
    setReleaseDateGte(dategte);
  };
  // get genres name and ids
  let [data, setData] = useState({ genres: [{ id: 0 }] });
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
      `https://api.themoviedb.org/3/genre/${type}/list?language=en`,
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, []);
  // change genres
  let changegenres = (genresId, genresName) => {
    setGenres({ genresId: genresId, genresName: genresName });
  };
  return (
    <div className="according filters">
      <div onClick={() => hiddenAccordin(".according.filters")}>
        <h2>Filters</h2>
        <span>{">"}</span>
      </div>
      <div className="according-item hidden">
        <div>
          <p>language</p>
          <div className="dropdown" style={{ padding: "10px 0" }}>
            <button
              onClick={() =>
                hiddenAccordin(".filters .dropdown .dropdown-menu")
              }
            >
              {language.originalLang} <span>{">"}</span>
            </button>
            <ul className="dropdown-menu hidden">
              <li onClick={() => changeLanguage("en", "English")}>
                <div>English</div>
              </li>
              <li onClick={() => changeLanguage("de", "German")}>
                <div>German</div>
              </li>
              <li onClick={() => changeLanguage("ar", "Arabic")}>
                <div>Arabic</div>
              </li>
              <li onClick={() => changeLanguage("fr", "French")}>
                <div>French</div>
              </li>
              <li onClick={() => changeLanguage("zh", "Chinese")}>
                <div>Chinese</div>
              </li>
              <li onClick={() => changeLanguage("ja", "Japanese")}>
                <div>Japanese</div>
              </li>
              <li onClick={() => changeLanguage("ko", "Korean")}>
                <div>Korean</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="date">
          <p>Release Dates </p>
          <div>
            <p>From</p>
            <input type="date" id="release_date_gte" />
          </div>
          <div>
            <p>To</p>
            <input type="date" id="release_date_lte" />
          </div>
          <button onClick={() => changeDate()}>ِAplky Date</button>
        </div>
        <div className="genres">
          <p>genres</p>
          <div>
            {data.genres.map((item) => {
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    changegenres(item.id, item.name);
                  }}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
