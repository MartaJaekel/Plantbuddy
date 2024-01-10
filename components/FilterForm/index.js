import styled from "styled-components";
import React, { useState } from "react";
import { useRouter } from "next/router";

export default function FilterForm({
  plants,
  onAddPreference,
  preferenceFilterSettings = {},
  preferenceFilterTitle = "",
  onEditPreference,
  preferenceId,
}) {
  const router = useRouter();

  const initialPreferenceFilterSettings = {
    preferenceTitle: preferenceFilterTitle,
    plantSize: preferenceFilterSettings.plantSize || "",
    sunlightRequirement: preferenceFilterSettings.sunlightRequirement || "",
    waterNeeds: preferenceFilterSettings.waterNeeds || "",
    optimalTemperature: preferenceFilterSettings.optimalTemperature || "",
    petFriendly: preferenceFilterSettings.petFriendly || "",
  };

  const [settings, setSettings] = useState(initialPreferenceFilterSettings);

  if (!plants) {
    return null;
  }

  // Separate filter functions
  const filterPlantSize = (plantId, size) =>
    !size || plants.find((plant) => plant.id === plantId)?.size === size;
  const filterSunlightRequirement = (plantId, requirement) =>
    !requirement ||
    plants.find((plant) => plant.id === plantId)?.sunlightRequirements ===
      requirement;
  const filterWaterNeeds = (plantId, needs) =>
    !needs ||
    plants.find((plant) => plant.id === plantId)?.waterNeeds === needs;
  const filterOptimalTemperature = (plantId, temperature) =>
    !temperature ||
    plants.find((plant) => plant.id === plantId)?.optimalTemperature ===
      temperature;
  const filterPetFriendly = (plantId, isPetFriendly) =>
    !isPetFriendly ||
    plants.find((plant) => plant.id === plantId)?.petFriendly ===
      (isPetFriendly === "true");

  function handleSubmit(event) {
    event.preventDefault();

    const { plantSize, sunlightRequirement, waterNeeds, optimalTemperature, petFriendly } = settings;

    const filterSettings = {
      plantSize,
      sunlightRequirement,
      waterNeeds,
      optimalTemperature,
      petFriendly,
    };

    const preferenceData = {
      preferenceTitle: settings.preferenceTitle,
      preferencePlants: plants
        .filter(
          (plant) =>
            filterPlantSize(plant.id, settings.plantSize) &&
            filterSunlightRequirement(plant.id, settings.sunlightRequirement) &&
            filterWaterNeeds(plant.id, settings.waterNeeds) &&
            filterOptimalTemperature(plant.id, settings.optimalTemperature) &&
            filterPetFriendly(plant.id, settings.petFriendly)
        )
        .map((plant) => plant.id),
      filterSettings,
    };

    if (preferenceId) {
      onEditPreference({ ...preferenceData, id: preferenceId });
      router.push("/preferences");
    } else {
      onAddPreference(preferenceData);
      event.target.reset();
    }

    event.target.elements.title.focus();
  }

  function handleCancel() {
    if (preferenceId) {
      // navigate back to preferences page if editing an existing preference
      router.push("/preferences");
    } else {
      // reset the form if adding a new preference, 
      setSettings(initialPreferenceFilterSettings);
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor="title">Add your preference title</StyledLabel>
      <StyledTitleInput
        type="text"
        id="title"
        name="title"
        placeholder="Add here your Preference Title"
        minLength="3"
        maxLength="25"
        required
        value={settings.preferenceTitle}
        onChange={(event) => setSettings({ ...settings, preferenceTitle: event.target.value })}
      />

      <StyledLabel htmlFor="plantSize">Select the plant size:</StyledLabel>
      <StyledSelect
        name="plantSize"
        id="plantSize"
        onChange={(event) => setSettings({ ...settings, plantSize: event.target.value })}
        defaultValue={settings.plantSize}
      >
        <option value="">Select Size</option>
        <option value="small">Small (15cm-50cm)</option>
        <option value="medium">Medium (50cm-90cm)</option>
        <option value="large">Large (90cm+)</option>
      </StyledSelect>

      <StyledLabel htmlFor="sunlightRequirement">
        Select the sunlight Requirement:
      </StyledLabel>
      <StyledSelect
        name="sunlightRequirement"
        id="sunlightRequirement"
        onChange={(event) => setSettings({ ...settings, sunlightRequirement: event.target.value })}
        defaultValue={settings.sunlightRequirement}
      >
        <option value="">Select Sunlight Requirement</option>
        <option value="full sun">Full Sun</option>
        <option value="indirect light">Indirect Light</option>
        <option value="half-shade">Half-Shade</option>
      </StyledSelect>

      <StyledLabel htmlFor="waterNeeds">Select the water needs:</StyledLabel>
      <StyledSelect
        name="waterNeeds"
        id="waterNeeds"
        onChange={(event) => setSettings({ ...settings, waterNeeds: event.target.value })}
        defaultValue={settings.waterNeeds}
      >
        <option value="">Select Water Needs</option>
        <option value="weekly">Weekly</option>
        <option value="every other week">Every other week</option>
        <option value="monthly">Monthly</option>
      </StyledSelect>

      <StyledLabel htmlFor="optimalTemperature">
        Select the optimal temperature:
      </StyledLabel>
      <StyledSelect
        name="optimalTemperature"
        id="optimalTemperature"
        onChange={(event) => setSettings({ ...settings, optimalTemperature: event.target.value })}
        defaultValue={settings.optimalTemperature}
      >
        <option value="">Select Temperature</option>
        <option value="low">15-20°C</option>
        <option value="average">18-25°C</option>
        <option value="high">20-30°C</option>
      </StyledSelect>

      <StyledLabel htmlFor="petFriendly">
        Select the pet compatibility:
      </StyledLabel>
      <StyledSelect
        name="petFriendly"
        id="petFriendly"
        onChange={(event) => setSettings({ ...settings, petFriendly: event.target.value })}
        defaultValue={settings.petFriendly}
      >
        <option value="">Select Pet Compatibility</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </StyledSelect>
      <StyledButtonContainer>
        <StyledButton type="button" onClick={handleCancel}>Cancel</StyledButton>
        <StyledButton type="submit">Save</StyledButton>
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
  padding: 0rem 0rem 2rem 0;
  border-bottom: 2px solid ${({ theme }) => theme.divider};
`;

const StyledTitleInput = styled.input`
  background-color: ${({ theme }) => theme.formField};
  padding: 0.6rem 1.5rem;
  border-radius: 8px;
  color: ${({ theme }) => theme.formText};
  border: solid 0.8px var(--color-beige);
  cursor: pointer;

  &::placeholder {
    color: ${({ theme }) => theme.formText};
  }
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
  background-color: ${({ theme }) => theme.formField};
  padding: 0.6rem 1.5rem;
  border-radius: 8px;
  color: ${({ theme }) => theme.formText};
  border: solid 0.8px var(--color-beige);
  cursor: pointer;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  color: var(--color-beige);
  background-color: ${({ theme }) => theme.button};
  border: none;
  border-radius: 8px;
  padding: 0.6rem 0.4rem;
  font-weight: 600;
  cursor: pointer;
  width: 9rem;
`;
