import styled from "styled-components";
import { useState } from "react";

export default function SortPlants({ onSortUpdate, plants }) {
  const [selectedOption, setSelectedOption] = useState("A to Z");

  const handleSortingChange = (option) => {
    setSelectedOption(option);

    let sortedPlants;
    const lowerCaseCommonName = (plant) => plant.commonName.toLowerCase();
    const sizeOrder = { small: 0, medium: 1, large: 2 };

    if (option === "Z to A") {
      sortedPlants = [...plants].sort((a, b) =>
        lowerCaseCommonName(a) < lowerCaseCommonName(b)
          ? 1
          : lowerCaseCommonName(a) > lowerCaseCommonName(b)
          ? -1
          : 0
      );
    } else if (option === "S to L") {
      sortedPlants = [...plants].sort(
        (a, b) => sizeOrder[a.size] - sizeOrder[b.size]
      );
    } else if (option === "L to S") {
      sortedPlants = [...plants].sort(
        (a, b) => sizeOrder[b.size] - sizeOrder[a.size]
      );
    } else {
      sortedPlants = [...plants].sort((a, b) =>
        lowerCaseCommonName(a) > lowerCaseCommonName(b)
          ? 1
          : lowerCaseCommonName(a) < lowerCaseCommonName(b)
          ? -1
          : 0
      );
    }

    onSortUpdate(sortedPlants);
  };

  return (
    <Form>
      <label htmlFor="sort">Sort</label>
      <select
        name="sort"
        id="sort"
        onChange={(event) => handleSortingChange(event.target.value)}
        value={selectedOption}
      >
        <option value="A to Z">Name: A-Z</option>
        <option value="Z to A">Name: Z-A</option>
        <option value="S to L">Size: S-L</option>
        <option value="L to S">Size: L-S</option>
      </select>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  max-width: 19rem;
  margin: 1rem auto;
`;
