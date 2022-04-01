import { createSlice } from "@reduxjs/toolkit";

export type AuthState = {
  credential: {
    uid: string;
    email: string;
    emailVerified: boolean;
    photoURL: string;
    displayName: string;
  };
};

// * ユーザーの認証情報
const initialState: AuthState = {
  credential: {
    uid: "",
    email: "",
    emailVerified: false,
    photoURL: "",
    displayName: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

// * Action Creatorsをエクスポートする
// export const {} = authSlice.actions;

export const selectCredential = (state: AuthState) => state.credential;

export default authSlice;
