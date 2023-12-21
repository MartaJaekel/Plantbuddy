import React from "react";
import Link from "next/link";
import { plants } from "@/lib/data";
import styled from "styled-components";

export default function CategoriesOverview() {
  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <>
      <StyledHeader>PlantBuddy</StyledHeader>
      <StyledTitle>Categories</StyledTitle>

      <main>
          <StyledPlantList>
            {categories.map((category) => (
              <li key={category}>
                <Link href={`/categories/${category}`}>
                  <p>{category}</p>
                </Link>
              </li>
            ))}
          </StyledPlantList>
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

const StyledPlantList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;
