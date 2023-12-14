import PlantList from "@/components/PlantList";
import styled from "styled-components";

export default function HomePage({ onToggleFavorite, favorites, plants }) {
  return (
    <>
      <StyledHeader>PlantBuddy</StyledHeader>
      <main>
        <PlantList
          onToggleFavorite={onToggleFavorite}
          favorites={favorites}
          plants={plants}
        />
      </main>
    </>
  );
}

const StyledHeader = styled.h1`
  z-index: 2;
  position: fixed;
  top: 0;
  background-color: white;
  width: 100%;
  text-align: center;
  color: var(--color-green);
  font-family: serif;
  font-size: 3rem;
  margin: 0;
  padding: 1rem;
`;
