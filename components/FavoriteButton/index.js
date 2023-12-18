import Disliked from "@/assets/HeartIconDisliked.svg?url";
import Liked from "@/assets/HeartIconLiked.svg?url";
import Image from "next/image";
import React from "react";
import styled from "styled-components"

export default function FavoriteButton({ onClick, isFavorite }) {
  return (
    <StyledButton type="button" onClick={onClick}>
      <Image
        src={isFavorite ? Liked : Disliked}
        alt="Favorite Icon"
        width={30}
        height={30}
      />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  z-index: 1;
  border: 0;
  background: none;
  padding: 0;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;
