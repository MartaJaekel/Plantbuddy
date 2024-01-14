import React from "react";
import EntryForm from "components/JournalEntryForm";

export default function EntryFormPage({ onFormSubmit }) {
  return <EntryForm onFormSubmit={onFormSubmit} />;
}
