// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   // Extract data from the request body
//   const accountSid = "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
//   const authToken = "your_auth_token";

//   const client = require("twilio")(accountSid, authToken);

//   client.messages
//     .create({
//       body: "Hello from twilio-node",
//       to: "+12345678901", // Text your number
//       from: "+12345678901", // From a valid Twilio number
//     })
//     // .then((message: string) => console.log(message?.sid))
//     .then((message: string) => console.log(message))
//     .catch((err: any) => {
//       console.log(err);
//     });
// }
