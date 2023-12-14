import Link from "next/link";
import Image from "next/image";
import Favorites from "@/assets/HeartIconNav.svg?url";
import Home from "@/assets/HomeIconNav.svg?url";
import styled from "styled-components";

export default function Navigation() {
  return (
    <StyledNav>
      <StyledList>
        <li>
          <Link href="/">
            <Image src={Home} alt="Home Icon" width={40} height={40} />
          </Link>
        </li>
        <li>
          <Link href="/favorites">
            <Image src={Favorites} alt="Favorite Icon" width={40} height={40} />
          </Link>
        </li>
      </StyledList>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: var(--color-beige);
`;

const StyledList = styled.ul`
display: flex;
justify-content: space-around;
align-content: center;
`