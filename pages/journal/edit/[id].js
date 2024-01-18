import { useRouter } from "next/router";
import styled from "styled-components";
import Headline from "@/components/Headline";
import EntryForm from "components/JournalEntryForm";
import Head from "next/head";
import ProtectedRoute from "@/components/ProtectedRoute";

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
        <Headline />
        <main>
          <StyledTitle>Edit your Entry</StyledTitle>
          <EntryForm entry={thisEntry} onFormSubmit={onEditEntry} />
        </main>
      </ProtectedRoute>
    </>
  );
}
const StyledTitle = styled.h2`
  text-align: center;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.primaryGreen};
`;
