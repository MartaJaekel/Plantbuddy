import Link from "next/link";
import Image from "next/image";
import HomeActive from "@/assets/HomeActive.svg?url";
import HomeInactive from "@/assets/HomeInactive.svg?url";
import HeartActive from "@/assets/HeartActive.svg?url";
import HeartInactive from "@/assets/HeartInactive.svg?url";
import styled from "styled-components";
import { useRouter } from "next/router";


export default function Navigation() {
  const router = useRouter();

  const handleHomeClick = () => {
    if (router.pathname === "/") {
      router.reload();
    } else {
      router.push("/");
    }
  };

  return (
    <StyledNav>
      <StyledList>
        <li>
          <Link href="/" onClick={handleHomeClick}>
            <Image
              src={router.pathname === "/" ? HomeActive : HomeInactive}
              alt="Home Icon"
              width={40}
              height={40}
            />
          </Link>
        </li>
        <li>
          <Link href="/favorites">
            <Image
              src={router.pathname === "/favorites" ? HeartActive : HeartInactive}
              alt="Favorite Icon"
              width={40}
              height={40}
            />
          </Link>
        </li>
      </StyledList>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  z-index: 2;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: var(--color-beige);
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-content: center;
`;
