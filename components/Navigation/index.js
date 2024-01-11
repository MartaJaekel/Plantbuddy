import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function Navigation({ theme }) {
  const router = useRouter();

  const handleHomeClick = () => {
    if (router.pathname === "/") {
      router.reload();
    } else {
      router.push("/");
    }
  };

  const imageSrc = () => {
    if (theme === "light") {
      if (router.pathname === "/") {
        return "/assets/HomeActive.svg";
      } else {
        return "/assets/HomeInactive.svg";
      }
    } else {
      if (router.pathname === "/") {
        return "/assets/HomeDarkmode.svg";
      } else {
        return "/assets/HomeActive.svg";
      }
    }
  };

  return (
    <StyledNav>
      <StyledList>
        <li>
          <Link href="/" onClick={handleHomeClick}>
            <Image
              src={
                theme === "light"
                  ? router.pathname === "/"
                    ? "/assets/HomeActive.svg"
                    : "/assets/HomeInactive.svg"
                  : router.pathname === "/"
                  ? "/assets/HomeDarkmode.svg"
                  : "/assets/HomeActive.svg"
              }
              alt="Home Icon"
              width={40}
              height={40}
            />
          </Link>
        </li>
        <li>
          <Link href="/favorites">
            <Image
              src={
                router.pathname === "/favorites"
                  ? "/assets/HeartActive.svg"
                  : "/assets/HeartInactive.svg"
              }
              alt="Favorite Icon"
              width={40}
              height={40}
            />
          </Link>
        </li>
        <li>
          <Link href="/categories">
            <Image
              src={
                router.pathname === "/categories"
                  ? "/assets/CategoryActive.svg"
                  : "/assets/CategoryInactive.svg"
              }
              alt="Categories Icon"
              width={40}
              height={40}
            />
          </Link>
        </li>
        <li>
          <Link href="/preferences">
            <Image
              src={
                router.pathname === "/preferences"
                  ? "/assets/PreferenceActive.svg"
                  : "/assets/PreferenceInactive.svg"
              }
              alt="Preference Icon"
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
  background-color: ${({ theme }) => theme.navigation};
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-content: center;
`;
