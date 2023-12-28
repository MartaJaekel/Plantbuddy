import { StyledHeadline } from "@/components/Headline/StyledHeadline";
import styled from "styled-components";

export default function EditPreferencePage() {
  return (
    <>
      <StyledHeadline>PlantBuddy</StyledHeadline>;
      <main>
        <StyledTitle>Edit your Preference</StyledTitle>
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
