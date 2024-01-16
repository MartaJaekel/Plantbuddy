import FilterForm from "@/components/FilterForm";
import { StyledHeadline } from "@/components/Headline/StyledHeadline";
import styled from "styled-components";
import { useRouter } from "next/router";
import BackButton from "@/components/BackButton";

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

const StyledTitle = styled.h2`
  text-align: center;
  margin: 6rem 0 2rem 0;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.primaryGreen};
`;

const StyledButton = styled.div`
  position: fixed;
  z-index: 3;
`;
