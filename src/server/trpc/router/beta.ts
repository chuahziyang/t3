import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const betaRouter = router({
  getkeys: publicProcedure.query(() => {
    return {
      keys: 478,
    };
  }),
  registerkey: publicProcedure
    .input(
      z.object({
        email: z.string(),
      })
    )
    .mutation(({ input }) => {
      console.log("asdasd");
      return {
        user: {
          name: input.email,
          role: "ADMIN",
        },
      };
    }),
});
