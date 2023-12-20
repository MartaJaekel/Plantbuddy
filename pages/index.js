import PlantList from "@/components/PlantList";
import React, { useState } from "react";
import FilterForm from "@/components/FilterForm";
import SearchField from "@/components/SearchField";
import styled from "styled-components";

export default function HomePage({ onToggleFavorite, favorites, plants }) {
  const [search, setSearch] = useState("");
  const [filteredPlants, setFilteredPlants] = useState(plants);

  function handleFilterUpdate(newFilteredPlants) {
    setFilteredPlants(newFilteredPlants);
  }

let counterMessage = '';

if (filteredPlants.length === plants.length) {
  counterMessage = '';
} else if (filteredPlants.length > 0) {
  counterMessage = `Showing ${filteredPlants.length} of ${plants.length} plants:`;
}

// const searchResults = plants.filter(plant => plant.commonName.includes(search));
// const numSearchResults = searchResults.length;

// let counterMessage = '';

// if (numSearchResults.length === plants.length) {
//   counterMessage = '';
// } else if (numSearchResults.length > 0) {
//   counterMessage = `Showing ${numSearchResults.length} of ${plants.length} plants.`;
// }


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
