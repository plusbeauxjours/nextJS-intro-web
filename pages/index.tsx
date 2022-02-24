import type { NextPage } from "next";
import { useQuery } from "react-query";

import styled from "styled-components";
import Seo from "../components/Seo";
import { getMovies, IGetMoviesResult } from "./api/api";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 20px;
  gap: 20px;
`;

const MovieImg = styled.img`
  max-width: 100%;
  border-radius: 12px;
  transition: transform 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  &:hover {
    transform: scale(1.05) translateY(-10px);
  }
`;

const MovieText = styled.h4`
  font-size: 18px;
  text-align: center;
`;

const Home: NextPage = () => {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );

  return (
    <Container>
      <Seo title="Home" />
      {isLoading && <h4>Loading...</h4>}
      {data?.results?.map((movie) => (
        <div className="movie" key={movie.id}>
          <MovieImg
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
          <MovieText>{movie.title}</MovieText>
        </div>
      ))}
    </Container>
  );
};

export default Home;
