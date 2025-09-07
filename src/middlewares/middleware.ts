import type { NextFunction } from "express";

export const middleware = (req: Request, res: Response, next: NextFunction) => {
  // logic of middleware;
  next();
};

// app.use(middleware);
