import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

/**
 * @description コンポーネントで容易に呼び出すための関数
 * @url https://redux-toolkit.js.org/tutorials/typescript#use-typed-hooks-in-components
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
