import PlantList from "@/components/PlantList";
import React, { useEffect, useState } from "react";
import FilterForm from "@/components/FilterForm";
import SearchField from "@/components/SearchField";
import styled from "styled-components";

export default function HomePage({ onToggleFavorite, favorites, plants }) {
  const [search, setSearch] = useState("");
  const [filteredPlants, setFilteredPlants] = useState(plants);
  const [counterMessage, setCounterMessage] = useState('');

  function handleFilterUpdate(newFilteredPlants) {
    setFilteredPlants(newFilteredPlants);
  }

const searchResult = plants.filter((plant) => {
  return plant.commonName.toLowerCase().startsWith(search.toLowerCase());
});

useEffect(() => {
  if (searchResult.length > 0 && searchResult.length < plants.length) {
    setCounterMessage(
      `Showing ${searchResult.length} of ${plants.length} plants:`
    );
  } else if (filteredPlants.length === plants.length && searchResult.length === plants.length) {
    setCounterMessage('');
  }
}, [searchResult]);

useEffect(() => {
  if (filteredPlants.length > 0 && filteredPlants.length < plants.length) {
    setCounterMessage(
      `Showing ${filteredPlants.length} of ${plants.length} plants:`
    );
  } else if (filteredPlants.length === plants.length && searchResult.length === plants.length) {
    setCounterMessage('');
  }
}, [filteredPlants]);

  return (
    <>
      <StyledHeader>PlantBuddy</StyledHeader>
      <main>
        <SearchField onChange={setSearch} />
        <FilterForm onFilterUpdate={handleFilterUpdate} plants={plants} />
        <CounterMessage>{counterMessage}</CounterMessage>
        <PlantList
          onToggleFavorite={onToggleFavorite}
          favorites={favorites}
          plants={plants}
          search={search}
          plantsToDisplay={filteredPlants}
          searchResult={searchResult}
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

const CounterMessage = styled.p`
  margin: 1rem auto;
  max-width: 19rem;
  color: var(--color-green);
  font-weight: 600;
`;
