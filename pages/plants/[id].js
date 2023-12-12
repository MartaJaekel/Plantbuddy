import { useRouter } from "next/router";
import { plants } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export default function PlantDetail() {
  const router = useRouter();
  const { id } = router.query;

  const plant = plants.find((plant) => plant.id === id);

  console.log(plant);

  if (!plant) {
    return <h2>Plant not found!</h2>;
  }

  return (
    <>
      <StyledBackLink>
        <Link href="/">〈</Link>
      </StyledBackLink>
      <main>
        <StyledImage
          src={plant.image}
          width={200}
          height={200}
          alt={plant.commonName}
        />
        <StyledSection>
          <StyledName>{plant.commonName}</StyledName>
          <StyledSpecies>{plant.species}</StyledSpecies>
          <StyledInfo>
            <StyledInfoPoint>
              <StyledInfoHeadline>Size</StyledInfoHeadline>
              <StyledInfoText>{plant.size}</StyledInfoText>
            </StyledInfoPoint>
            <StyledInfoPoint>
              <StyledInfoHeadline>Sunlight</StyledInfoHeadline>
              <StyledInfoText>{plant.sunlightRequirements}</StyledInfoText>
            </StyledInfoPoint>
            <StyledInfoPoint>
              <StyledInfoHeadline>Temperature</StyledInfoHeadline>
              <StyledInfoText>{plant.optimalTemperature}</StyledInfoText>
            </StyledInfoPoint>
            <StyledInfoPoint>
              <StyledInfoHeadline>Water</StyledInfoHeadline>
              <StyledInfoText>{plant.waterNeeds}</StyledInfoText>
            </StyledInfoPoint>
          </StyledInfo>
          <article>
            <h3>Description</h3>
            <p>{plant.description}</p>
          </article>
        </StyledSection>
      </main>
    </>
  );
}

const StyledBackLink = styled.nav`
  position: absolute;
  top: 2rem;
  left: 1rem;
  background-color: var(--color-green);
  border-radius: 50%;
  width: 40px;
  height: 40px;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`;

const StyledSection = styled.section`
  margin: 1rem 2rem 2rem 2rem;
`;

const StyledName = styled.h1`
  font-family: serif;
  font-size: 2rem;
  color: var(--color-green);
  margin: 0;
`;

const StyledSpecies = styled.h2`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 1.25rem;
  margin: 0;
`;

const StyledInfo = styled.article`
  display: flex;
  gap: 1rem 3rem;
  flex-wrap: wrap;
  justify-content: center;
  border-bottom: 2px solid #e6e6e6;
  padding: 1rem 0 1rem 0;
`;

const StyledInfoPoint = styled.div`
  width: 130px;
`;

const StyledInfoHeadline = styled.h3`
  font-size: 1rem;
  margin: 0;
`;

const StyledInfoText = styled.p`
  margin: 0;
`;
