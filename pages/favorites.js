import React from "react";
import PlantCard from "@/components/Card";
import styled from "styled-components";

export default function FavoritePage({ plants, favorites, onToggleFavorite }) {
  const favoritePlants = plants.filter((plant) => favorites.includes(plant.id));

  return (
    <>
      <StyledHeader>PlantBuddy</StyledHeader>
      <StyledTitle>Your Favorite Plants</StyledTitle>

      <main>
        {favoritePlants.length === 0 ? (
          <StyledArticle>
            <p>You have not saved any favorite Plants.</p>
            <p>Start adding your first favorite!</p>
          </StyledArticle>
        ) : (
          <ul>
            {favoritePlants.map((plant) => (
              <PlantCard
                key={plant.id}
                favorites={favorites}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </ul>
        )}
      </main>
    </>
  );
}

const StyledHeader = styled.h1`
  z-index: 1;
  position: fixed;
  top: 0;
  background-color: white;
  width: 100%;
  text-align: center;
  color: var(--color-green);
  font-family: serif;
  font-size: 3rem;
  margin: 0;
  padding: 1rem;
`;

const StyledTitle = styled.h1`
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
