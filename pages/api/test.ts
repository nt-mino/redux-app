import { auth, db } from "@/plugins/firebaseAdmin";
import type { NextApiRequest as Req, NextApiResponse as Res } from "next";

type RequestParams = {
  uid: string;
};

export default async function sessionApi(req: Req, res: Res) {
  try {
    if (req.method !== "POST") throw new Error("Unauthorized request");

    const body = (await JSON.parse(req.body)) as RequestParams;
    const { uid } = body;

    const UserRecord = await auth.getUser(uid);
    if (!UserRecord) throw new Error("Unauthorized request");

    // * UserRecordから必要なデータを取得する
    const { email } = UserRecord;

    const userRef = db.collection("users").doc(uid);
    const setData = {
      uid: uid,
      email: email,
      learnTime: 0, // * 学習時間
    };

    await userRef.set(setData, { merge: true });

    res.status(200).send(JSON.stringify({ status: "success" }));
  } catch (error) {
    res.status(500).send(JSON.stringify({ status: "failed", error }));
  }
}
