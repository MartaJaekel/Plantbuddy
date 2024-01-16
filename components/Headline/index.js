import styled from "styled-components";
import { useSession } from "next-auth/react";
import Logout from "../Logout";

export default function Headline() {
  const { status } = useSession();

  if (status === "authenticated") {
    return (
      <>
        <Logout />
        <StyledHeadlineLogout>PlantBuddy</StyledHeadlineLogout>
      </>
    );
  }

  return <StyledHeadlineLogin>PlantBuddy</StyledHeadlineLogin>;
}

const StyledHeadlineLogout = styled.h1`
  z-index: 2;
  position: fixed;
  top: 3rem;
  background-color: ${({ theme }) => theme.background};
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.primaryGreen};
  font-family: serif;
  font-size: 3rem;
  margin: 0;
  padding: 1rem;
`;

const StyledHeadlineLogin = styled(StyledHeadlineLogout)`
  top: 0;
`;
