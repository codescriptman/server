import { Router } from "express";
import type { Request, Response } from "express";
import { cvRepo } from "../repositories/cv-repo.js";

export const getCvRouter = () => {
  const router = Router();

  router.get("/", async (req: Request, res: Response) => {
    res
      .set("Cache-Control", "no-store")
      .status(200)
      .send(await cvRepo.getCv());
  });

  return router;
};
