import styled from "styled-components";

export default function SearchField({onChange}) {
    function handleOnChange(event) {
        onChange(event.target.value)
    }
  return (
    <InputWrapper>
      <label htmlFor="search"></label>
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
  display: flex;
  flex-flow: column;
  padding: 1rem;
`;

const SearchFieldInput = styled.input`
  border-radius: 0.4rem;
  padding: 0.8rem;
  background-color: var(--color-green);
  color: var(--color-beige);
  border: none;

  &::placeholder {
    color: #c0c0c0;
  }
`;
