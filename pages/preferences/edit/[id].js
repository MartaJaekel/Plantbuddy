import FilterForm from "@/components/FilterForm";
import { StyledHeadline } from "@/components/Headline/StyledHeadline";
import styled from "styled-components";
import { useRouter } from "next/router";
import BackButton from "@/components/BackButton";
import { StyledTitle } from "@/components/Title/StyledTitle";

export default function EditPreferencePage({
  preferences,
  onEditPreference,
  plants,
}) {
  const router = useRouter();
  const { id } = router.query;

  const thisPreference = preferences?.find(
    (preference) => preference.id === id
  );

  if (!thisPreference) {
    return <div>Preference not found</div>;
  }

  return (
    <>
      <StyledButton>
        <BackButton />
      </StyledButton>
      <StyledHeadline>PlantBuddy</StyledHeadline>;
      <main>
        <StyledTitle>Edit your Preference</StyledTitle>
        <FilterForm
          plants={plants}
          preferenceFilterSettings={thisPreference?.filterSettings}
          preferenceId={thisPreference.id}
          preferenceFilterTitle={thisPreference?.preferenceTitle}
          onEditPreference={onEditPreference}
        />
      </main>
    </>
  );
}

const StyledButton = styled.div`
  position: fixed;
  z-index: 3;
`;
