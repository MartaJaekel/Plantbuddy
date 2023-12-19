import styled from "styled-components";
import React, { useState } from "react";

export default function FilterForm({ onFilterUpdate, plants }) {
  const [plantSize, setPlantSize] = useState("");
  const [sunlightRequirement, setSunlightRequirement] = useState("");
  const [waterNeeds, setWaterNeeds] = useState("");
  const [optimalTemperature, setOptimalTemperature] = useState("");
  const [petFriendly, setPetFriendly] = useState("");

  const [displayedPlantsCount, setDisplayedPlantsCount] = useState(0);

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
      <StyledLabel for="plantSize">Select the plant size:</StyledLabel>
      <StyledSelect
        name="plantSize"
        onChange={(event) => setPlantSize(event.target.value)}
      >
        <option value="">Select Size</option>
        <option value="small">Small (15cm-50cm)</option>
        <option value="medium">Medium (50cm-90cm)</option>
        <option value="large">Large (90cm+)</option>
      </StyledSelect>

      <StyledLabel for="sunlightRequirement">
        Select the sunlight Requirement:
      </StyledLabel>
      <StyledSelect
        name="sunlightRequirement"
        onChange={(event) => setSunlightRequirement(event.target.value)}
      >
        <option value="">Select Sunlight Requirement</option>
        <option value="full sun">Full Sun</option>
        <option value="indirect light">Indirect Light</option>
        <option value="half-shade">Half-Shade</option>
      </StyledSelect>

      <StyledLabel for="waterNeeds">Select the water needs:</StyledLabel>
      <StyledSelect
        name="waterNeeds"
        onChange={(event) => setWaterNeeds(event.target.value)}
      >
        <option value="">Select Water Needs</option>
        <option value="weekly">Weekly</option>
        <option value="every other week">Every other week</option>
        <option value="monthly">Monthly</option>
      </StyledSelect>

      <StyledLabel for="optimalTemperature">
        Select the optimal temperature:
      </StyledLabel>
      <StyledSelect
        name="optimalTemperature"
        onChange={(event) => setOptimalTemperature(event.target.value)}
      >
        <option value="">Select Temperature</option>
        <option value="low">15-20°C</option>
        <option value="average">18-25°C</option>
        <option value="high">20-30°C</option>
      </StyledSelect>

      <StyledLabel for="petFriendly">Select the pet compatibility:</StyledLabel>
      <StyledSelect
        name="petFriendly"
        onChange={(event) => setPetFriendly(event.target.value)}
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
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  max-width: 19rem;
  margin: 1rem auto 1rem auto;
`;

const StyledLabel = styled.label`
  border: 0;
  padding: 0;
  margin: 0;
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  white-space: nowrap;
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
