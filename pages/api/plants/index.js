import dbConnect from "@/db/connect";
import Plant from "@/db/models/plants";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const plants = await Plant.find();
    response.status(200).json(plants);
  }

}
