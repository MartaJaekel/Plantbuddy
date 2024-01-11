import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";
import useSWR from 'swr';

const fetcher = url => fetch(url).then(response => response.json());


export default function PlantCard({ onToggleFavorite, isFavorite, plant }) {
  const { data: categories, error: categoriesError } = useSWR('/api/categories', fetcher);
  const { data: plants, error: plantsError } = useSWR('/api/plants', fetcher);

  if (plantsError || categoriesError) return <div>Error occurred while fetching data</div>;
  if (!plants || !categories) return <div>Loading...</div>;
  
  const categoryColor =  categories.find((category) => category.slug === plant.categorySlug).bgcolor;


  return (
    <StyledListItem>
      <FavoriteButton
        onClick={() => onToggleFavorite(plant._id)}
        isFavorite={isFavorite}
      />
      <StyledLink href={`/plants/${plant?._id}`}>
        <StyledFigure $categoryColor={categoryColor}>
          <Image
            src={plant?.image}
            width={150}
            height={150}
            alt={plant?.commonName}
          />
          <StyledCaption>{plant?.commonName}</StyledCaption>
        </StyledFigure>
      </StyledLink>
    </StyledListItem>
  );
}

const StyledListItem = styled.li`
  position: relative;
`;

const StyledFigure = styled.figure`
  margin: 0;
  width: 9rem;
  height: 13rem;
  border-radius: 1rem;
  border: 2px solid var(--color-grey);
  overflow: hidden;
  background-color: ${(props) => props.$categoryColor};
`;

const StyledCaption = styled.figcaption`
  text-align: center;
  margin: 0.25rem;
`;

const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: var(--color-black);
`;
