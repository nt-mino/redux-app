import { GetServerSideProps, NextPage } from "next";
import { useAppSelector, useAppDispatch } from "@/ducks/hooks";
import { store } from "@/ducks/store";
import { useRouter } from "next/router";
import {
  AuthState,
  selectCredential,
  changeEmail,
} from "@/ducks/auth/authSlice";
import { verifyUser } from "@/middleware/auth";

export const getServerSideProps: GetServerSideProps = verifyUser();

const Page: NextPage<AuthState> = ({ credential }) => {
  const router = useRouter();
  const selector = useAppSelector((state) => state.auth.credential);
  console.log(selector);

  const dispatch = useAppDispatch();

  const changeFun = () => {
    dispatch(changeEmail("test123@gmail.com"));
  };

  const state = store.getState().auth.credential;

  const checkFun = () => {
    console.log(state);
  };

  const routeToLink = () => {
    router.push("/test");
  };

  return (
    <div className="p-4 bg-background2 w-full h-screen">
      <p>{state.email}</p>
      <p>
        uid: <span className="font-normal">{credential.uid}</span>
      </p>
      <div className="flex gap-x-4">
        <button type="button" onClick={changeFun}>
          変更
        </button>
        <button onClick={checkFun}>確認</button>
        <button onClick={routeToLink}>テストページ</button>
      </div>
    </div>
  );
};

export default Page;
