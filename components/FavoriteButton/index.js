import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function FavoriteButton({ onClick, isFavorite }) {
  const router = useRouter();

  return (
    <StyledButton type="button" onClick={onClick} router={router}>
      <Image
        src={
          isFavorite
            ? "/assets/HeartIconLiked.svg"
            : "/assets/HeartIconDisliked.svg"
        }
        alt="Favorite Icon"
        width={router.pathname === "/plants/[_id]" ? 40 : 30}
        height={router.pathname === "/plants/[_id]" ? 40 : 30}
      />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  z-index: 1;
  display: flex;
  border: 0;
  background: none;
  padding: 0;
  position: absolute;
  top: ${({router}) => router.pathname === "/plants/[_id]" ? "1.25rem" : "0.5rem"};
  right: ${({router}) => router.pathname === "/plants/[_id]" ? "1rem" : "0.5rem"};
  border-radius: 50%; 
  padding: 0.2rem; 
  background-color: transparent;
`;

