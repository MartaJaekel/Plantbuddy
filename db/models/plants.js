import mongoose from "mongoose";

const { Schema } = mongoose;

const plantSchema = new Schema({
  species: { type: String, required: true },
  commonName: { type: String, required: true },
  waterNeeds: { type: String, required: true },
  sunlightRequirements: { type: String, required: true },
  size: { type: String, required: true },
  optimalTemperature: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  petFriendly: { type: Boolean, required: true },
  categorySlug: { type: String, required: true },
});

const Plant = mongoose.models.Plant || mongoose.model("Plant", plantSchema);

export default Plant;
