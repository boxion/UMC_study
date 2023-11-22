import React, { useState } from "react";
import { MovieContainer, MovieDetail, MovieInfo } from './Movie.style.jsx';

const IMG_BASE_URL = "https://www.themoviedb.org/t/p/w1280/";

function Movie({ title, poster_path, vote_average, overview }) {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <MovieContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
      <img src={IMG_BASE_URL + poster_path} alt="영화포스터" />
      <MovieInfo>
        <h4>{title}</h4>
        <span>{vote_average}</span>
      {isHovered && (
      <MovieDetail>
        <h4>{title}</h4>
        <p>{overview}</p>
      </MovieDetail>
       )} 
       </MovieInfo>
    </MovieContainer>
  );
}

export default Movie;
