import React from "react";
import Link from "next/link";
import { categories } from "@/lib/data-categories";
import styled from "styled-components";
import { StyledHeadline } from "@/components/Headline/StyledHeadline";

export default function CategoriesOverview() {

  return (
    <>
      <StyledHeadline>PlantBuddy</StyledHeadline>
      <StyledTitle>Categories</StyledTitle>
      <main>
        <StyledPlantList>
          {categories.map((category) => (
            <StyledLink key={category.id} href={`/categories/${category.slug}`}>
              <CategoryCard $bgcolor={category.bgcolor}>
                <p>{category.title}</p>
              </CategoryCard>
            </StyledLink>
          ))}
        </StyledPlantList>
      </main>
    </>
  );
}


const StyledTitle = styled.h2`
  text-align: center;
  margin-top: 6rem;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.primaryGreen};
`;

const StyledPlantList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const CategoryCard = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 9rem;
  height: 9rem;
  border-radius: 1rem;
  border: 2px solid var(--color-grey);
  padding: 1rem;
  background-color: ${(props) => props.$bgcolor};
`;

const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.infoText};
  font-weight: 600;
`;
