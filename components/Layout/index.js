import Navigation from "../Navigation";
import styled from "styled-components";
import { useSession } from "next-auth/react";

export default function Layout({ children, theme }) {
  const { status } = useSession();

  return (
    <>
      <StyledMain status={status}>{children}</StyledMain>
      <Navigation theme={theme} />
    </>
  );
}

const StyledMain = styled.main`
  padding-top: ${({ status }) =>
    status === "authenticated" ? "9rem" : "6rem"};
`;
