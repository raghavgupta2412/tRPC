import express from "express";
import cors from "cors";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { mergeRouter } from "./router";
import { createContext } from "./context";
import { applyWSSHandler } from "@trpc/server/adapters/ws";
import ws from "ws";

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(
  "/trpc",
  createExpressMiddleware({ router: mergeRouter, createContext: createContext })
); //adapter

const server = app.listen(3000);

applyWSSHandler({
  wss: new ws.Server({ server }),
  router: mergeRouter,
  createContext: () => {
    //it should be normal context not the one we define in the context.ts file with the ({ req, res }: CreateExpressContextOptions)
    return { isAdmin: true };
  },
});

export type AppRouter = typeof mergeRouter; //4

//......................................................

// import express from "express";
// import cors from "cors";
// import { initTRPC } from "@trpc/server";
// import { createExpressMiddleware } from "@trpc/server/adapters/express";

// const t = initTRPC.create(); //created instance of trpc
// const appRouter = t.router({
//   sayHi: t.procedure.query(() => {
//     return "Hii";
//   }),
//   logToServer: t.procedure
//     .input((v) => {
//       if (typeof v === "string") return v;

//       throw new Error("Invalid input :expexted string");
//     })
//     .mutation((req) => {
//       console.log(`client says ${req.input}`);
//       return true;
//     }),
// });

// const app = express();
// app.use(cors({ origin: "http://localhost:5173" }));
// app.use("/trpc", createExpressMiddleware({ router: appRouter })); //adapter

// app.listen(3000);

// export type AppRouter = typeof appRouter; //4
