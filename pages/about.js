import Headline from "@/components/Headline";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
  <Headline />
  <StyledTitle>About Us</StyledTitle>

  <>
    <StyledAboutContainer>
      <StyledAbout>
        <StyledEntryCard>
          <Image src="/images/Jan.png" width={100} height={100} alt="Uploaded" />
          <div>
            <StyledFigcaption>Jan</StyledFigcaption>
            <Link href="https://github.com/jantillidie">Github</Link>
          </div>
        </StyledEntryCard>
      </StyledAbout>

      <StyledAbout>
        <StyledEntryCard>
          <Image src="/images/Franzi.png" width={100} height={100} alt="Uploaded" />
          <div>
            <StyledFigcaption>Franzi</StyledFigcaption>
            <Link href="https://github.com/franziska-caroline">Github</Link>
          </div>
        </StyledEntryCard>
      </StyledAbout>

      <StyledAbout>
        <StyledEntryCard>
          <Image src="/images/Marta.png" width={100} height={100} alt="Uploaded" />
          <div>
            <StyledFigcaption>Marta</StyledFigcaption>
            <Link href="https://github.com/MartaJaekel">Github</Link>
          </div>
        </StyledEntryCard>
      </StyledAbout>
    </StyledAboutContainer>
  </>
</>
  );
}

const StyledTitle = styled.h1`
text-align: center;

`


const StyledEntryCard = styled.figure`
  display: flex;
  align-items: center;
  position: relative;
  border: 2px solid ${({ theme }) => theme.cardBorder};
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  background-color: white;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;  /* To make the image round */
    margin-right: 16px;  /* Add some spacing between image and text */
  }

  figcaption {
    flex: 1;  /* Take up remaining space */
  }

  a {
    margin-top: 8px;
  }
`;
const StyledAboutContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  max-width: 20rem;
  margin: 1rem auto;
  padding: 1rem 0;
`;
const StyledAbout = styled.li`
  width: 100%;
`;
const StyledFigcaption = styled.figcaption`
flex: 1;
text-align: center;
`