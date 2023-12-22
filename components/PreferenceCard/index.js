import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function PreferenceCard({ preference, onDeletePreference }) {
  const router = useRouter();

  const confirmDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this Preference?"
    );
    if (confirmed) {
      onDeletePreference(preference.id);
      router.push("/");
    }
  };

  return (
    <>
      <StyledLink href={`preferences/${preference?.id}`}>
        {preference?.preferenceTitle}
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
      </StyledLink>
    </>
  );
}

const StyledLink = styled(Link)`
  position: relative;
  background-color: var(--color-green);
  padding: 0.6rem 1.5rem;
  border-radius: 8px;
  color: var(--color-beige);
  border: none;
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
