import { router } from "../trpc";
import { authRouter } from "./auth";
import { betaRouter } from "./beta";
import { exampleRouter } from "./example";
import { testRouter } from "./test";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  test: testRouter,
  beta: betaRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
