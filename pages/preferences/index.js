import Headline from "@/components/Headline";
import styled from "styled-components";
import PreferenceList from "@/components/PreferenceList";
import FilterForm from "@/components/FilterForm";
import Login from "@/components/Login";
import { useSession } from "next-auth/react";

export default function PreferencesPage({
  plants,
  preferences,
  handleAddPreference,
  handleDeletePreference,
}) {
  const { status } = useSession();

  return (
    <>
      <Headline />
      <main>
        <StyledTitle>Add your Plant Preferences</StyledTitle>
        {status !== "authenticated" ? (
          <Login />
        ) : (
          <>
            <FilterForm plants={plants} onAddPreference={handleAddPreference} />
            <PreferenceList
              preferences={preferences}
              handleDeletePreference={handleDeletePreference}
            />
          </>
        )}
      </main>
    </>
  );
}

const StyledTitle = styled.h2`
  text-align: center;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.primaryGreen};
`;
