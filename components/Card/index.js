import { plants } from "@/lib/data";
import Image from "next/image";
import styled from "styled-components";

export default function PlantCard() {
  return (
    <StyledList>
      {plants.map((plant) => (
        <li key={plant.id}>
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
      ))}
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
