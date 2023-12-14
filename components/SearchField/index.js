import styled from "styled-components";
import MagnifyingGlass from "../../assets/magnifying-glass.svg";
import XMark from "../../assets/x-mark.svg";
import { useRef, useState } from "react";

export default function SearchField({ onChange }) {
  const SearchIcon = <MagnifyingGlass />;
  const ClearSearchIcon = <XMark />;

  const [icon, setIcon] = useState("search");
  
  function handleOnChange(event) {
    const searchValue = event.target.value;
    onChange(searchValue);
    if (searchValue.length > 0) {
      setIcon("clear-search");
    } else {
      setIcon("search");
    }
  }

  function clearInput() {
    if (icon === "clear-search") {
     
      onChange("");
      setIcon("search");
      document.getElementById("search").value = "";
    }
  }

  return (
    <InputWrapper>
      <InputIcon
        icon={icon}
        onClick={clearInput}
      >
        {icon === "search" ? SearchIcon : ClearSearchIcon}
      </InputIcon>

      <SearchFieldInput
       
        type="search"
        id="search"
        placeholder="Search for plants"
        onChange={handleOnChange}
      />
    </InputWrapper>
  );
}

const InputIcon = styled.span`
  cursor: ${({icon}) => icon === "clear-search" ? "pointer" : ""};
  position: absolute;
  right: 28px;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 39px;
  overflow: hidden;
  background-color: #426b1f;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  padding: 1rem;
  max-width: 21rem;
  margin: 0 auto;
`;

const SearchFieldInput = styled.input`
  border-radius: 0.4rem;
  padding: 0.8rem;
  background-color: var(--color-green);
  border: none;
  padding-left: 40px;
  color: white;

  &::placeholder {
    color: white;
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
`;
