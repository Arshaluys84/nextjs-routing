import { MongoClient } from "mongodb";

export async function connectDataBase() {
  return await MongoClient
    .connect
    //   "mongodb+srv://arsh:pI9Ig4DSarfrvg2r@events.rzqzs.mongodb.net/test"
    ();
}
export async function insertDataToDataBase(client, collection, newData) {
  const db = client.db();
  return await db.collection(collection).insertOne(newData);
}

export async function getAllData(client, collection, sort) {
  const db = client.db();
  return await db.collection(collection).find().sort(sort).toArray();
}
