import { signIn } from "next-auth/react";
import styled from "styled-components";

export default function Login() {  
  return (
    <>
      <StyledText>To use this function you must be logged in</StyledText>
      <StyledButton onClick={() => signIn()}>Sign in</StyledButton>
    </>
  );
}

const StyledText = styled.p`
  text-align: center;
  line-height: 1;
  padding: 1rem;
  color: ${({ theme }) => theme.primaryGreen};
`;


const StyledButton = styled.button`
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.button};
  border: none;
  display: block;
  margin: 0 auto;
  width: 9rem;
  font-weight: 600;
  border-radius: 8px;
  padding: 0.6rem 0.4rem;
  cursor: pointer;
`;
