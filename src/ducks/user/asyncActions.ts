import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "@/plugins/firebase";
import { doc, setDoc } from "firebase/firestore";
import { ApiResponse } from "pages/user";

export type UserInfoData = {
  uid: string;
  email: string;
  learnTime: number;
};

/**
 * @description Firestoreのユーザーデータの更新処理
 * @param 変更データ, ユーザーID
 */
export const asyncUserInfo = createAsyncThunk(
  "userInfo/asyncUserInfo",
  async (
    arg: { userInfo: UserInfoData; uid: string },
    thunkAPI
  ): Promise<void> => {
    try {
      const { uid, userInfo } = arg;

      const userRef = doc(db, "users", uid);
      await setDoc(userRef, userInfo, { merge: true });
    } catch (error) {
      console.log(error);
    }
  }
);
