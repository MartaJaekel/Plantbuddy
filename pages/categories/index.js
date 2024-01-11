import React from "react";
import Link from "next/link";
import styled from "styled-components";
import useSWR from "swr";
import { StyledHeadline } from "@/components/Headline/StyledHeadline";

export default function CategoriesOverview({theme}) {
  const { data: categories, error: categoriesError } = useSWR(`/api/categories`);

  if (categoriesError) return <div>Error occurred while fetching data</div>;
  if (!categories) return <div>Loading...</div>;

  return (
    <>
      <StyledHeadline>PlantBuddy</StyledHeadline>
      <StyledTitle>Categories</StyledTitle>
      <main>
        <StyledPlantList>
          {categories.map((category) => (
            <StyledLink key={category._id} href={`/categories/${category.slug}`}>
              <CategoryCard $bgcolor={theme === "light" ? category.bgcolor : category.bgcolorDark}>
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
  border: 2px solid ${({ theme }) => theme.cardBorder};
  padding: 1rem;
  background-color: ${(props) => props.$bgcolor};
`;

const StyledLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: ${({ theme }) => theme.infoText};
  font-weight: 600;
`;
