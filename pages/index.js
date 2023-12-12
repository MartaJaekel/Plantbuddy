import PlantCard from "@/components/Card";
import styled from "styled-components";

export default function HomePage() {
  return (
    <>
      <StyledHeader>PlantBuddy</StyledHeader>
      <PlantCard />
    </>
  );
}

const StyledHeader = styled.h1`
  text-align: center;
  color: var(--color-green);
  font-family: Newsreader;
  font-size: 3rem;
`;
