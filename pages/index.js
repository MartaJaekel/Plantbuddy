import PlantList from "@/components/PlantList";
import React, { useState } from "react";
import SearchField from "@/components/SearchField";
import { StyledHeadline } from "@/components/Headline/StyledHeadline";
import styled from "styled-components";
import SortPlants from "@/components/SortPlants";
import Image from "next/image";

export default function HomePage({
  onToggleFavorite,
  favorites,
  plants,
  theme,
  toggleTheme,
}) {
  const [search, setSearch] = useState("");
  const [sortPlants, setSortPlants] = useState(plants);

  const searchResult = plants.filter((plant) => {
    return plant.commonName.toLowerCase().startsWith(search.toLowerCase());
  });
  function handleSortUpdate(newSortedPlants) {
    setSortPlants(newSortedPlants);
  }

  return (
    <>
      <StyledHeadline>PlantBuddy</StyledHeadline>
      <StyledThemeToggler onClick={toggleTheme}>
          {" "}
          {theme === "light" ? (
            <Image
              src="/assets/DarkModeIcon.svg"
              alt="Darkmode Icon"
              width={25}
              height={25}
            />
          ) : (
            <Image
              src="/assets/LightModeIcon.svg"
              alt="Lightmode Icon"
              width={25}
              height={25}
            />
          )}
        </StyledThemeToggler>
      <main>
        <SearchField onChange={setSearch} />
        {search === "" && (
          <SortPlants onSortUpdate={handleSortUpdate} plants={plants} />
        )}
        <PlantList
          onToggleFavorite={onToggleFavorite}
          favorites={favorites}
          plants={plants}
          search={search}
          searchResult={searchResult}
          sortedPlants={sortPlants}
          theme={theme}
        />
      </main>
    </>
  );
}

const StyledThemeToggler = styled.button`
  position: fixed;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 2;
  border: 0;
  background: none;
  padding: 0;
`;
