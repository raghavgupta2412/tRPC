import { adminProcedure, t } from "../trpc";
import { userRouter } from "./users";

const appRouter = t.router({
  sayHi: t.procedure.query(() => {
    return "Hii";
  }),
  logToServer: t.procedure
    .input((v) => {
      if (typeof v === "string") return v;

      throw new Error("Invalid input :expexted string");
    })
    .mutation((req) => {
      console.log(`client says ${req.input}`);
      return true;
    }),
  users: userRouter,
  secretData: adminProcedure.query(({ ctx }) => {
    console.log(ctx.user);
    return "Super top secret admin data";
  }),
});

export const mergeRouter = t.mergeRouters(appRouter, userRouter);
