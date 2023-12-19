import { plants as plantsData } from "@/lib/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";

export default function PlantCard({ search, plantsToDisplay,sortedPlants}) {
 
 
    const searchResult = plantsData.filter((plant) => {
      return plant.commonName.toLowerCase().startsWith(search.toLowerCase());
    });
    
    const sortedAndFilteredPlants = sortedPlants.filter((plant) => 
    plant.commonName.toLowerCase().startsWith(search.toLowerCase())
    //sortedPlants.filter((plant) error message , the problem was that sorted plants was not an array so i had 
    //to change ste useState in the homepage for sortPlants from "A-Z" to []
  );
    const error = search.length > 0 && searchResult.length === 0;
   
  
  
  if (error) {
    return (
      <ErrorMessageContainer>
        <ErrorMessage>
          sorry we could not find <br /> anything with the name
          <br /> {search}
        </ErrorMessage>
      </ErrorMessageContainer>
    );
  }
  
  if (plantsToDisplay.length === 0) {
    return <NoMatches>Apologies, but we couldn&apos;t find any plants in our database that align with your filter criteria.</NoMatches>
  }

  return (
    <StyledList>
      { search.length === 0  ? (
       sortedAndFilteredPlants.map((plant) => (
        <StyledLink key={plant.id} href={`plants/${plant.id}`}>
          <li>
            <StyledFigure>
              <Image
                src={plant.image}
                width={150}
                height={150}
                alt={plant.commonName}
              />
              <StyledCaption>{plant.commonName}</StyledCaption>
            </StyledFigure>
          </li>
        </StyledLink>
      ))
      ) : (
        searchResult.map((plant) => (
          <StyledLink key={plant.id} href={`plants/${plant.id}`}>
            <li>
              <StyledFigure>
                <Image
                  src={plant.image}
                  width={150}
                  height={150}
                  alt={plant.commonName}
                />
                <StyledCaption>{plant.commonName}</StyledCaption>
              </StyledFigure>
            </li>
          </StyledLink>
        ))
      )
    }
    </StyledList>
  );
}

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const StyledFigure = styled.figure`
  margin: 0;
  width: 9rem;
  height: 13rem;
  border-radius: 1rem;
  border: 2px solid #e6e6e6;
  overflow: hidden;
  background-color: var(--color-beige);
`;

const StyledCaption = styled.figcaption`
  text-align: center;
  margin: 0.25rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-black);
`;

const ErrorMessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

const ErrorMessage = styled.p`
  color: black;
  font-weight: bold;
  margin-top: 80px;
`;

const NoMatches = styled.p`
  text-align: center;
  margin: 1rem auto;
  color: red;
  max-width: 19rem;
`;
