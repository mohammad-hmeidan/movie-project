import React, { useState } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  let [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="landing container">
      <h1>Welcome.</h1>
      <p>Millions of movies, TV shows and people to discover. Explore now.</p>
      <div className="search">
        <input
          type="search"
          id="search"
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="search for a movie,tv show,person..."
        />
        <Link to={`/search/multi?query=${encodeURIComponent(searchQuery)}`}>
          search
        </Link>
      </div>
    </div>
  );
};

export default Landing;
