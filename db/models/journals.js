import mongoose from "mongoose";

const { Schema } = mongoose;

const journalSchema = new Schema({
  user: { type: String },
  url: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String },
  careTipps: { type: String },
  location: { type: String },
});

const Journal = mongoose.models.Journal || mongoose.model("Journal", journalSchema);

export default Journal;
