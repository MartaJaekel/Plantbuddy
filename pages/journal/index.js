import React from "react";
import Link from "next/link";
import { StyledHeadline } from "@/components/Headline/StyledHeadline";
import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";
import EntryCard from "@/components/JournalEntryCard";
import Header from "next/head";

export default function JournalOverviewPage({ entries }) {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  return (
    <>
    <Header>
      <title>Create Entry</title>
    </Header>
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
          {entries.length > 0 ? (
            entries.map((entry) => (
              <StyledEntries key={entry.id}>
                <StyledLink href={`/journal/${entry.id}`}>
                  <EntryCard entry={entry} />
                </StyledLink>
              </StyledEntries>
            ))
          ) : (
            <StyledParagraph>
              You don&apos;t have any entries yet
              <br />
              start with your first entry.
            </StyledParagraph>
          )}
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
  color: ${({ theme }) => theme.primaryGreen};
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
  background-color: ${({ theme }) => theme.primaryGreen};
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0 auto;
  max-width: 316px;
  display: block;
`;
const StyledBackButton = styled.button`
  position: absolute;
  top: 1.75rem;
  left: 1rem;
  font-size: 2rem;
  background-color: ${({ theme }) => theme.primaryGreen};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  border: none;
  z-index: 2;
`;
const StyledEntriesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledEntries = styled.li`
  width: 100%;
`;

const StyledParagraph = styled.p`
  text-align: center;
  margin-top: 50px;
  color: ${({ theme }) => theme.formText};
`;
