import styled from "styled-components";
import { plants as plantsData } from "@/lib/data";
import { useState } from "react";
export default function SortPlants({onSortUpdate, defaultOption }) {
    const [selectedOption, setSelectedOption] = useState(defaultOption);
    
    const handleSortingChange = (option) => {
        
        let sortedPlants;
        if (option === 'Z to A') {
            
            sortedPlants = [...plantsData].sort((a, b) => (b.name > a.name ? 1 : -1));
            
          }  else if (option === 'S to L') {
            sortedPlants = [...plantsData].sort((a, b) => { return b.size > a.size ? 1 : b.size < a.size ? -1 : 0;

           
          })}
          else if (option === 'L to S') {
            sortedPlants = [...plantsData].sort((a, b) => { return a.size > b.size ? 1 : a.size < b.size ? -1 : 0;
          })}
          else {
            // If none of the specific cases match, use the default case
            // Keep the original order of the plant data
            sortedPlants = [...plantsData];
          }
          setSelectedOption(option);
onSortUpdate(sortedPlants);
    }
  
  return (
    <Form>
      <label htmlFor="sort">Sort</label>
      <select name="sort" onChange={(event) => handleSortingChange(event.target.value)} value={selectedOption}>
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
  margin: 1rem auto 1rem auto;
`;
