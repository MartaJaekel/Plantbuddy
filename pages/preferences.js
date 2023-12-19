import Header from "@/components/Header";
import FilterForm from "@/components/FilterForm";
import styled from "styled-components";

export default function PreferencesPage({ plants, handleFilterUpdate }) {
  return (
    <>
      <Header />
      <StyledTitle>Add your Preferences</StyledTitle>
      <main>
        <FilterForm onFilterUpdate={handleFilterUpdate} plants={plants} />
      </main>
    </>
  );
}

const StyledTitle = styled.h1`
  text-align: center;
  margin: 6rem 0 3rem 0;
  font-size: 1.25rem;
  color: var(--color-green);
`;
