import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  reducers: {
    // * メールアドレス変更
    changeEmail: (state, action) => {
      const copyInitialState = {
        credential: {
          uid: "",
          email: action.payload,
          emailVerified: false,
          photoURL: "",
          displayName: "",
        },
      };
      state.credential = copyInitialState.credential;
    },
  },
});

// * Action Creatorsをエクスポートする
export const { changeEmail } = authSlice.actions;

export const selectCredential = (state: AuthState) => state.credential;

export default authSlice;
