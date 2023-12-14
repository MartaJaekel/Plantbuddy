import Link from "next/link";
import Image from "next/image";
import heartOutlineURL from "@/assets/HeartIcon_Outline.svg?url";
import homeURL from "@/assets/HomeIcon.svg?url";
import styled from "styled-components";

export default function Navigation() {
  return (
    <StyledNav>
      <Link href="/">
        <Image src={homeURL} alt="Home Icon" width={40} height={40} />
      </Link>
      <Link href="/favorites">
        <Image src={heartOutlineURL} alt="Favorite Icon" width={40} height={40} />
      </Link>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: var(--color-beige);
  display: flex;
  justify-content: space-around;
  align-content: center;
  padding: 0.5rem;
`;
