import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "@/plugins/firebase";
import { doc, setDoc } from "firebase/firestore";
import { UserInfo } from "./userInfoSlice";

export const asyncUserInfo = createAsyncThunk(
  "userInfo/asyncUserInfo",
  async (uid: string): Promise<void> => {
    try {
      const userRef = doc(db, "users", uid);
      await setDoc(
        userRef,
        {
          uid: "5jTGMC54UxYo0gPVnIYqeZ42Kq13",
          email: "minoru@gmail.com",
          learnTime: 10,
        },
        { merge: true }
      );
    } catch (error) {
      console.log(error);
    }
  }
);
