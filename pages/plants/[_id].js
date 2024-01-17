import { useRouter } from "next/router";
import useSWR from "swr";
import Image from "next/image";
import styled from "styled-components";
import PlantCharacteristics from "@/components/PlantCharacteristics";
import FavoriteButton from "@/components/FavoriteButton";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function PlantDetail({
  onToggleFavorite,
  favorites,
  categories,
  theme,
}) {
  const { status } = useSession();
  const router = useRouter();
  const { _id } = router.query;

  const { data: plant, error: plantError } = useSWR(`/api/plants/${_id}`);
  const { data: fetchedCategories, error: categoriesError } =
    useSWR(`/api/categories`);

  if (plantError || categoriesError)
    return <div>Error occurred while fetching data</div>;
  if (!plant || !fetchedCategories) return <div>Loading...</div>;

  const category = categories.find(
    (category) => category.slug === plant.categorySlug
  );
  const categoryColor =
    theme === "light" ? category.bgcolor : category.bgcolorDark;

  const goBack = () => {
    router.back();
  };

  return (
    <>
      <StyledMain>
      <StyledBackButton type="button" aria-label="Go Back" onClick={goBack}>
        <Image
          src="/assets/ArrowIcon.svg"
          alt="Back Link"
          width={25}
          height={20}
        />
      </StyledBackButton>
        {status === "authenticated" && (
          <FavoriteButton
            onClick={() => onToggleFavorite(plant._id)}
            isFavorite={favorites?.includes(plant._id)}
          />
        )}
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
                imageSrc={
                  theme === "light"
                    ? "/assets/SizeIcon.svg"
                    : "/assets/SizeIconDarkmode.svg"
                }
                info={plant.size}
              />
            </li>
            <li>
              <PlantCharacteristics
                headline="Sunlight"
                imageAlt="Sunlight Icon"
                imageSrc={
                  theme === "light"
                    ? "/assets/SunlightIcon.svg"
                    : "/assets/SunlightIconDarkmode.svg"
                }
                info={plant.sunlightRequirements}
              />
            </li>
            <li>
              <PlantCharacteristics
                headline="Warmth"
                imageAlt="Temperature Icon"
                imageSrc={
                  theme === "light"
                    ? "/assets/TemperatureIcon.svg"
                    : "/assets/TemperatureIconDarkmode.svg"
                }
                info={plant.optimalTemperature}
              />
            </li>
            <li>
              <PlantCharacteristics
                headline="Water"
                imageAlt="Water Icon"
                imageSrc={
                  theme === "light"
                    ? "/assets/WaterIcon.svg"
                    : "/assets/WaterIconDarkmode.svg"
                }
                info={plant.waterNeeds}
              />
            </li>
            <li>
              <PlantCharacteristics
                headline="Pet-Friendly"
                imageAlt="Paw Icon"
                imageSrc={
                  theme === "light"
                    ? "/assets/PawIcon.svg"
                    : "/assets/PawDarkmode.svg"
                }
                info={plant.petFriendly === true ? "yes" : "no"}
              />
            </li>
            <li>
              <StyledLink href={`/categories/${plant.categorySlug}`}>
                <PlantCharacteristics
                  headline="Category"
                  imageAlt="Leaf Icons"
                  imageSrc={theme === "light" ? "/assets/CategoryInactive.svg" : "/assets/CategoryActive.svg"}
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
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  position: relative;
  
  @media (min-width: 1024px) {
    display: flex;
    max-width: 90rem;
    margin: 0 auto;
  }
`;

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
  object-fit: cover;
  
  @media (min-width: 1024px) {
    width: 60%;
    height: 51.6rem;
  }
`;

const StyledSection = styled.section`
  padding: 1rem 2rem 6rem 2rem;
  background-color: ${({ $categoryColor }) => $categoryColor};
`;

const StyledName = styled.h1`
  font-family: serif;
  font-size: 2rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.formText};
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
