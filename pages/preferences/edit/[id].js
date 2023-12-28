import FilterForm from "@/components/FilterForm";
import { StyledHeadline } from "@/components/Headline/StyledHeadline";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function EditPreferencePage({preferences}) {
  const router = useRouter();
  const { id } = router.query;

  const thisPreference = preferences?.find(preference => preference.id === id);
  
  return (
    <>
      <StyledHeadline>PlantBuddy</StyledHeadline>;
      <main>
        <StyledTitle>Edit your Preference</StyledTitle>
        <FilterForm initialFilterSettings={thisPreference?.filterSettings}/>
      </main>
    </>
  );
}

const StyledTitle = styled.h2`
  text-align: center;
  margin: 6rem 0 2rem 0;
  font-size: 1.25rem;
  color: var(--color-green);
`;
