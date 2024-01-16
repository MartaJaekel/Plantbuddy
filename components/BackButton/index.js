import Image from "next/image";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <StyledBackButton type="button" aria-label="Go Back" onClick={goBack}>
      <StyledImageContainer>
      <StyledImage
          src="/assets/ArrowIcon.svg"
          alt="Back Link"
          width={20}
          height={20}
        />
      </StyledImageContainer>
    </StyledBackButton>
  );
}

const StyledBackButton = styled.button`
  position: absolute;
  top: 1.75rem;
  left: 1rem;
  background: none;
  border: none;
  z-index: 3;
`;

const StyledImageContainer = styled.div`
  background-color: ${({ theme }) => theme.primaryGreen};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: relative;
`
const StyledImage = styled(Image)`
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);
`;
