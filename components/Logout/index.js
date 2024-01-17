import { useSession, signOut } from "next-auth/react";
import styled from "styled-components";

export default function Logout() {
  const { data: session } = useSession();

  const fullName = session.user.name;
  const firstName = fullName.split(" ")[0];

  if (session) {
    return (
        <StyledSection>
          <StyledText>Hello, {firstName} </StyledText>
          <StyledButton onClick={() => signOut()}>Sign out</StyledButton>
        </StyledSection>
    );
  }
}

const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.primaryGreen};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  height: 3rem;
`;

const StyledButton = styled.button`
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.primaryGreen};
  text-decoration: underline;
  border: none;
  display: block;
  font-weight: 600;
  border-radius: 8px;
  padding: 0.6rem 1rem;
  cursor: pointer;
`;

const StyledText = styled.p`
  text-align: center;
  line-height: 1;
  padding: 1rem;
  color: ${({ theme }) => theme.white};
`;
