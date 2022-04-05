import { auth, db } from "@/plugins/firebaseAdmin";
import type { NextApiRequest as Req, NextApiResponse as Res } from "next";

export default async function sessionApi(req: Req, res: Res) {
  try {
    if (req.method !== "GET") throw new Error("Unauthorized request");

    const { uid } = req.query;
    const userId = uid.toString();

    const userInfo = await db.collection("users").doc(userId).get();
    const userInfoData = userInfo.data();
    if (!userInfoData) throw new Error("Unauthorized request");

    res.status(200).send(JSON.stringify({ status: "success", userInfoData }));
  } catch (error) {
    res.status(500).send(JSON.stringify({ status: "failed", error }));
  }
}
