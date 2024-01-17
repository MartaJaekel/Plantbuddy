import { useRouter } from "next/router";
import styled from "styled-components";
import Headline from "@/components/Headline";
import EntryForm from "components/JournalEntryForm";
import ProtectedRoute from "@/components/ProtectedRoute";
import BackButton from "@/components/BackButton";
import { StyledTitle } from "@/components/Title/StyledTitle";

export default function EditJournal({ entries, onEditEntry }) {
  const router = useRouter();
  const { id } = router.query;
  const thisEntry = entries?.find((entry) => entry.id === id);

  if (!thisEntry) {
    return <div>Entry not found</div>;
  }

  return (
    <ProtectedRoute fallback={"/"}>
    <StyledButton>
        <BackButton />
      </StyledButton>
      <Headline />
      <main>
        <StyledTitle>Edit your Entry</StyledTitle>
        <EntryForm entry={thisEntry} onFormSubmit={onEditEntry} />
      </main>
    </ProtectedRoute>
  );
}

const StyledButton = styled.div`
  position: fixed;
  z-index: 3;
`;
