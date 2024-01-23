import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Headline from "@/components/Headline";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function EntryForm({ onFormSubmit, entry }) {
  const [url, setUrl] = useState(entry ? entry.url : "");
  const [name, setName] = useState(entry ? entry.name : "");
  const [description, setDescription] = useState(
    entry ? entry.description : ""
  );
  const [careTipps, setCareTipps] = useState(entry ? entry.careTipps : "");
  const [location, setLocation] = useState(entry ? entry.location : "");
  const { status } = useSession();
  const [showWarning, setShowWarning] = useState("");
  const [file, setFile] = useState(null);
  const [imageInputValue, setImageInputValue] = useState("");


  const router = useRouter();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setShowWarning("");
    setUrl(URL.createObjectURL(file)); 
    setFile(file);
  };

  async function handleImageUpload() {
    if (!file) {
      return null;
    }

    const formData = new FormData();
    formData.append("plantbuddyImage", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        return data.secure_url;
      } else {
        console.error("Image upload failed");
        return null;
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  }

  async function handleEditSubmit(event) {
    event.preventDefault();

    const uploadedImageUrl = await handleImageUpload();

    const entryObject = {
      url: uploadedImageUrl || (entry && entry.url),
      name,
      description,
      careTipps,
      location,
    };

    if (entry && entry.id) {
      entryObject.id = entry.id;
    }
    onFormSubmit(entryObject, entry.id);
    router.push("/journal");
  }
  const handleRemoveImage = () => {
    setUrl("");
    setShowWarning(true);
    setImageInputValue("");
  };

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
          <StyledForm onSubmit={handleEditSubmit} onReset={handleReset}>
            {url && (
              <StyledDiv>
                <StyledPreviewImage
                  alt="imagePreview"
                  name="imagePreview"
                  width={100}
                  height={100}
                  src={url || (entry && entry.url)}
                />
                <StyledImageRemoveButton
                  type="button"
                  onClick={handleRemoveImage}
                >
                  remove image
                </StyledImageRemoveButton>
              </StyledDiv>
            )}
            <StyledInput
              type="file"
              id="plantbuddyImage"
              name="plantbuddyImage"
              accept="image/*, .png, .jpeg, .jpg, .webp"
              onChange={handleImageChange}
            />
            {showWarning && (
              <StyledWarningMessage>
                Please choose an image.
              </StyledWarningMessage>
            )}
            <StyledLabel htmlFor="plantbuddyImage">Image</StyledLabel>
            <StyledInput
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
            <StyledLabel htmlFor="name">Name</StyledLabel>
            <StyledTextarea
              type="text"
              id="description"
              name="description"
              placeholder="Description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
            <StyledLabel htmlFor="description">Description</StyledLabel>
            <StyledTextarea
              type="text"
              id="care"
              name="care"
              placeholder="Care Tips"
              value={careTipps}
              onChange={(event) => setCareTipps(event.target.value)}
            />
            <StyledLabel htmlFor="care">Care</StyledLabel>
            <StyledInput
              type="text"
              id="location"
              name="location"
              placeholder="Location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
            <StyledLabel htmlFor="location">Location</StyledLabel>
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

const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.formField};
  border-radius: 8px;
  color: ${({ theme }) => theme.formText};
  border: solid 1px ${({ theme }) => theme.cardBorder};
  font-weight: 600;
  cursor: pointer;

  &:not(:first-child):not(:nth-child(2)) {
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

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const StyledPreviewImage = styled(Image)`
  width: 150px;
  height: auto;
  border-radius: 8px;
`;

const StyledImageRemoveButton = styled(StyledButton)`
  height: 35px;
`;

const StyledWarningMessage = styled.p`
  color: ${({ theme }) => theme.primaryGreen};
  margin: -0.75rem 0 0.1rem;
  text-align: center;
`;
