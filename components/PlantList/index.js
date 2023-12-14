import styled from "styled-components";
import PlantCard from "../Card";

export default function PlantList({ plants, favorites, onToggleFavorite }) {
    console.log(`plant list ${plants}`);
    return (
    <>
      <StyledPlantList>
        {plants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            onToggleFavorite={onToggleFavorite}
            favorites={favorites}
          />
        ))}
      </StyledPlantList>
    </>
  );
}

const StyledPlantList = styled.ul`
  margin-top: 6rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;
