import { useRouter } from "next/router";
import { plants } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import arrowURL from "@/assets/ArrowIcon.svg?url";
import sizeURL from "@/assets/SizeIcon.svg?url";
import sunlightURL from "@/assets/SunlightIcon.svg?url";
import waterURL from "@/assets/WaterIcon.svg?url";
import temperatureURL from "@/assets/TemperatureIcon.svg?url";
import PlantCharacteristics from "@/components/PlantCharacteristics";
import FavoriteButton from "@/components/FavoriteButton";

export default function PlantDetail({ onToggleFavorite, favorites }) {
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
        <Link href="/">
          <Image src={arrowURL} alt="Back Link" width={30} height={25} />
        </Link>
      </StyledBackLink>
      <main>
      <FavoriteButton
            onClick={() => onToggleFavorite(plant.id)}
            isFavorite={favorites?.includes(plant.id)}
          />
        <StyledImage
          src={plant.image}
          width={200}
          height={200}
          alt={plant.commonName}
        />
        <StyledSection>
          <StyledName>{plant.commonName}</StyledName>
          <StyledSpecies>{plant.species}</StyledSpecies>
          <StyledPlantCharacteristics>
            <PlantCharacteristics
              headline="Size"
              imageAlt="Size Icon"
              imageSrc={sizeURL}
              info={plant.size}
            />
            <PlantCharacteristics
              headline="Sunlight"
              imageAlt="Sunlight Icon"
              imageSrc={sunlightURL}
              info={plant.sunlightRequirements}
            />
            <PlantCharacteristics
              headline="Temperature"
              imageAlt="Temperature Icon"
              imageSrc={temperatureURL}
              info={plant.optimalTemperature}
            />
            <PlantCharacteristics
              headline="Water"
              imageAlt="Water Icon"
              imageSrc={waterURL}
              info={plant.waterNeeds}
            />
          </StyledPlantCharacteristics>
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
  display: flex;
  align-items: center;
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
  line-height: 2rem;
  color: var(--color-green);
  margin: 0;
`;

const StyledSpecies = styled.h2`
  text-transform: uppercase;
  padding-top: 0.5rem;
  font-weight: 300;
  font-size: 1.25rem;
  margin: 0;
`;

const StyledPlantCharacteristics = styled.article`
  display: flex;
  gap: 1rem 3rem;
  flex-wrap: wrap;
  justify-content: center;
  border-bottom: 2px solid var(--color-grey);
  padding: 1rem 0 1rem 0;
`;
