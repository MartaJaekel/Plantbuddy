import formidable from "formidable";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
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

  const form = formidable();

  form.parse(request, async (error, fields, files) => {
    if (error) {
      console.error("Formidable parse error:", error);
      response.status(500).json({ error: "Formidable parse error" });
      return;
    }

    const file = files.plantbuddyImage[0];

    try {
      const image = await cloudinary.uploader.upload(file.filepath, {
        folder: "",
      });
      response.status(200).json(image);
    } catch (cloudinaryError) {
      console.error(cloudinaryError);
      console.error("Cloudinary upload error:", cloudinaryError.message);
      response.status(500).json({ error: "Cloudinary upload error" });
    }
  });
}
