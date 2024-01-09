import React from "react";
import Link from "next/link";
import { StyledHeadline } from "@/components/Headline/StyledHeadline";
import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";

export default function JournalPage() {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  return (
    <>
      <StyledHeadline>PlantBuddy</StyledHeadline>
      <StyledBackButton type="button" aria-label="Go Back" onClick={goBack}>
        <Image
          src="/assets/ArrowIcon.svg"
          alt="Back Link"
          width={25}
          height={20}
        />
      </StyledBackButton>
      <main>
        <StyledTitle>Plant Journal </StyledTitle>
        <StyledLink href="/journal/entry" passHref>
          <StyledButton>Create a new Entry</StyledButton>
        </StyledLink>
      </main>
    </>
  );
}

const StyledTitle = styled.h2`
  text-align: center;
  margin-top: 6rem;
  margin-bottom: 2rem;
  font-size: 1.5;
  color: var(--color-green);
`;
const StyledButton = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 3rem;
  color: green;
  font-size: 0.5;
  padding: 1rem 2rem;
  background-color: #abc32f;
`;
const StyledLink = styled.a`
  text-decoration: none;
`;
const StyledBackButton = styled.button`
  position: absolute;
  top: 1.75rem;
  left: 1rem;
  font-size: 2rem;
  background-color: var(--color-green);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  border: none;
  z-index: 2;
`;
