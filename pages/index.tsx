import type { NextPage } from "next";
import styled from "styled-components";
import Seo from "../components/Seo";

const Container = styled.div`
  color: tomato; ;
`;

const Home: NextPage = () => {
  return (
    <>
      <Seo title="Home" />
      <Container>Home</Container>
    </>
  );
};

export default Home;
