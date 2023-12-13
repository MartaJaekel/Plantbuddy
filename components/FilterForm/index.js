import styled from "styled-components";
import React, { useState } from "react";
import { plants } from "@/lib/data";

export default function FilterForm({ onFilterUpdate }) {
  const [plantSize, setPlantSize] = useState("");
  const [sunlightRequirement, setsunlightRequirement] = useState("");
  const [waterNeeds, setwaterNeeds] = useState("");
  const [optimalTemperature, setoptimalTemperature] = useState("");
  const [petFriendly, setpetFriendly] = useState("");

  const handleFilter = (event) => {
    event.preventDefault();

    const newFilteredPlants = plants.filter(plant => 
      (plantSize ? plant.size === plantSize : true) &&
      (sunlightRequirement ? plant.sunlightRequirements === sunlightRequirement : true) &&
      (waterNeeds ? plant.waterNeeds === waterNeeds : true) &&
      (optimalTemperature ? plant.optimalTemperature === optimalTemperature : true) &&
      (petFriendly ? plant.petFriendly === (petFriendly === "true") : true)
      );

      onFilterUpdate(newFilteredPlants);
  }

  return (
    <StyledForm onSubmit={handleFilter}>
      <select name="plantSize" onChange={e => setPlantSize(e.target.value)}>
        <option value="">Select Size</option>
        <option value="Small to Medium">Small to Medium</option>
        <option value="Medium">Medium</option>
        <option value="Medium to Large">Medium to Large</option>
        <option value="Large">Large</option>
      </select>
      <select name="sunlightRequirement" onChange={e => setsunlightRequirement(e.target.value)}>
        <option value="">Select Sunlight Requirement</option>
        <option value="Low to Medium Light">Low to Medium Light</option>
        <option value="Low to Bright Light">Low to Bright Light</option>
        <option value="Bright Indirect Light">Bright Indirect Light</option>
        <option value="Bright Direct Light">Bright Direct Light</option>
        <option value="Full Sun">Full Sun</option>
      </select>
      <select name="waterNeeds" onChange={e => setwaterNeeds(e.target.value)}>
        <option value="">Select Water Needs</option>
        <option value="Low">Low</option>
        <option value="Low to Medium">Low to Medium</option>
        <option value="Medium">Medium</option>
        <option value="Medium to High">Medium to High</option>
        <option value="High">High</option>
      </select>
      <select name="optimalTemperature" onChange={e => setoptimalTemperature(e.target.value)}>
        <option value="">Select Temperature</option>
        <option value="15-27°C">15-27°C</option>
        <option value="18-25°C">18-25°C</option>
        <option value="18-24°C">18-24°C</option>
        <option value="20-30°C">20-30°C</option>
        <option value="15-30°C">15-30°C</option>
      </select>
      <select name="petFriendly" onChange={e => setpetFriendly(e.target.value)}>
        <option value="">Select Pet Compatibility</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      <button type="submit">Filter</button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  max-width: 18rem;
  margin: 6rem auto 1rem auto;
`;
