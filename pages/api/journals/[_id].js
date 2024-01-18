import dbConnect from "@/db/connect";
import Journal from "@/db/models/journals";

export default async function handler(request, response) {
  await dbConnect();

  const { _id } = request.query;

  if (request.method === 'GET') {
    try {
      const journal = await Journal.findById(_id);
      if (!journal) {
        return response.status(404).json({ message: 'Journal not found' });
      }
      response.status(200).json(journal);
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: 'An error occurred while fetching the journal' });
    }
  }

  if (request.method === 'PUT') {
    try {
      const { url, name, description, careTipps, location, plantId, userId } = request.body;

      const updatedJournal = await Journal.findByIdAndUpdate(_id, {
        url,
        name,
        description,
        careTipps,
        location,
        plantId,
        userId,
      }, { new: true });

      if (!updatedJournal) {
        return response.status(404).json({ message: 'Journal not found' });
      }

      response.status(200).json(updatedJournal);
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: 'An error occurred while updating the journal', error: error.message });
    }
  }

  if (request.method === 'DELETE') {
    try {
      await Journal.findByIdAndDelete(_id);
      response.status(200).json({ message: 'Journal deleted successfully' });
    } catch (error) {
      console.error(error);
      response.status(500).json({ message: 'An error occurred while deleting the journal', error: error.message });
    }
  }
}
