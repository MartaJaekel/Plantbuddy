import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import DeletePopup from "../DeletePopup";

export default function PreferenceCard({ preference, onDeletePreference }) {
  const [showPopup, setShowPopup] = useState(false);

  const confirmDelete = () => {
    setShowPopup(true);
  };

  const handleConfirm = () => {
    onDeletePreference(preference.id);
    setShowPopup(false);
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  return (
    <StyledPreferenceCard>
      <StyledLink href={`preferences/${preference?.id}`}>
        {preference?.preferenceTitle}
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
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </StyledPreferenceCard>
  );
}

const StyledPreferenceCard = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.primaryGreen};
  padding: 0.6rem 1.5rem;
  border-radius: 8px;
  border: none;
  width: 14.5rem;
`;

const StyledLink = styled(Link)`
  color: var(--color-beige);
  font-weight: 600;
  font-size: 0.8rem;
  cursor: pointer;
  max-width: 19rem;
  text-decoration: none;
  display: block;
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
