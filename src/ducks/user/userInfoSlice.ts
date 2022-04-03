import { createSlice } from "@reduxjs/toolkit";
import { asyncUserInfo } from "./asyncActions";

export type UserInfo = {
  userInfo: {
    uid: string;
    email: string;
    learnTime: number;
  };
};

// * ユーザーデータ
const initialState: UserInfo = {
  userInfo: {
    uid: "",
    email: "",
    learnTime: 0,
  },
};

export const userInfoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(asyncUserInfo.pending, (state, action) => {
      // * 非同期Action実行中に実行される
      return;
    });
    builder.addCase(asyncUserInfo.rejected, (state, action) => {
      // * 非同期Actionに失敗した際に実行される
      return;
    });
    builder.addCase(asyncUserInfo.fulfilled, (state, action) => {
      // * 非同期Actionに正常した際に実行される
      return;
    });
  },
});

// * Action Creatorsをエクスポートする
// export const {} = userInfoSlice.actions;

export const selectUserInfo = (state: UserInfo) => state.userInfo;

export default userInfoSlice;
