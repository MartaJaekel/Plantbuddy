import PlantList from "@/components/PlantList";
import React, { useState } from "react";
import FilterForm from "@/components/FilterForm";
import SearchField from "@/components/SearchField";
import styled from "styled-components";
import { plants } from "@/lib/data";
import SortPlants from "@/components/SortPlants";

export default function HomePage({ onToggleFavorite, favorites, plants }) {
  const [search, setSearch] = useState("");
  const [filteredPlants, setFilteredPlants] = useState(plants);
  const [sortPlants, setSortPlants] = useState(null); 

  function handleFilterUpdate(newFilteredPlants) {
    setFilteredPlants(newFilteredPlants);
  }
  const handleSortUpdate = (newSortedPlants) => {
    setSortPlants(newSortedPlants);
  };

  return (
    <>
      <StyledHeader>PlantBuddy</StyledHeader>
      <main>
        <SearchField onChange={setSearch} />
        <SortPlants onSortUpdate={handleSortUpdate} />
        <FilterForm onFilterUpdate={handleFilterUpdate} plants={plants} />

        <PlantList
          onToggleFavorite={onToggleFavorite}
          favorites={favorites}
          plants={plants}
          search={search}
          plantsToDisplay={filteredPlants}
          sortedPlants={sortPlants}
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
