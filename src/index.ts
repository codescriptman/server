import express from "express";

const app = express();
const port = 3000;

const db = {
  skills: [
    { id: 1, title: "Front-end" },
    { id: 2, title: "Back-end" },
  ],
};

app.get("/skills", (req, res) => {
  res.json(db.skills);
});

app.get("/skills/:id", (req, res) => {
  const foundSkill = db.skills.find(
    (skill) => skill.id === Number(req.params.id)
  );

  if (!foundSkill) {
    res.send(404);
    return;
  }

  res.json(foundSkill);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
