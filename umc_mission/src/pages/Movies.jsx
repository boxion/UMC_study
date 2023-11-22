import React, { useState } from "react";
import styled from "styled-components";
import { movies } from "../util/movieDummy";
import { useNavigate } from "react-router-dom";

const IMG_BASE_URL = "https://www.themoviedb.org/t/p/w1280/";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1vw;
  background: #000000;
  padding-top: 2vw;
`;

const MovieContainer = styled.div`
  margin-top: 10px;
  flex: 0 0 12.5%;
  box-sizing: border-box;
  position: relative;
  background-color: #4b4975;
  border-radius: 3px;

  &:hover {
    .MovieDetail {
      display: block;
    }
  }

  img {
    width: 100%;
    height: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const MovieInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  color: white;
  justify-content: space-between;
  margin: 1vw 1vw 1vw 1vw;

  h4,
  span {
    margin: 0;
    color: #ffffff;
  }

  span {
    font-weight: bold;
  }
`;

const MovieDetail = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0.8;
  color: white;
  padding: 5px;
  font-size: 15px;
  h4 {
    margin: 1vw 1vw 1vw 1vw;
    color: #ffffff;
  }

  p {
    margin: 1vw 1vw 1vw 1vw;
    color: #ffffff;
    font-size: 12px;
  }
`;

const Movies = () => {
  const [isHovered, setIsHovered] = useState(false);

  // useNavigate
  const navigate = useNavigate();

  const handleMovieClick = (movie) => {
    navigate(`/movie/${movie.title}`, { state: movie });
  };

  return (
    <Container>
      {movies.results.map((item) => (
        <MovieContainer
          key={item.id}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => handleMovieClick(movies)}
        >
          <img src={IMG_BASE_URL + item.poster_path} alt="영화포스터" />
          <MovieInfo>
            <h4>{item.title}</h4>
            <span>{item.vote_average}</span>
            {isHovered && (
              <MovieDetail style={{ opacity: isHovered ? 1 : 0 }}>
                <h4>{item.title}</h4>
                <p>{item.overview}</p>
              </MovieDetail>
            )}
          </MovieInfo>
        </MovieContainer>
      ))}
    </Container>
  );
};

export default Movies;
