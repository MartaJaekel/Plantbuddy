import React, { useState } from "react";
import PlantCard from "@/components/Card";
import FilterForm from "@/components/FilterForm";
import styled from "styled-components";
import { plants } from "@/lib/data";

export default function HomePage() {
  const [filteredPlants, setFilteredPlants] = useState(plants);

  const handleFilterUpdate = (newFilteredPlants) => {
    setFilteredPlants(newFilteredPlants);
  };

  return (
    <>
      <StyledHeader>PlantBuddy</StyledHeader>
      <FilterForm onFilterUpdate={handleFilterUpdate} />
      <PlantCard plantsToDisplay={filteredPlants} />
    </>
  );
}

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
`;
