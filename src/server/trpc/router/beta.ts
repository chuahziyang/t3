import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const betaRouter = router({
  getkeys: publicProcedure.query(() => {
    return {
      keys: 478,
    };
  }),
});
