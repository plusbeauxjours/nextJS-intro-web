import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

interface IActive {
  isActive: boolean;
}

const Img = styled.img`
  max-width: 100px;
  margin-bottom: 5px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
`;

const A = styled.a<IActive>`
  font-weight: 600;
  font-size: 18px;
  color: ${(props) => (props.isActive ? "tomato" : "#000")};
`;

export default function NavBar() {
  const router = useRouter();
  return (
    <Nav>
      <Img src="/vercel.svg" />
      <Row>
        <Link href="/">
          <A isActive={router.pathname === "/"}>Home</A>
        </Link>
        <Link href="/about">
          <A isActive={router.pathname === "/about"}>About</A>
        </Link>
      </Row>
    </Nav>
  );
}
