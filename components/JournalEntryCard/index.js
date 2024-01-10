import styled from "styled-components";
import Image from "next/image";

export default function EntryCard({entry}) {
  return (
    <StyledEntryCard>
    <StyledEntryImage>
      <Image src={entry.url} width={100} height={100} alt="Uploaded" />
    </StyledEntryImage>
    <StyledEntryInfo>
      <p>{entry.name}</p>
    </StyledEntryInfo>
  </StyledEntryCard>
  );
}
const StyledEntryCard = styled.div`
  display: flex;
  align-items: center; 
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px; 
`;

const StyledEntryImage = styled.div`
  margin-right: 16px; 
`;

const StyledEntryInfo = styled.div`
  flex: 1; 
`;
