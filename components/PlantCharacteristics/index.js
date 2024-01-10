import Image from "next/image";
import styled from "styled-components";

export default function PlantCharacteristics({
  headline,
  imageAlt,
  imageSrc,
  info,
}) {
  return (
    <StyledCharacteristic>
      <Image src={imageSrc} alt={imageAlt} width={30} height={30} />
      <figcaption>
        <StyledCharacterHeadline>{headline}</StyledCharacterHeadline>
        <StyledCharacterInfo>{info}</StyledCharacterInfo>
      </figcaption>
    </StyledCharacteristic>
  );
}

const StyledCharacteristic = styled.figure`
  width: 130px;
  display: flex;
  gap: 0.75rem;
  margin: 0;
  align-items: center;
`;
const StyledCharacterHeadline = styled.h3`
  font-size: 0.9rem;
  margin: 0;
`;

const StyledCharacterInfo = styled.p`
  margin: 0;
  font-size: 0.8rem;
`;
