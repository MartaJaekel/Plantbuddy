import formidable from "formidable";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.status(400).json({ message: "Method not allowed" });
    return;
  }

  const form = formidable({});
  const [fields, files] = await form.parse(request);
  const file = files.plantbuddyImage[0];
  const { newFilename, filepath } = file;
  const result = await cloudinary.v2.uploader.upload(filepath, {
    public_id: newFilename,
    folder: "PlantBuddy",
  });

  if (result.error) {
    console.error("Cloudinary upload error:", result.error.message);
    response.status(500).json({ error: "Cloudinary upload error" });
    return;
  }

  response.status(200).json(result);
}
