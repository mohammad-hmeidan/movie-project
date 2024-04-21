import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "../components/Review";
import MovieOverview from "../components/MovieOverview";
import Wrapper from "../components/Wrapper";

function TvDetailsPage() {
  const { tvid } = useParams(),
    apiDeails = `https://api.themoviedb.org/3/tv/${tvid}?language=en-US`,
    apiCast = `https://api.themoviedb.org/3/tv/${tvid}/credits?language=en-US`,
    apiRecom = `https://api.themoviedb.org/3/tv/${tvid}/recommendations?language=en-US&page=1`;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [tvid]);
  return (
    <>
      <MovieOverview getApi={apiDeails} />
      <Wrapper
        type="cast"
        title="Top Billed Cast"
        selectedtime={false}
        initialApi={apiCast}
      />
      <Review type="tv" selectId={tvid} />
      <Wrapper
        type="tv"
        title="Recommendation"
        selectedtime={false}
        initialApi={apiRecom}
      />
    </>
  );
}

export default TvDetailsPage;
