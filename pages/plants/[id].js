import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import PlantCharacteristics from "@/components/PlantCharacteristics";
import FavoriteButton from "@/components/FavoriteButton";
import Link from "next/link";

export default function PlantDetail({ onToggleFavorite, favorites, plants, categories }) {
  const router = useRouter();
  const { id } = router.query;

  const goBack = () => {
    router.back();
  };

  const plant = plants.find((plant) => plant.id === id);

  if (!plant) {
    return <h2>Plant not found!</h2>;
  }

  const categoryColor =  categories.find((category) => category.slug === plant.categorySlug).bgcolor;

  return (
    <>
      <StyledBackButton type="button" aria-label="Go Back" onClick={goBack}>
        <Image src="/assets/ArrowIcon.svg" alt="Back Link" width={25} height={20} />
      </StyledBackButton>
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
        <StyledSection $categoryColor={categoryColor}>
          <StyledName>{plant.commonName}</StyledName>
          <StyledSpecies>{plant.species}</StyledSpecies>
          <StyledPlantCharacteristics>
            <PlantCharacteristics
              headline="Size"
              imageAlt="Size Icon"
              imageSrc="/assets/SizeIcon.svg"
              info={plant.size}
            />
            <PlantCharacteristics
              headline="Sunlight"
              imageAlt="Sunlight Icon"
              imageSrc="/assets/SunlightIcon.svg"
              info={plant.sunlightRequirements}
            />
            <PlantCharacteristics
              headline="Warmth"
              imageAlt="Temperature Icon"
              imageSrc="/assets/TemperatureIcon.svg"
              info={plant.optimalTemperature}
            />
            <PlantCharacteristics
              headline="Water"
              imageAlt="Water Icon"
              imageSrc="/assets/WaterIcon.svg"
              info={plant.waterNeeds}
            />
            <PlantCharacteristics
              headline="Pet-Friendly"
              imageAlt="Paw Icon"
              imageSrc="/assets/PawIcon.svg"
              info={plant.petFriendly === true ? "yes" : "no"}
            />
            <StyledLink href={`/categories/${plant.categorySlug}`}>
            <PlantCharacteristics
              headline="Category"
              imageAlt="Leaf Icons"
              imageSrc="/assets/CategoryInactive.svg"
              info={plant.categorySlug}
            />
            </StyledLink>
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
  height: auto;
  display: block;
`;

const StyledSection = styled.section`
  padding: 1rem 2rem 6rem 2rem;
  background-color: ${(props) => props.$categoryColor};
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
  gap: 1rem 2rem;
  flex-wrap: wrap;
  justify-content: center;
  border-bottom: 2px solid var(--color-grey);
  padding: 1rem 0 2rem 0;
`;

const StyledLink = styled(Link)`
color: var(--color-black);
`;
