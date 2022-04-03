import { NextPage } from "next";
import { useRouter } from "next/router";

const Page: NextPage = () => {
  const router = useRouter();

  // * Firebaseへのデータ定義
  const testFun = async () => {
    const res = await fetch("/api/test", {
      method: "POST",
      body: JSON.stringify({
        uid: "5jTGMC54UxYo0gPVnIYqeZ42Kq13",
      }),
    });

    console.log(res);
  };

  const routeToLink = () => {
    router.push("/user");
  };

  return (
    <div className="p-4">
      <h1 className="text-[18px] mb-2">● データ定義</h1>
      <div className="flex gap-x-4">
        <button
          type="button"
          className="bg-primary text-background1 py-2 w-[150px] rounded-[8px]"
          onClick={testFun}
        >
          設定
        </button>
        <button
          type="button"
          className="bg-primary text-background1 py-2 w-[150px] rounded-[8px]"
          onClick={routeToLink}
        >
          トップに戻る
        </button>
      </div>
    </div>
  );
};

export default Page;
