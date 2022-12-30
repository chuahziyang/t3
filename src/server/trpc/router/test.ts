import { contextProps } from "@trpc/react-query/dist/internals/context";
import { ProcedureBuilder } from "@trpc/server";
import { z } from "zod";

import { router, publicProcedure } from "../trpc";

const test = publicProcedure.input(z.string()).query(({ input }) => {
  return input;
});
const server = publicProcedure.input(z.string()).query(({ ctx }) => {
  return ctx.prisma.user.findMany();
});

export const testRouter = router({
  test,
  server,

  // hello: publicProcedure
  //   .input(z.object({ text: z.string().nullish() }).nullish())
  //   .query(({ input }) => {
  //     return {
  //       greeting: `Hello ${input?.text ?? "world"}`,
  //     };
  //   }),
});
