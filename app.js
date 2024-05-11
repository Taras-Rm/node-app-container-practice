import express from "express";
import dotenv from "dotenv";
import db from "./dbConnection.js";
dotenv.config();

const app = express();

// get users from mongodb 'users' collection
app.get("/users", async (_, res) => {
  try {
    const users = await db.collection("users").find({}).toArray();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error: "Some server error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening port: ${PORT}`);
});
