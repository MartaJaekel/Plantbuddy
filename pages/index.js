import PlantCard from "@/components/Card";
import SearchField from "@/components/SearchField";
import { useState } from "react";
import styled from "styled-components";

export default function HomePage() {
  const [search, setSearch] = useState("");
  return (
    <>
      <StyledHeader>PlantBuddy</StyledHeader>
      <HeaderSpacing />
      <SearchField onChange={setSearch} />
      <PlantCard search={search} />
    </>
  );
}

const HeaderSpacing = styled.div`
  margin-top: 6rem;
`;

const StyledHeader = styled.h1`
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
  z-index: 1;
`;
