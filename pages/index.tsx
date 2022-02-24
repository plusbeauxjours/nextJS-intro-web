import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import styled from "styled-components";
import Seo from "../components/Seo";
import { getMovies, IGetMoviesResult } from "./api/api";

const Container = styled.div`
  color: tomato; ;
`;

const API_KEY = "01da2a336a604956c260900d1835847f";

const Home: NextPage = () => {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );

  return (
    <>
      <Seo title="Home" />
      {isLoading && <h4>Loading...</h4>}
      {data?.results?.map((movie) => (
        <Container key={movie.id}>
          <h4>{movie.title}</h4>
        </Container>
      ))}
    </>
  );
};

export default Home;
