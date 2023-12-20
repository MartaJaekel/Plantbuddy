import PlantList from "@/components/PlantList";
import React, { useState } from "react";
import SearchField from "@/components/SearchField";
import { StyledHeadline } from "@/components/Headline/StyledHeadline";

export default function HomePage({ onToggleFavorite, favorites, plants }) {
  const [search, setSearch] = useState("");

  return (
    <>
      <StyledHeadline>PlantBuddy</StyledHeadline>
      <main>
        <SearchField onChange={setSearch} />
        <PlantList
          onToggleFavorite={onToggleFavorite}
          favorites={favorites}
          plants={plants}
          search={search}
        />
      </main>
    </>
  );
}
