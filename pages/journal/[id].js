import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";

export default function EntryDetail({ entries }) {
  const router = useRouter();
  const { id } = router.query;

  const goBack = () => {
    router.back();
  };
  const entry = entries.find((entry) => entry.id === id);
  if (!entry) {
    return <p>Entry not found</p>;
  }

  return (
    <>
      <StyledBackButton type="button" aria-label="Go Back" onClick={goBack}>
        <img
          src="/assets/ArrowIcon.svg"
          alt="Back Link"
          width={25}
          height={20}
        />
      </StyledBackButton>
      <StyledEditLink href={`/journal/edit/${entry.id}`}>Edit</StyledEditLink>
      <main>
        <StyledImage
          src={entry.url}
          width={200}
          height={200}
          alt={entry.name}
        />

       
          <StyledArticle>
            <StyledName>{entry.name}</StyledName>
            <StyledDescription>Description</StyledDescription>
            <StyledParagraph>{entry.description}</StyledParagraph>
            <StyledDescription>Care Tips</StyledDescription>
            <StyledParagraph>{entry.careTipps}</StyledParagraph>
            <StyledDescription>Location</StyledDescription>
            <StyledParagraph>{entry.location}</StyledParagraph>
          </StyledArticle>
        
      </main>
    </>
  );
}
const StyledBackButton = styled.button`
  position: absolute;
  top: 1.75rem;
  left: 1rem;
  background-color: ${({ theme }) => theme.primaryGreen};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  border: none;
`;
const StyledEditLink = styled(Link)`
  position: absolute;
  top: 1.75rem;
  right: 1rem;
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  text-align: center;
  background-color: ${({ theme }) => theme.primaryGreen};
  border-radius: 8px;
  padding: 0.6rem 0.4rem;
  width: 3.5rem;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 50%;
`;

const StyledName = styled.h1`
  font-family: serif;
  font-size: 2rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.formText};
  margin: 0;
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column; 
  flex: 1;
  overflow: hidden;
  gap: 1rem; 
  align-items: center; 
  border-bottom: 2px solid ${({ theme }) => theme.cardBorder};
  padding: 1rem 0;
  
`;



const StyledDescription = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.infoText};
  margin-top: 20px;
`;

const StyledParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.infoText};
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
