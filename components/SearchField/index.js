import styled from "styled-components";
import MagnifyingGlass from "../../assets/magnifying-glass.svg"
import Image from "next/image";
export default function SearchField({onChange}) {
    function handleOnChange(event) {
        onChange(event.target.value)
    }
  return (
    <InputWrapper>
      <span
        style={{
          position: 'absolute',
          left: '15px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '30px', 
          height: '42px',
          overflow: "hidden",
          backgroundColor: "#8fa871",
          borderRadius: "0.4rem",
          display: "flex",
          alignItems: "center"

  
        }}
      >
        <MagnifyingGlass />
      </span>
      <SearchFieldInput
        type="search"
        id="search"
        placeholder="Search for plants"
        onChange={handleOnChange}
      />
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
 position: relative;
  display: flex;
  flex-flow: column;
  padding: 1rem;
`;

const SearchFieldInput = styled.input`
  border-radius: 0.4rem;
  
  padding: 0.8rem;
  background-color: #a4bf86;
  color: var(--color-beige);
  border: 2px solid #a4bf86;
  padding-left: 40px;
  

 
`;
