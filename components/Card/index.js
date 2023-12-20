import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";


export default function PlantCard({ onToggleFavorite, isFavorite, plant }) {

  return (
    <StyledListItem>
        <FavoriteButton
          onClick={() => onToggleFavorite(plant.id)}
          isFavorite={isFavorite}
        />
      <StyledLink href={`plants/${plant?.id}`}>
        <StyledFigure>
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
  border: 2px solid #e6e6e6;
  overflow: hidden;
  background-color: var(--color-beige);
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

const ErrorMessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

const ErrorMessage = styled.p`
  color: black;
  font-weight: bold;
  margin-top: 80px;
`;

const NoMatches = styled.p`
  text-align: center;
  margin: 1rem auto;
  color: red;
  max-width: 19rem;
`;
