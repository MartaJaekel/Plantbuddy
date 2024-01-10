import styled from "styled-components";
import PreferenceCard from "../PreferenceCard";
import Link from "next/link";

export default function PreferenceList({ preferences, handleDeletePreference }) {
  return (
    <>
      {preferences.length === 0 ? (
        <StyledCallText>
          Start adding your <StyledSpan>first</StyledSpan> preference!
        </StyledCallText>
      ) : (
        <StyledPreferenceList>
          {preferences.map((preference) => (
            <StyledPreferenceContainer key={preference.id}>
              <PreferenceCard preference={preference} onDeletePreference={handleDeletePreference}/>
              <StyledEditLink href={`/preferences/edit/${preference.id}`}>Edit</StyledEditLink>
            </StyledPreferenceContainer>
          ))}
        </StyledPreferenceList>
      )}
    </>
  );
}

const StyledCallText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.primaryGreen};
`;

const StyledSpan = styled.span`
  font-family: serif;
  font-style: italic;
`;

const StyledPreferenceList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  max-width: 19rem;
  margin: 1rem auto;
  padding: 1rem 0;
`;

const StyledPreferenceContainer = styled.li`
display: flex;
justify-content: space-between;
`;

const StyledEditLink = styled(Link)`
  color: white;
  text-decoration: none;
  text-align: center;
  background-color: var(--color-green);
  border-radius: 8px;
  padding: 0.6rem 0.4rem;
  width: 3.5rem;
`;
