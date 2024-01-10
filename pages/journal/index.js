import React from "react";
import Link from "next/link";
import { StyledHeadline } from "@/components/Headline/StyledHeadline";
import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";
import EntryCard from "@/components/JournalEntryCard";

export default function JournalOverviewPage({ entries }) {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  console.log(entries);

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
        <StyledLink href="/journal/entry">
          <StyledButton>Create a new Entry</StyledButton>
        </StyledLink>
        <StyledEntriesContainer>
          <ul>
            {entries.length > 0 ? (
              entries.map((entry) => (
                <li key={entry.id}>
                  <StyledLink href={`/journal/${entry.id}`}>
                    <EntryCard entry={entry} />
                  </StyledLink>
                </li>
              ))
            ) : (
              <StyledParagraph>
                You don&apos;t have any entries yet
                <br />
                start with your first entry.
              </StyledParagraph>
            )}{" "}
          </ul>
        </StyledEntriesContainer>
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
  width: 9rem;
  color: white;
  font-weight: 600;
  border-radius: 8px;
  padding: 0.6rem 0.4rem;
  cursor: pointer;
  background-color: var(--color-green);
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
const StyledEntriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledParagraph = styled.p`
  text-align: center;
  margin-top: 50px;
`;
