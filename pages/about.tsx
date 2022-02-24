import type { NextPage } from "next";
import styled from "styled-components";
import Seo from "../components/Seo";

const Container = styled.div`
  color: tomato; ;
`;

const About: NextPage = () => {
  return (
    <>
      <Seo title="About" />
      <Container>About</Container>
    </>
  );
};

export default About;
