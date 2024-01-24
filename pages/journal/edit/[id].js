import { useRouter } from "next/router";
import styled from "styled-components";
import Headline from "@/components/Headline";
import EntryForm from "components/JournalEntryForm";
import Head from "next/head";
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
    <>
      <Head>
        <title>Edit Entry</title>
      </Head>
      <ProtectedRoute fallback={"/"}>
        <StyledBackButton>
          <BackButton />
        </StyledBackButton>
        <Headline />
        <main>
          <StyledTitle>Edit your Entry</StyledTitle>
          <EntryForm entry={thisEntry} onFormSubmit={onEditEntry} />
        </main>
      </ProtectedRoute>
    </>
  );
}

const StyledBackButton = styled.div`
  position: fixed;
  top: 2.75rem;
  z-index: 3;
`;
