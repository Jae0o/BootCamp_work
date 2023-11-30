import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function (reg: VercelRequest, res: VercelResponse) {
  console.log(reg.body);
  res.status(200).json({
    name: "lee lee"
  });
}
