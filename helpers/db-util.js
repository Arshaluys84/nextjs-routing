import { MongoClient } from "mongodb";

export async function connectDataBase() {
  return await MongoClient.connect(
 
  );
}
export async function insertDataToDataBase(client, collection, newData) {
  const db = client.db();
  return await db.collection(collection).insertOne(newData);
}

export async function getAllData(client, collection, sort) {
  const db = client.db();
  return await db.collection(collection).find().sort(sort).toArray();
}
