import React from "react";
import PlantCard from "@/components/Card";
import styled from "styled-components";
import { StyledHeadline } from "@/components/Headline/StyledHeadline";

export default function FavoritePage({ plants, favorites, onToggleFavorite }) {
  const favoritePlants = plants.filter((plant) => favorites.includes(plant.id));

  return (
    <>
      <StyledHeadline>PlantBuddy</StyledHeadline>
      <main>
        <StyledTitle>Your Favorite Plants</StyledTitle>
        {favoritePlants.length === 0 ? (
          <StyledArticle>
            <p>At the moment you do not have any favorite plants.</p>
            <p>
              Start adding your <StyledSpan>first</StyledSpan> favorite!
            </p>
          </StyledArticle>
        ) : (
          <StyledPlantList>
            {favoritePlants.map((plant) => (
              <PlantCard
                plant={plant}
                key={plant.id}
                isFavorite={favorites.includes(plant.id)}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </StyledPlantList>
        )}
      </main>
    </>
  );
}

const StyledTitle = styled.h2`
  text-align: center;
  margin-top: 6rem;
  font-size: 1.25rem;
  color: var(--color-green);
`;

const StyledArticle = styled.article`
  text-align: center;
  line-height: 1;
  padding: 1rem;
`;

const StyledPlantList = styled.ul`
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const StyledSpan = styled.span`
  font-family: serif;
  font-style: italic;
`;
