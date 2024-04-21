import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieOverview from "../components/MovieOverview";
import Review from "../components/Review";
import Wrapper from "../components/Wrapper";

function MovieDetailsPage() {
  const { movieId } = useParams(),
    apiDetails = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    apiCast = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    apiRecom = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?language=en-US&page=1`;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [movieId]);
  return (
    <>
      <MovieOverview getApi={apiDetails} />
      <Wrapper
        type="cast"
        title="Top Billed Cast"
        selectedtime={false}
        initialApi={apiCast}
      />
      <Review type="movie" selectId={movieId} />
      <Wrapper
        type="movie"
        title="Recommendation"
        selectedtime={false}
        initialApi={apiRecom}
      />
    </>
  );
}

export default MovieDetailsPage;
