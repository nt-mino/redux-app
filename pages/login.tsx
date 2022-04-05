import { NextPage } from "next";
import { useRouter } from "next/router";

/**
 * @description 認証データ
 * email: minoru@gmail.com
 * pass: password
 */

const Page: NextPage = () => {
  const router = useRouter();

  const routeToLink = () => {
    router.push("/user");
  };

  return (
    <div className="p-4">
      {/* TODO: ログインページのデザイン */}
      <h1 className="text-[21px]">ログインページ</h1>
      <button
        type="button"
        className="bg-blue-400 text-white p-2 rounded-lg"
        onClick={routeToLink}
      >
        トップに戻る
      </button>
    </div>
  );
};

export default Page;
