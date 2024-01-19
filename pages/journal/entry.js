import React from "react";
import { useState } from "react";
import Headline from "@/components/Headline";
import { StyledTitle } from "@/components/Title/StyledTitle";
import BackButton from "@/components/BackButton";
import styled from "styled-components";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

export default function EntryForm({ onFormSubmit }) {
  const { status } = useSession();
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [careTipps, setCareTipps] = useState("");
  const [location, setLocation] = useState("");
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    if (!url) {
      alert("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("plantbuddyImage", url);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const image = await response.json();
        setUrl(image.secure_url);

        const entry = {
          url: image.secure_url,
          name,
          description,
          careTipps,
          location,
        };
        onFormSubmit(entry);
        router.push("/journal");
      } else {
        console.error("Error uploading image:", response.statusText);
        alert(
          `Error uploading image: ${errorData.error.message}. Please try again.`
        );
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image. Please try again.");
    }
  }

  function handleReset(event) {
    event.target.reset();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    setUrl(file);
  }

  return (
    <>
      <Head>
        <title>Formular</title>
      </Head>
      <Headline />
      <StyledBackButton>
        <BackButton />
      </StyledBackButton>
      {status === "authenticated" && (
        <main>
          <StyledTitle>Plant Journal</StyledTitle>
          <StyledForm onSubmit={handleSubmit} onReset={handleReset}>
            <StyledInput
              type="file"
              id="plantbuddyImage"
              name="plantbuddyImage"
              accept="image/*, .png, .jpeg, .jpg, .webp"
              onChange={handleImageChange}
              required
            />
            <StyledLabel htmlFor="plantbuddyImage">Image</StyledLabel>
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
            <StyledLabel htmlFor="name">Name</StyledLabel>
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
            <StyledLabel htmlFor="description">Description</StyledLabel>
            <StyledTextarea
              type="text"
              id="care"
              name="care"
              minLength="3"
              maxLength="300"
              placeholder="Care Tipps"
              onChange={(event) => setCareTipps(event.target.value)}
            />
            <StyledLabel htmlFor="care">Care</StyledLabel>
            <StyledInput
              type="text"
              id="location"
              name="location"
              minLength="3"
              maxLength="40"
              placeholder="Location"
              onChange={(event) => setLocation(event.target.value)}
            />
            <StyledLabel htmlFor="location">Location</StyledLabel>
            <StyledButtonContainer>
              <StyledButton type="reset">Cancel</StyledButton>
              <StyledButton type="submit">Save</StyledButton>
            </StyledButtonContainer>
          </StyledForm>
        </main>
      )}
    </>
  );
}

const StyledBackButton = styled.div`
  position: fixed;
  top: 2.75rem;
  z-index: 3;
`;

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
  border-radius: 8px;
  color: ${({ theme }) => theme.formText};
  border: solid 1px ${({ theme }) => theme.cardBorder};
  font-weight: 600;
  cursor: pointer;

  &:not(:first-child) {
    padding: 0.6rem 1.5rem;
  }

  &::placeholder {
    color: ${({ theme }) => theme.formTitle};
    font-weight: 600;
  }

  &::-webkit-file-upload-button {
    background-color: ${({ theme }) => theme.primaryGreen};
    border-radius: 8px;
    color: ${({ theme }) => theme.white};
    border: none;
    padding: 0.6rem 1.5rem;
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
