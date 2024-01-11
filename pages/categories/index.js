import React from "react";
import Link from "next/link";
import styled from "styled-components";
import useSWR from "swr";

export default function CategoriesOverview() {
  const { data: categories, error: categoriesError } = useSWR(`/api/categories`);

  if (categoriesError) return <div>Error occurred while fetching data</div>;
  if (!categories) return <div>Loading...</div>;

  return (
    <>
      <StyledHeader>PlantBuddy</StyledHeader>
      <StyledTitle>Categories</StyledTitle>
      <main>
        <StyledPlantList>
          {categories.map((category) => (
            <StyledLink key={category._id} href={`/categories/${category.slug}`}>
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

const StyledTitle = styled.h2`
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

const CategoryCard = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 9rem;
  height: 9rem;
  border-radius: 1rem;
  border: 2px solid #e6e6e6;
  padding: 1rem;
  background-color: ${(props) => props.$bgcolor};
`;

const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: var(--color-black);
  font-weight: 600;
`;
