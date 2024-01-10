import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import PlantCharacteristics from "@/components/PlantCharacteristics";
import FavoriteButton from "@/components/FavoriteButton";
import Link from "next/link";

export default function PlantDetail({
  onToggleFavorite,
  favorites,
  plants,
  categories,
  theme,
}) {
  const router = useRouter();
  const { id } = router.query;

  const goBack = () => {
    router.back();
  };

  const plant = plants.find((plant) => plant.id === id);

  if (!plant) {
    return <h2>Plant not found!</h2>;
  }

  const category = categories.find(
    (category) => category.slug === plant.categorySlug
  );
  const categoryColor =
    theme === "light" ? category.bgcolor : category.bgcolorDark;

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
            <li>
              <PlantCharacteristics
                headline="Size"
                imageAlt="Size Icon"
                imageSrc={theme === "light" ? "/assets/SizeIcon.svg" : "/assets/SizeIconDarkmode.svg"}
                info={plant.size}
              />
            </li>
            <li>
              <PlantCharacteristics
                headline="Sunlight"
                imageAlt="Sunlight Icon"
                imageSrc={theme === "light" ? "/assets/SunlightIcon.svg" : "/assets/SunlightIconDarkmode.svg"}
                info={plant.sunlightRequirements}
              />
            </li>
            <li>
              <PlantCharacteristics
                headline="Warmth"
                imageAlt="Temperature Icon"
                imageSrc={theme === "light" ? "/assets/TemperatureIcon.svg" : "/assets/TemperatureIconDarkmode.svg"}
                info={plant.optimalTemperature}
              />
            </li>
            <li>
              <PlantCharacteristics
                headline="Water"
                imageAlt="Water Icon"
                imageSrc={theme === "light" ? "/assets/WaterIcon.svg" : "/assets/WaterIconDarkmode.svg"}
                info={plant.waterNeeds}
              />
            </li>
            <li>
              <PlantCharacteristics
                headline="Pet-Friendly"
                imageAlt="Paw Icon"
                imageSrc={theme === "light" ? "/assets/PawIcon.svg" : "/assets/PawDarkmode.svg"}
                info={plant.petFriendly === true ? "yes" : "no"}
              />
            </li>
            <li>
              <StyledLink href={`/categories/${plant.categorySlug}`}>
                <PlantCharacteristics
                  headline="Category"
                  imageAlt="Leaf Icons"
                  imageSrc={theme === "light" ? "/assets/CategoryInActive.svg" : "/assets/CategoryActive.svg"}
                  info={plant.categorySlug}
                />
              </StyledLink>
            </li>
          </StyledPlantCharacteristics>
          <StyledDescription>
            <h3>Description</h3>
            <p>{plant.description}</p>
          </StyledDescription>
        </StyledSection>
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

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  display: block;
`;

const StyledSection = styled.section`
  padding: 1rem 2rem 6rem 2rem;
  background-color: ${({ $categoryColor }) => $categoryColor};
`;

const StyledName = styled.h1`
  font-family: serif;
  font-size: 2rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.primaryGreen};
  margin: 0;
`;

const StyledSpecies = styled.h2`
  text-transform: uppercase;
  color: ${({ theme }) => theme.infoText};
  padding-top: 0.5rem;
  font-weight: 300;
  font-size: 1.25rem;
  margin: 0;
`;

const StyledPlantCharacteristics = styled.ul`
  display: flex;
  gap: 1rem 2rem;
  flex-wrap: wrap;
  justify-content: center;
  border-bottom: 2px solid ${({ theme }) => theme.dividerDetails};
  padding: 1rem 0 1rem 0;
`;

const StyledDescription = styled.article`
  color: ${({ theme }) => theme.infoText};
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.infoText};
`;
