import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Headline from "@/components/Headline";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function EntryForm({ onFormSubmit }) {
  const { status } = useSession();
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [careTipps, setCareTipps] = useState("");
  const [location, setLocation] = useState("");

  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  function handleSubmit(event) {
    event.preventDefault();
    const entry = {
      url,
      name,
      description,
      careTipps,
      location,
    };
    onFormSubmit(entry);
    router.push("/journal");
  }
  function handleReset(event) {
    event.target.reset();
  }

  return (
    <>
      <Headline />
      <StyledBackButton
        type="button"
        aria-label="Go Back"
        onClick={goBack}
        status={status}
      >
        <Image
          src="/assets/ArrowIcon.svg"
          alt="Back Link"
          width={25}
          height={20}
        />
      </StyledBackButton>
      <main>
        <StyledTitle>Plant Journal</StyledTitle>
        <StyledForm onSubmit={handleSubmit} onReset={handleReset}>
          <StyledLabel htmlFor="url">URL</StyledLabel>
          <StyledInput
            type="url"
            id="url"
            name="url"
            placeholder="Image Upload URL"
            onChange={(event) => setUrl(event.target.value)}
            required
          />
          <StyledLabel htmlFor="name">Name</StyledLabel>
          <StyledInput
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
            minLength="3"
            maxLength="20"
            required
          />
          <StyledLabel htmlFor="description">Description</StyledLabel>
          <StyledTextarea
            type="text"
            id="description"
            name="description"
            minLength="3"
            maxLength="300"
            placeholder="Description"
            onChange={(event) => setDescription(event.target.value)}
          />
          <StyledLabel htmlFor="care">Care</StyledLabel>
          <StyledTextarea
            type="text"
            id="care"
            name="care"
            minLength="3"
            maxLength="300"
            placeholder="Care Tipps"
            onChange={(event) => setCareTipps(event.target.value)}
          />
          <StyledLabel htmlFor="location">Location</StyledLabel>
          <StyledInput
            type="text"
            id="location"
            name="location"
            minLength="3"
            maxLength="40"
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)}
          />

          <StyledButtonContainer>
            <StyledButton type="reset">Cancel</StyledButton>
            <StyledButton type="submit">Save</StyledButton>
          </StyledButtonContainer>
        </StyledForm>
      </main>
    </>
  );
}

const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  max-width: 19rem;
  margin: 3rem auto;
  padding: 0rem 0rem 2rem 0;
  border-bottom: 2px ${({ theme }) => theme.dividerDetails};
`;
const StyledLabel = styled.label`
  border: 0;
  padding: 0;
  margin: 0;
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  white-space: nowrap;
`;
const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.formField};
  padding: 0.6rem 1.5rem;
  border-radius: 8px;
  color: ${({ theme }) => theme.formText};
  border: solid 1px ${({ theme }) => theme.cardBorder};
  font-weight: 600;
  cursor: pointer;

  &::placeholder {
    color: ${({ theme }) => theme.formTitle};
    font-weight: 600;
  }
`;

const StyledTextarea = styled.textarea`
  background-color: ${({ theme }) => theme.formField};
  padding: 0.6rem 1.5rem;
  border-radius: 8px;
  color: ${({ theme }) => theme.formText};
  border: solid 1px ${({ theme }) => theme.cardBorder};
  font-weight: 600;
  cursor: pointer;
  resize: vertical;
  min-height: 100px;
  font-family: sans-serif;
  &::placeholder {
    color: ${({ theme }) => theme.formTitle};
    font-weight: 600;
  }
`;
const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.button};
  border: none;
  border-radius: 8px;
  padding: 0.6rem 0.4rem;
  font-weight: 600;
  cursor: pointer;
  width: 9rem;
`;

const StyledBackButton = styled.button`
  position: absolute;
  top: ${({ status }) => (status === "authenticated" ? "4.75rem" : "1.75rem")};
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

const StyledTitle = styled.h2`
  text-align: center;
  margin: 6rem 0 2rem 0;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.primaryGreen};
`;
