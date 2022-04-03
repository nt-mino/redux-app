import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { authSlice } from "./auth/authSlice";
import { userInfoSlice } from "./user/userInfoSlice";

const reducer = combineReducers({
  /**
   * @description 認証関連
   */
  auth: authSlice.reducer,
  /**
   * @description ユーザーデータ関連
   */
  userInfo: userInfoSlice.reducer,
});

export const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
