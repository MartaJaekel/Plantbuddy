import FilterForm from "@/components/FilterForm";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Login from "@/components/Login";
import Headline from "@/components/Headline";
import ProtectedRoute from "@/components/ProtectedRoute";
import BackButton from "@/components/BackButton";
import { StyledTitle } from "@/components/Title/StyledTitle";

export default function EditPreferencePage({
  preferences,
  onEditPreference,
  plants,
}) {
  const router = useRouter();
  const { id } = router.query;
  const { status } = useSession();

  const thisPreference = preferences?.find(
    (preference) => preference.id === id
  );

  if (!thisPreference) {
    return <div>Preference not found</div>;
  }

  return (
    <ProtectedRoute fallback={<Login />}>
      <StyledButton>
        <BackButton />
      </StyledButton>
      <Headline />{" "}
      <main>
        <StyledTitle>Edit your Preference</StyledTitle>
        <FilterForm
          plants={plants}
          preferenceFilterSettings={thisPreference?.filterSettings}
          preferenceId={thisPreference.id}
          preferenceFilterTitle={thisPreference?.preferenceTitle}
          onEditPreference={onEditPreference}
        />
      </main>
    </ProtectedRoute>
  );
}

const StyledButton = styled.div`
  position: fixed;
  top: 2.75rem;
  z-index: 3;
`;
