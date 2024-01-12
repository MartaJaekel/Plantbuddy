import mongoose from "mongoose";

const { Schema } = mongoose;

const categorySchema = new Schema({
  slug: { type: String, required: true },
  title: { type: String, required: true },
  bgcolor: { type: String, required: true },
  bgcolorDark: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
});

const Category = mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;
