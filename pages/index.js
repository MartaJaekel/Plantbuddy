import React, { useState } from "react";
import PlantCard from "@/components/Card";
import FilterForm from "@/components/FilterForm";
import SearchField from "@/components/SearchField";
import styled from "styled-components";
import { plants } from "@/lib/data";
import SortPlants from "@/components/SortPlants";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [filteredPlants, setFilteredPlants] = useState(plants);
  const [sortPlants, setSortPlants] = useState([])

  const handleFilterUpdate = (newFilteredPlants) => {
    setFilteredPlants(newFilteredPlants);
  };
  const handleSortUpdate = (newSortedPlants) => {
    setSortPlants(newSortedPlants)
  }

  return (
    <>
      <StyledHeader>PlantBuddy</StyledHeader>
      <HeaderSpacing />
      <SearchField onChange={setSearch} />
      <SortPlants onSortUpdate={handleSortUpdate} defaultOption={sortPlants}/>
      <FilterForm onFilterUpdate={handleFilterUpdate} />
      <PlantCard search={search} plantsToDisplay={filteredPlants} sortedPlants={sortPlants} />
    </>
  );
}

const HeaderSpacing = styled.div`
  margin-top: 6rem;
`;

const StyledHeader = styled.h1`
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
  z-index: 1;
`;
