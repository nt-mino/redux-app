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
import { asyncUserInfo, UserInfoData } from "@/ducks/user/asyncActions";
import clone from "just-clone";
import { fetcher } from "@/utils/swr";
import useSWRImmutable from "swr/immutable";

export const getServerSideProps: GetServerSideProps = verifyUser();

export type ApiResponse = {
  userInfoData: UserInfoData;
};

const Page: NextPage<AuthState> = ({ credential }) => {
  const router = useRouter();

  const routeToLink = () => {
    router.push("/test");
  };

  const { data } = useSWRImmutable<ApiResponse>(
    `/api/user/${credential.uid}/userInfo`,
    fetcher
  );
  const userInfoData = data?.userInfoData;

  // *** redux関連の処理 ***
  const selector = useAppSelector((state) => state.userInfo);
  const dispatch = useAppDispatch();

  const checkAsyncFun = async () => {
    const selectorCopy = clone(userInfoData!);
    selectorCopy.learnTime = 1000;

    await dispatch(
      asyncUserInfo({
        userInfo: selectorCopy,
        uid: credential.uid,
      })
    );
  };

  return (
    <div className="p-4 bg-background2 w-full h-screen">
      <p>
        uid: <span className="font-normal">{credential.uid}</span>
      </p>
      <div className="flex gap-x-4">
        <button onClick={checkAsyncFun}>非同期確認</button>
        <button onClick={routeToLink}>テストページ</button>
      </div>
    </div>
  );
};

export default Page;
