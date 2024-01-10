import styled from "styled-components";
import Image from "next/image";

export default function EntryCard({entry}) {
  return (
    <StyledEntryCard>
      <p>{entry.name}</p>
      <Image src={entry.url} width={100} height={100}  alt="Uploaded" />
    </StyledEntryCard>
  );
}
const StyledEntryCard = styled.div`
display: flex;
flex-direction:column;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width:300px;
  
`;
