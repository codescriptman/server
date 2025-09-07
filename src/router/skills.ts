import { Router } from "express";
import { body, validationResult } from "express-validator";
import type { Request, Response } from "express";
import { randomInt } from "crypto";
import { skillRepo } from "../repositories/skill-repo.js";

export const getSkillsRouter = () => {
  const router = Router();

  // router.post(
  //   "/",body('title').islen,
  //   (req: Request<{}, {}, { title: string }>, res: Response<skillType>) => {
  //     const newSkill = {
  //       id: randomInt(50),
  //       title: req.body.title,
  //     };
  //     db.skills.push(newSkill);
  //     res.send(newSkill);
  //   }
  // );

  router.get("/", async (req: Request, res: Response) => {
    res.send(await skillRepo.getSkills());
  });

  // router.get("/:id", (req, res) => {
  //   const foundSkill = db.skills.find(
  //     (skill) => skill.id === Number(req.params.id)
  //   );

  //   if (!foundSkill) {
  //     res.send(404);
  //     return;
  //   }

  //   res.send(foundSkill);
  // });

  return router;
};
