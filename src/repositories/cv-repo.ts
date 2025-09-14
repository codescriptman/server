import { client } from "../db/db.js";

export const cvRepo = {
  async getCv() {
    return client.db("cv").collection("cv").find({}).toArray();
  },
};
