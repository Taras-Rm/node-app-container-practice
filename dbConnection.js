import { MongoClient } from "mongodb";

const dbClient = new MongoClient(process.env.MONGO_URI);

let conn = null;
try {
  conn = await dbClient.connect();
  console.log("Connected to database");
} catch (error) {
  console.log(error);
}

const db = await conn.db(process.env.DB_NAME);

export default db;
