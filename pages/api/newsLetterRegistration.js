import fs from "fs";
import path from "path";
import { connectDataBase, insertDataToDataBase } from "../../helpers/db-util";

export function getNewsLetterRegistrationPath() {
  return path.join(process.cwd(), "data", "newsLetterRegistration.json");
}

export function getNewsLetterRegistrationData(filePath) {
  return JSON.parse(fs.readFileSync(filePath));
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }
    // const filePath = getNewsLetterRegistrationPath();
    // const fileData = getNewsLetterRegistrationData(filePath);

    const newData = {
      userId: Date.now(),
      email: userEmail,
    };
    // fileData.push({ id: userId, email: userEmail });

    // fs.writeFileSync(filePath, JSON.stringify(fileData));
    let client;
    try {
      client = await connectDataBase();
    } catch (error) {
      res.status(500).json({ message: "Failed to connect database" });
      return;
    }
    //  await MongoClient.connect(
    //   "mongodb+srv://arsh:pI9Ig4DSarfrvg2r@events.rzqzs.mongodb.net/test"
    // );
    // const db = client.db();
    // await db.collection("emails").insertOne({ email: userEmail });
    try {
      await insertDataToDataBase(client, "emails", { email: userEmail });
      res.status(200).json({ message: "ok", data: newData });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Invalid data  was sent" });
    }
  } else {
    res.status(200).json({ message: "ok too" });
  }
}
