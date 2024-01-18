import Navigation from "../Navigation";
import styled from "styled-components";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Layout({ children, theme }) {
  const { status } = useSession();
  const router = useRouter();

  return (
    <>
      <StyledMain router={router} status={status}>
        {children}
      </StyledMain>
      <Navigation theme={theme} />
    </>
  );
}

const StyledMain = styled.main`
  padding-top: ${({ router, status }) =>
    router.pathname === "/plants/[_id]" ||
    router.pathname === "/categories/[slug]" ||
    router.pathname === "/journal/[id]"
      ? "0"
      : status === "authenticated"
      ? "9rem"
      : "6rem"};
  padding-bottom: ${({ router }) =>
    router.pathname === "/plants/[_id]" ||
    router.pathname === "/categories/[slug]"
      ? "0"
      : "6rem"};
`;
