import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "../../server/api";

const client = createTRPCProxyClient<AppRouter>({
  links: [
    // loggerLink(), ///we put in start as http is the ending link and the loggerLink gives us all the info logging
    httpBatchLink({
      //it using baching
      url: "http://localhost:3000/trpc",
      // headers: {
      //   Authorization: "TOKEN", // can provide the costum headers
      // },
    }),
  ],
});
async function main() {
  // const result = await client.sayHi.query(); //3
  // console.log(result);
  // const res = await client.logToServer.mutate("hii from server");
  // console.log(res);
  // const res = await client.users.getUser.query(); //before merge router
  const res = await client.get.query({ userId: "1234" }); //after merge router
  const res1 = await client.update.mutate({ userId: "1234", name: "gupta" }); //after merge router
  const res2 = await client.secretData.query();
  console.log(res);
  console.log(res1);
  console.log(res2);
}

main();
