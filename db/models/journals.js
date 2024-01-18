import mongoose from "mongoose";

const { Schema } = mongoose;

const journalSchema = new Schema({
  url: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String },
  careTipps: { type: String },
  location: { type: String },
  plantId: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Journal = mongoose.models.Journal || mongoose.model("Journal", journalSchema);

export default Journal;
