import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Nav = styled.nav``;

export default function NavBar() {
  const router = useRouter();
  return (
    <Nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
        }
        .active {
          color: green;
        }
      `}</style>
    </Nav>
  );
}
