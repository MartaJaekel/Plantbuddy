import styled from "styled-components";
import React, { useState } from "react";

export default function FilterForm({ onFilterUpdate, plants }) {
  const [plantSize, setPlantSize] = useState("");
  const [sunlightRequirement, setSunlightRequirement] = useState("");
  const [waterNeeds, setWaterNeeds] = useState("");
  const [optimalTemperature, setOptimalTemperature] = useState("");
  const [petFriendly, setPetFriendly] = useState("");

  // Separate filter functions
  const filterPlantSize = (plant, size) => !size || plant.size === size;
  const filterSunlightRequirement = (plant, requirement) =>
    !requirement || plant.sunlightRequirements === requirement;
  const filterWaterNeeds = (plant, needs) =>
    !needs || plant.waterNeeds === needs;
  const filterOptimalTemperature = (plant, temperature) =>
    !temperature || plant.optimalTemperature === temperature;
  const filterPetFriendly = (plant, isPetFriendly) =>
    !isPetFriendly || plant.petFriendly === (isPetFriendly === "true");

  const handleFilter = (event) => {
    event.preventDefault();

    const newFilteredPlants = plants.filter(
      (plant) =>
        filterPlantSize(plant, plantSize) &&
        filterSunlightRequirement(plant, sunlightRequirement) &&
        filterWaterNeeds(plant, waterNeeds) &&
        filterOptimalTemperature(plant, optimalTemperature) &&
        filterPetFriendly(plant, petFriendly)
    );

    onFilterUpdate(newFilteredPlants);
  };

  function handleReset() {
    onFilterUpdate(plants);
  }

  function handleReset() {
    onFilterUpdate(plants);
  }

  return (
    <StyledForm onSubmit={handleFilter} onReset={handleReset}>
      <StyledSelect
        name="plantSize"
        onChange={(e) => setPlantSize(e.target.value)}
      >
        <option value="">Select Size</option>
        <option value="Small">Small (15cm-50cm)</option>
        <option value="Medium">Medium (50cm-90cm)</option>
        <option value="Large">Large (90cm+)</option>
      </StyledSelect>
      <StyledSelect
        name="sunlightRequirement"
        onChange={(e) => setSunlightRequirement(e.target.value)}
      >
        <option value="">Select Sunlight Requirement</option>
        <option value="Full Sun">Full Sun</option>
        <option value="Indirect Light">Indirect Light</option>
        <option value="Half-Shade">Half-Shade</option>
      </StyledSelect>
      <StyledSelect
        name="waterNeeds"
        onChange={(e) => setWaterNeeds(e.target.value)}
      >
        <option value="">Select Water Needs</option>
        <option value="Weekly">Weekly</option>
        <option value="Every other week">Every other week</option>
        <option value="Monthly">Monthly</option>
      </StyledSelect>
      <StyledSelect
        name="optimalTemperature"
        onChange={(e) => setOptimalTemperature(e.target.value)}
      >
        <option value="">Select Temperature</option>
        <option value="15-20°C">15-20°C</option>
        <option value="18-25°C">18-25°C</option>
        <option value="20-30°C">20-30°C</option>
      </StyledSelect>
      <StyledSelect
        name="petFriendly"
        onChange={(e) => setPetFriendly(e.target.value)}
      >
        <option value="">Select Pet Compatibility</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </StyledSelect>
      <StyledButtonContainer>
        <StyledButton type="reset">Reset</StyledButton>
        <StyledButton type="submit">Filter</StyledButton>
      </StyledButtonContainer>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  max-width: 19rem;
  margin: 1rem auto 1rem auto;
`;

const StyledSelect = styled.select`
  background-color: var(--color-grey);
  padding: 0.6rem 1.5rem;
  border-radius: 8px;
  color: var(--color-green);
  border: none;
  font-weight: 600;
  cursor: pointer;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  color: white;
  background-color: var(--color-green);
  border: none;
  border-radius: 8px;
  padding: 0.6rem 0.4rem;
  font-weight: 600;
  cursor: pointer;
  width: 9rem;
`;
