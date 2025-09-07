import type { skillType } from "../types/types.js";
import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://donazazello1312_db_user:xkFX66ls0DLjtvt8@cluster0.tnib7aj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function dbRun() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch {
    console.log("cannot connect to DB");
    await client.close();
  }
}
