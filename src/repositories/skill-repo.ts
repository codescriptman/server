import { client } from "../db/db.js";

export const skillRepo = {
  async getSkills() {
    return client.db("skills").collection("skills").find({}).toArray();
  },
};
