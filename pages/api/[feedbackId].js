import { getFileData, getFilePath } from "./feedback";

export default function handler(req, res) {
  const feedfackId = req.query.feedfackId;
  const filePath = getFilePath();
  const fileData = getFileData(filePath);
  const selectedData = fileData.find((i) => i.id === feedfackId);
  res.status(200).json({ data: selectedData });
}
