import dbConnect from "@/db/connect";
import Journal from "@/db/models/journals";
import { getSession } from "next-auth/client";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function handler(request, response) {
  await dbConnect();
  const session = await getSession(request, response, authOptions);

  if (request.method === "GET") {
    try {
      const journals = await Journal.find({ userId: session.user.id });
      response.status(200).json(journals);
    } catch (error) {
      console.error(error);
      response
        .status(500)
        .json({ message: "An error occurred while fetching the journals" });
    }
  } else   if (request.method === 'POST') {
    try {
      const { url, name, description, careTipps, location, plantId, userId } = request.body;

      const journal = new Journal({
        url,
        name,
        description,
        careTipps,
        location,
        plantId,
        userId,
      });

      const createdJournal = await journal.save();

      response.status(200).json(createdJournal);

    } catch (error) {
      console.error(error);
      response.status(500).json({ message: 'An error occurred while creating the journal', error: error.message });
    }
  }
}
