import heartOutlineURL from "@/assets/HeartIcon_Outline.svg?url";
import heartFilledURL from "@/assets/HeartIcon_Filled.svg?url";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

export default function FavoriteButton({ onClick, isFavorite }) {
  return (
    <StyledButton type="button" onClick={onClick}>
      <Image
        src={isFavorite ? heartFilledURL : heartOutlineURL}
        alt="Favorite Icon"
        width={40}
        height={40}
      />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  border: 0;
  background-color: transparent;
  padding: 0;
`;
