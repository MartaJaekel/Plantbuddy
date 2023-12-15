import styled from "styled-components";
import PlantCard from "../Card";
import { useEffect, useState } from "react";

export default function PlantList({
  plants: plantsData,
  favorites,
  onToggleFavorite,
  search,
  plantsToDisplay,
}) {
  const [plants, setPlants] = useState([...plantsData]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);

    const searchResult = plantsData.filter((plant) => {
      return plant.commonName.toLowerCase().startsWith(search.toLowerCase());
    });

    if (search.length > 0 && searchResult.length === 0) {
      setError(true);
    }

    setPlants(searchResult);
  }, [search]);

  if (error) {
    return (
      <ErrorMessageContainer>
        <ErrorMessage>
          sorry we could not find <br /> anything with the name
          <br /> {search}
        </ErrorMessage>
      </ErrorMessageContainer>
    );
  }

  if (plantsToDisplay.length === 0) {
    return (
      <NoMatches>
        Apologies, but we couldn&apos;t find any plants in our database that
        align with your filter criteria.
      </NoMatches>
    );
  }

  return (
    <>
      <StyledPlantList>
        {search.length === 0
          ? plantsToDisplay.map((plant) => (
              <PlantCard
                key={plant.id}
                plant={plant}
                onToggleFavorite={onToggleFavorite}
                favorites={favorites}
              />
            ))
          : plants.map((plant) => (
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const ErrorMessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

const ErrorMessage = styled.p`
  color: black;
  font-weight: bold;
  margin-top: 80px;
`;

const NoMatches = styled.p`
  text-align: center;
  margin: 1rem auto;
  color: red;
  max-width: 19rem;
`;
