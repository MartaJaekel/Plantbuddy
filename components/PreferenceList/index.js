import styled from "styled-components";
import PreferenceCard from "../PreferenceCard";

export default function PreferenceList({
  preferences
}) {
  return (
    <>
      {preferences.length === 0 ? (
        <StyledArticle>
            Start adding your <StyledSpan>first</StyledSpan> preference!
        </StyledArticle>
      ) : (
        <StyledPreferenceList>
          {preferences.map((preference) => (
            <PreferenceCard
              key={preference.id}
              preference={preference}
            />
          ))}
        </StyledPreferenceList>
      )}
    </>
  );
}

const StyledArticle = styled.article`
  text-align: center;
`;

const StyledSpan = styled.span`
  font-family: serif;
  font-style: italic;
`;

const StyledPreferenceList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  max-width: 19rem;
  margin: 1rem auto 1rem auto;
  padding: 1rem 0rem 1rem 0;
`;
