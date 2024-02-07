import Link from "next/link";
import styled from "styled-components";

const List = styled.nav`
  background: black;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  bottom: 0;
  width: 100%;
  height: 100 px;
  color: #d1f90c;
  list-style-type: none;

}
`;

const NavLink = styled.li`
  list-style-type: none;
  justify-content: space-between;
`;

export default function Navigation() {
  return (
    <nav>
      <List role="list">
        <li>
          <Link href="/art-pieces"> Pieces</Link>
        </li>
        <li>
          <Link href="/">Spotlight</Link>
        </li>
        <li>
          <Link href="/favorites">Favorites</Link>
        </li>
      </List>
    </nav>
  );
}
