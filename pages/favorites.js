import React from "react";
import PlantCard from "@/components/Card";
import styled from "styled-components";
import Headline from "@/components/Headline";
import Login from "@/components/Login";
import { useSession } from "next-auth/react";
import { StyledTitle } from "@/components/Title/StyledTitle";
import Header from "next/head";


export default function FavoritePage({
  plants,
  favorites,
  onToggleFavorite,
  theme,
}) {
  const favoritePlants = plants.filter((plant) =>
    favorites.includes(plant._id)
  );
  const { status } = useSession();

  return (
    <>
    <Header>
      <title>Favorites</title>
    </Header>
      <Headline />
      <main>
        <StyledTitle>Your Favorite Plants</StyledTitle>
        {status !== "authenticated" ? (
          <Login />
        ) : favoritePlants.length === 0 ? (
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
                key={plant._id}
                isFavorite={favorites.includes(plant._id)}
                onToggleFavorite={onToggleFavorite}
                theme={theme}
              />
            ))}
          </StyledPlantList>
        )}
      </main>
    </>
  );
}

const StyledArticle = styled.article`
  text-align: center;
  line-height: 1;
  padding: 1rem;
  color: ${({ theme }) => theme.primaryGreen};
`;

const StyledPlantList = styled.ul`
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  max-width: 41rem;
  margin: 0 auto;

  @media (min-width: 1024px) {
    max-width: 61rem;
  }
`;

const StyledSpan = styled.span`
  font-family: serif;
  font-style: italic;
`;