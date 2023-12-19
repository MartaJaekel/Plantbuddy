import Header from "@/components/Header";
import FilterForm from "@/components/FilterForm";
import styled from "styled-components";
import PlantList from "@/components/PlantList";
import PreferenceCard from "@/components/PreferenceCard";
import { uid } from "uid";
import { useState } from "react";

export default function PreferencesPage({ plants }) {
  const [preferences, setPreferences] = useState("preferences", {
    defaultValue: [],
  });

  function handleAddPreference(newPreference) {
    setPreferences([...preferences, {id: uid(), ...newPreference}]);
  }


  return (
    <>
      <Header />
      <StyledTitle>Add your Preferences</StyledTitle>
      <main>
        <FilterForm
          plants={plants}
          onAddPreference={handleAddPreference}
        />
        <PreferenceCard />
      </main>
    </>
  );
}

const StyledTitle = styled.h1`
  text-align: center;
  margin: 6rem 0 2rem 0;
  font-size: 1.25rem;
  color: var(--color-green);
`;
