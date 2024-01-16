import { useRouter } from "next/router";
import styled from "styled-components";
import Headline from "@/components/Headline";
import EntryForm from "components/JournalEntryForm";
import { useSession } from "next-auth/react";


export default function EditJournal({ entries, onEditEntry }) {
  const { status } = useSession();
  const router = useRouter();
  const { id } = router.query;
  const thisEntry = entries?.find((entry) => entry.id === id);

  if (!thisEntry) {
    return <div>Entry not found</div>;
  }

  return (
    <>
      <Headline />
      <main>
        <StyledTitle status={status}>Edit your Entry</StyledTitle>
        <EntryForm entry={thisEntry} onFormSubmit={onEditEntry} />
      </main>
    </>
  );
}
const StyledTitle = styled.h2`
  text-align: center;
  margin-top: ${({ status }) => (status === "authenticated" ? "9rem" : "6rem")};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.primaryGreen};
`;
