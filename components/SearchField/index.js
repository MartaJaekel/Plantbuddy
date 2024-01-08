import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";

export default function SearchField({ onChange }) {
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
        <StyledImage
          $icon={icon}
          onClick={clearInput}
          src={
            icon === "search"
              ? "/assets/magnifyingGlass.svg"
              : "/assets/x-mark.svg"
          }
          alt="Search Icon"
          width={30}
          height={30}
        />

      <SearchFieldInput
        type="search"
        id="search"
        placeholder="Search for plants"
        onChange={handleOnChange}
      />
    </InputWrapper>
  );
}

const StyledImage = styled(Image)`
  cursor: ${({ $icon }) => ($icon === "clear-search" ? "pointer" : "")};
  position: absolute;
  right: 28px;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 39px;
  overflow: hidden;
  background-color: none;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  padding: 0 1rem;
  max-width: 21rem;
  margin: 6rem auto 0 auto;
`;

const SearchFieldInput = styled.input`
  border-radius: 0.4rem;
  padding: 0.8rem;
  background-color: ${({ theme }) => theme.primaryGreen};
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
