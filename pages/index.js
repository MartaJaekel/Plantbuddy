import React, { useState } from "react";
import PlantCard from "@/components/Card";
import FilterForm from "@/components/FilterForm";
import SearchField from "@/components/SearchField";
import styled from "styled-components";
import { plants } from "@/lib/data";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [filteredPlants, setFilteredPlants] = useState(plants);

  const handleFilterUpdate = (newFilteredPlants) => {
    setFilteredPlants(newFilteredPlants);
  };

  return (
    <>
      <StyledHeader>PlantBuddy</StyledHeader>
      <HeaderSpacing />
      <SearchField onChange={setSearch} />
      <FilterForm onFilterUpdate={handleFilterUpdate} />
      <PlantCard search={search} plantsToDisplay={filteredPlants} />
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
