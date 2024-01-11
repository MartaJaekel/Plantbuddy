import styled from "styled-components";

export const StyledHeadline = styled.h1`
  z-index: 2;
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.background};
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.primaryGreen};
  font-family: serif;
  font-size: 3rem;
  margin: 0;
  padding: 1rem;
`;
