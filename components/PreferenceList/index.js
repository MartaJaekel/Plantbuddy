import styled from "styled-components";
import PreferenceCard from "../PreferenceCard";

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
            <li key={preference.id}>
              <PreferenceCard preference={preference} onDeletePreference={handleDeletePreference}/>
            </li>
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
