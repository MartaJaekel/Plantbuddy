import Image from "next/image";
import styled from "styled-components"

export default function FavoriteButton({ onClick, isFavorite }) {
  return (
    <StyledButton type="button" onClick={onClick}>
      <Image
        src={isFavorite ? "/assets/HeartIconLiked.svg" : "/assets/HeartIconDisliked.svg"}
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
