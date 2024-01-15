import React from "react";
import Link from "next/link";
import { StyledHeadline } from "@/components/Headline/StyledHeadline";
import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";
import EntryCard from "@/components/JournalEntryCard";

export default function JournalOverviewPage({ entries, handleDeleteEntry }) {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  return (
    <>
      <StyledHeadline>PlantBuddy</StyledHeadline>
      <main>
        <StyledTitle>Plant Journal</StyledTitle>
        <StyledLink href="/journal/entry">
          <StyledButton>Create a new Entry</StyledButton>
        </StyledLink>
        <StyledEntriesContainer>
          {entries.length > 0 ? (
            entries.map((entry) => (
              <StyledEntries key={entry.id}>
                  <EntryCard entry={entry} onDeleteEntry={handleDeleteEntry} />
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
  margin: 6rem 0 2rem 0;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.primaryGreen};
`;
const StyledButton = styled.button`
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.button};
  border: none;
  display: block;
  margin: 0 auto;
  width: 9rem;
  font-weight: 600;
  border-radius: 8px;
  padding: 0.6rem 0.4rem;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0 auto;
  max-width: 316px;
  display: block;
`;

const StyledEntriesContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  max-width: 20rem;
  margin: 1rem auto;
  padding: 1rem 0;
`;

const StyledEntries = styled.li`
  width: 100%;
`;

const StyledParagraph = styled.p`
  text-align: center;
  margin-top: 50px;
  color: ${({ theme }) => theme.formText};
`;
