import { createSlice } from "@reduxjs/toolkit";

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
});

// * Action Creatorsをエクスポートする
// export const {} = userInfoSlice.actions;

export const selectUserInfo = (state: UserInfo) => state.userInfo;

export default userInfoSlice;
