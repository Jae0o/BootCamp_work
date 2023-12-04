import type { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

const { APIKEY, USERNAME } = process.env;

interface RequestBody {
  path: "" | "deletions" | "reorder";
  method: "GET" | "POST" | "PUT" | "DELETE";
  data: {
    [key: string]: unknown;
  };
}

export default async function (req: VercelRequest, res: VercelResponse) {
  const { path = "", method = "GET", data } = req.body as Partial<RequestBody>;
  const { data: resValue } = await axios({
    url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${path}`,
    method,
    headers: {
      "Content-Type": "application/json",
      apikey: APIKEY,
      username: USERNAME
    },
    data
  });
  res.status(200).json(resValue);
}
