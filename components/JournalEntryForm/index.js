import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Headline from "@/components/Headline";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function EntryForm({ onFormSubmit, entry }) {
  const [url, setUrl] = useState(entry ? entry.url : "");
  const [name, setName] = useState(entry ? entry.name : "");
  const [description, setDescription] = useState(
    entry ? entry.description : ""
  );
  const [careTipps, setCareTipps] = useState(entry ? entry.careTipps : "");
  const [location, setLocation] = useState(entry ? entry.location : "");
  const { status } = useSession();

  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const entryObject = {
      url,
      name,
      description,
      careTipps,
      location,
    };

    if (entry && entry.id) {
      entryObject.id = entry.id;
    }
    onFormSubmit(entryObject);
    router.push("/journal");
  }
  function handleReset(event) {
    event.target.reset();

    if (entry && entry.id) {
      router.push("/journal");
    }
  }

  return (
    <>
      <Headline />
      <main>
        {status === "authenticated" && (
          <StyledForm onSubmit={handleSubmit} onReset={handleReset}>
            <StyledInput
              type="url"
              id="url"
              name="url"
              value={url}
              placeholder="Image Upload URL"
              onChange={(event) => setUrl(event.target.value)}
              required
            />
            <StyledLabelImage htmlFor="url">
              At the moment we only can work with urls from Google, Unsplash &
              Wikipedia
            </StyledLabelImage>
            <StyledLabel htmlFor="name">Name</StyledLabel>
            <StyledInput
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
            <StyledLabel htmlFor="description">Description</StyledLabel>
            <StyledTextarea
              type="text"
              id="description"
              name="description"
              placeholder="Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
            <StyledLabel htmlFor="care">Care</StyledLabel>
            <StyledTextarea
              type="text"
              id="care"
              name="care"
              placeholder="Care Tipps"
              value={careTipps}
              onChange={(event) => setCareTipps(event.target.value)}
            />
            <StyledLabel htmlFor="location">Location</StyledLabel>
            <StyledInput
              type="text"
              id="location"
              name="location"
              placeholder="Location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
            <StyledButtonContainer>
              <StyledButton type="reset">Cancel</StyledButton>
              <StyledButton type="submit">Save</StyledButton>
            </StyledButtonContainer>
          </StyledForm>
        )}
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

const StyledLabelImage = styled.label`
  font-size: 0.65rem;
  margin: -0.75rem auto auto;
  text-align: center;
  color: ${({ theme }) => theme.primaryGreen}
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
