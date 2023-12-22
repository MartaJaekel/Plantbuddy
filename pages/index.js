import PlantList from "@/components/PlantList";
import React, { useEffect, useState } from "react";
import SearchField from "@/components/SearchField";
import { StyledHeadline } from "@/components/Headline/StyledHeadline";
import styled from "styled-components";
import { plants } from "@/lib/data";
import SortPlants from "@/components/SortPlants";

export default function HomePage({ onToggleFavorite, favorites, plants }) {
  const [search, setSearch] = useState("");
  const [counterMessage, setCounterMessage] = useState("");
  const [sortPlants, setSortPlants] = useState(plants); 

  const searchResult = plants.filter((plant) => {
    return plant.commonName.toLowerCase().startsWith(search.toLowerCase());
  });
  useEffect(() => {
    if (searchResult.length > 0 && searchResult.length < plants.length) {
      setCounterMessage(
        `Showing ${searchResult.length} of ${plants.length} plants:`
      );
    } else if (searchResult.length === plants.length) {
      setCounterMessage("");
    }
  }, [searchResult, plants.length]);

  function handleSortUpdate (newSortedPlants) {
    setSortPlants(newSortedPlants);
  };

  return (
    <>
      <StyledHeadline>PlantBuddy</StyledHeadline>
      <main>
        <SearchField onChange={setSearch} />
        <SortPlants onSortUpdate={handleSortUpdate} />
        <StyledCounterMessage>{counterMessage}</StyledCounterMessage>


        <PlantList
          onToggleFavorite={onToggleFavorite}
          favorites={favorites}
          plants={plants}
          search={search}
          searchResult={searchResult}
          sortedPlants={sortPlants}
        
        />
      </main>
    </>
  );
}

const StyledCounterMessage = styled.p`
  margin: 1rem auto;
  max-width: 19rem;
  color: var(--color-green);
  font-weight: 600;
`;
