import styled from "styled-components";
import { useState } from "react";
import DeletePopup from "../DeletePopup";
import Image from "next/image";
import Link from "next/link";

export default function EntryCard({ entry, onDeleteEntry, url }) {
  const [showPopup, setShowPopup] = useState(false);
  const confirmDelete = (event) => {
    event.preventDefault();
    setShowPopup(true);
  };

  const handleConfirm = (event) => {
    event.preventDefault();
    onDeleteEntry(entry.id);
    setShowPopup(false);
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setShowPopup(false);
  };

  return (
    <StyledEntryCard>
      <StyledLink href={`/journal/${entry.id}`}>
        <StyledEntryImage
          src={url}
          width={100}
          height={100}
          alt="Uploaded Image"
        />
        <StyledEntryInfo lang="en">{entry.name}</StyledEntryInfo>
      </StyledLink>
      <StyledDeleteButton
        type="button"
        aria-label="Delete Preference"
        onClick={confirmDelete}
      >
        <Image
          src="/assets/x-mark.svg"
          alt="Delete Icon"
          width={20}
          height={20}
        />
      </StyledDeleteButton>
      {showPopup && (
        <DeletePopup
          name="entry"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </StyledEntryCard>
  );
}
const StyledEntryCard = styled.figure`
  position: relative;
  border: 2px solid ${({ theme }) => theme.cardBorder};
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  background-color: ${({ theme }) => theme.primaryGreen};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const StyledEntryImage = styled.img`
  margin-right: 16px;
  object-fit: cover;
`;

const StyledEntryInfo = styled.figcaption`
  color: ${({ theme }) => theme.white};
  margin: 0.25rem;
  hyphens: auto;
  max-width: 7rem;
  overflow-x: hidden;
`;

const StyledDeleteButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: 0;
  background: none;
  padding: 0;
`;
