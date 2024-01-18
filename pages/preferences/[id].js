import { useRouter } from "next/router";
import PlantCard from "@/components/Card";
import Headline from "@/components/Headline";
import styled from "styled-components";
import { useSession } from "next-auth/react";
import ProtectedRoute from "@/components/ProtectedRoute";
import Login from "@/components/Login";
import BackButton from "@/components/BackButton";
import { StyledTitle } from "@/components/Title/StyledTitle";
import Head from "next/head";

export default function Preference({
  preferences,
  onToggleFavorite,
  favorites,
  plants,
  theme,
}) {
  const router = useRouter();
  const { id } = router.query;
  const { status } = useSession();

  const preference = preferences.find((preference) => preference.id === id);

  const preferencePlants = plants.filter((plant) =>
    preference?.preferencePlants.includes(plant._id)
  );

  let counterMessage;

  if (
    preference?.preferencePlants.length > 0 &&
    preference?.preferencePlants.length < plants.length
  ) {
    counterMessage = `Showing ${preference?.preferencePlants.length} of ${plants.length} plants:`;
  } else if (preference?.preferencePlants.length === plants.length) {
    counterMessage = "";
  }

  return (
    <>
      <Head>
        <title>Filtered Preferences</title>
      </Head>
      <ProtectedRoute fallback={<Login />}>
        <StyledButton>
          <BackButton />
        </StyledButton>
        <Headline />
        <main />
        <StyledTitle>{preference?.preferenceTitle}</StyledTitle>
        <StyledCounterMessage>{counterMessage}</StyledCounterMessage>
        {preferencePlants.length === 0 ? (
          <StyledCallText>
            Sorry, unfortunately <StyledSpan>none</StyledSpan> of the plants
            matched your preferences
          </StyledCallText>
        ) : (
          <StyledPlantList>
            {preferencePlants.map((plant) => (
              <PlantCard
                key={plant._id}
                plant={plant}
                onToggleFavorite={onToggleFavorite}
                isFavorite={favorites?.includes(plant._id)}
                theme={theme}
              />
            ))}
          </StyledPlantList>
        )}
      </ProtectedRoute>
    </>
  );
}

const StyledCallText = styled.p`
  text-align: center;
  padding: 0 2rem;
`;

const StyledSpan = styled.span`
  font-family: serif;
  font-style: italic;
`;

const StyledCounterMessage = styled.p`
  margin: 1rem auto;
  max-width: 19rem;
  color: ${({ theme }) => theme.primaryGreen};
  font-weight: 600;
`;

const StyledPlantList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  max-width: 41rem;
  margin: 0 auto;

  @media (min-width: 1024px) {
    max-width: 61rem;
  }
`;

const StyledButton = styled.div`
  position: fixed;
  top: 2.75rem;
  z-index: 3;
`;
