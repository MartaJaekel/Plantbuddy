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

  return (
    <>
      <StyledHeader>PlantBuddy</StyledHeader>
      <main>
        <SearchField onChange={setSearch} />
        <FilterForm onFilterUpdate={handleFilterUpdate} plants={plants} />
        <p>Showing {filteredPlants.length} of {plants.length} plants.</p>
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
