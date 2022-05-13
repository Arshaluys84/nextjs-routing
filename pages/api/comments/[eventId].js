//import { MongoClient } from "mongodb";
import {
  connectDataBase,
  getAllData,
  insertDataToDataBase,
} from "../../../helpers/db-util";

export default async function handler(req, res) {
  const eventId = req.query.eventId;

  const { name, email, text } = req.body;
  let client;
  try {
    client = await connectDataBase();
  } catch (error) {
    res.status(500).json({ message: "Failed to connect" });
    return;
  }
  if (req.method === "POST") {
    if (
      !email.includes("@") ||
      !email ||
      text.trim() === "" ||
      !text ||
      name.trim() === "" ||
      !name
    ) {
      res.status(422).json({ message: "Invalid request" });
      return;
    }
    const newData = {
      eventId,
      name,
      email,
      text,
    };

    try {
      const result = await insertDataToDataBase(client, "comments", newData);
      newData._id = result.insertedId;
      res.status(201).json({ message: "it is ok", data: newData });
    } catch (error) {
      res.status(500).json({ message: "Failed to connect" });
      return;
    }
    //  await MongoClient.connect(
    //   "mongodb+srv://arsh:pI9Ig4DSarfrvg2r@events.rzqzs.mongodb.net/test"
    // );

    // const db = client.db();
    // const result = await db.collection("comments").insertOne(newData);
  }
  if (req.method === "GET") {
    try {
      const comments = await getAllData(client, "comments", { _id: -1 });
      res.status(201).json({ message: "it is ok", comments: comments });
    } catch (error) {
      res.status(500).json({ message: "Failed to connect" });
    }
    // const db = client.db();
    // const comments = await db
    //   .collection("comments")
    //   .find()
    //   .sort({
    //     _id: -1,
    //   })
    //   .toArray();
  }
  client.close();
}
