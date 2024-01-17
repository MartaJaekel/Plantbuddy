import { StyledHeadline } from "@/components/Headline/StyledHeadline";
import PreferenceList from "@/components/PreferenceList";
import FilterForm from "@/components/FilterForm";
import { StyledTitle } from "@/components/Title/StyledTitle";

export default function PreferencesPage({
  plants,
  preferences,
  handleAddPreference,
  handleDeletePreference
}) {
  return (
    <>
      <StyledHeadline>PlantBuddy</StyledHeadline>
      <main>
        <StyledTitle>Add your Plant Preferences</StyledTitle>
        <FilterForm plants={plants} onAddPreference={handleAddPreference} />
        <PreferenceList preferences={preferences} handleDeletePreference={handleDeletePreference} />
      </main>
    </>
  );
}
  
