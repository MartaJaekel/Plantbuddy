import dbConnect from "@/db/connect";
import Category from "@/db/models/categories";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const categories = await Category.find();
    response.status(200).json(categories);
  }

}
