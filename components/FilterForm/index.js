import styled from "styled-components";
import React, { useState } from "react";

export default function FilterForm() {
  const [plantSize, setPlantSize] = useState("");
  const [sunlightRequirement, setsunlightRequirement] = useState("");
  const [waterNeeds, setwaterNeeds] = useState("");
  const [optimalTemperature, setoptimalTemperature] = useState("");
  const [petFriendly, setpetFriendly] = useState("");

  return (
    <StyledForm>
      <select name="plantSize">
        <option value="">Select Size</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>
      <select name="sunlightRequirement">
        <option value="">Select Sunlight Requirement</option>
        <option value="lowToMediumLight">Low to Medium Light</option>
        <option value="lowToBrightLight">Low to Bright Light</option>
        <option value="brightIndirectLight">Bright Indirect Light</option>
        <option value="brightDirectLight">Bright Direct Light</option>
        <option value="fullSun">Full Sun</option>
      </select>
      <select name="waterNeeds">
        <option value="">Select Water Needs</option>
        <option value="low">Low</option>
        <option value="lowToMedium">Low to Medium</option>
        <option value="medium">Medium</option>
        <option value="mediumToHigh">Medium to High</option>
        <option value="high">High</option>
      </select>
      <select name="optimalTemperature">
        <option value="">Select Temperature</option>
        <option value="15to27">15-27°C</option>
        <option value="18to25">18-25°C</option>
        <option value="18to24">18-24°C</option>
        <option value="20to30">20-30°C</option>
        <option value="15to30">15-30°C</option>
      </select>
      <select name="petFriendly">
        <option value="">Select Pet Compatibility</option>
        <option value="petFriendlyTrue">Yes</option>
        <option value="petFriendlyFalse">No</option>
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
