import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";

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
        <Image
          src="/assets/ArrowIcon.svg"
          alt="Back Link"
          width={25}
          height={20}
        />
      </StyledBackButton>
      <main>
        <StyledImage
          src={entry.url}
          width={200}
          height={200}
          alt={entry.name}
        />

        <StyledSection>
          <StyledArticle>
            <StyledName>{entry.name}</StyledName>
            <StyledDescription>Description</StyledDescription>
            <StyledParagraph>{entry.description}</StyledParagraph>
            <StyledDescription>Care Tips</StyledDescription>
            <StyledParagraph>{entry.careTipps}</StyledParagraph>
            <StyledDescription>Location</StyledDescription>
            <StyledParagraph>{entry.location}</StyledParagraph>
          </StyledArticle>
        </StyledSection>
      </main>
    </>
  );
}
const StyledBackButton = styled.button`
  position: absolute;
  top: 1.75rem;
  left: 1rem;
  background-color: var(--color-green);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  border: none;
`;
const StyledImage = styled(Image)`
  width: 100%;
  height: 50%;
`;
const StyledName = styled.h1`
  font-family: serif;
  font-size: 2rem;
  line-height: 2rem;
  color: var(--color-green);
  margin: 0;
`;

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column; 
  gap: 1rem; 
  align-items: center; 
  border-bottom: 2px solid var(--color-grey);
  padding: 1rem 0;
`;

const StyledSection = styled.section`
  flex: 1;
  overflow: hidden;
`;

const StyledDescription = styled.h3`
  font-size: 1.5rem;
  color: var(--color-green);
  margin-top: 20px;
`;

const StyledParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #555;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
