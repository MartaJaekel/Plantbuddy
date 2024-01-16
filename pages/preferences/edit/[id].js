import FilterForm from "@/components/FilterForm";
import Headline from "@/components/Headline";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Login from "@/components/Login";

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
    <>
      <Headline />
      <main>
        <StyledTitle>Edit your Preference</StyledTitle>
        {status !== "authenticated" ? (
          <Login />
        ) : (
          <FilterForm
            plants={plants}
            preferenceFilterSettings={thisPreference?.filterSettings}
            preferenceId={thisPreference.id}
            preferenceFilterTitle={thisPreference?.preferenceTitle}
            onEditPreference={onEditPreference}
          />
        )}
      </main>
    </>
  );
}

const StyledTitle = styled.h2`
  text-align: center;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.primaryGreen};
`;
