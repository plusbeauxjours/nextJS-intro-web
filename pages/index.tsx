import Link from "next/link";
import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

import styled from "styled-components";
import Seo from "../components/Seo";

interface IProps {
  results: any;
}

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

const Movie = styled.div`
  cursor: pointer;
`;

const MovieText = styled.h4`
  font-size: 18px;
  text-align: center;
`;

const Home: NextPage<IProps> = ({ results }) => {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <Container>
      <Seo title="Home" />
      {results?.map((movie) => (
        <Movie
          onClick={() => onClick(movie.id, movie.original_title)}
          key={movie.id}
        >
          <MovieImg
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          />
          <MovieText>
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <a>{movie.title}</a>
            </Link>
          </MovieText>
        </Movie>
      ))}
    </Container>
  );
};

export default Home;

// 서버에서 실행된다.
export async function getServerSideProps({}: GetServerSideProps) {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}
