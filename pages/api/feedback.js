import path from "path";
import fs from "fs";

export function getFilePath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

export function getFileData(filePath) {
  return JSON.parse(fs.readFileSync(filePath));
}

export default function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedback = req.body.feedback;
    const fId = Date.now();
    const filePath = getFilePath();
    const fileData = getFileData(filePath);
    fileData.push({ email, feedback, fId });
    fs.writeFileSync(filePath, JSON.stringify(fileData));
    res
      .status(201)
      .json({ message: "We received your Feedback", feedback: fileData });
  } else {
    const filePath = getFilePath();
    const fileData = getFileData(filePath);
    res.status(200).json({ message: "it is ok", feedback: fileData });
  }
}
