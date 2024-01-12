import styled from "styled-components";


export default function EntryCard({ entry }) {
  return (
    <StyledEntryCard>
      <StyledEntryImage
        src={entry.url}
        width={100}
        height={100}
        alt="Uploaded"
      />

      <StyledEntryInfo>
        {entry.name}
      </StyledEntryInfo>
    </StyledEntryCard>
  );
}
const StyledEntryCard = styled.figure`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
`;

const StyledEntryImage = styled.img`
  margin-right: 16px;
`;

const StyledEntryInfo = styled.figcaption`
  flex: 1;
`;
