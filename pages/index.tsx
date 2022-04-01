import { GetServerSideProps, NextPage } from "next";
import { useAppSelector, useAppDispatch } from "@/ducks/hooks";
import { store } from "@/ducks/store";
import { useRouter } from "next/router";
import { auth } from "@/plugins/firebaseAdmin";
import { AuthState } from "@/ducks/auth/authSlice";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userCredential = await auth
    .getUser("5jTGMC54UxYo0gPVnIYqeZ42Kq13")
    .catch(() => null);

  if (!userCredential) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const { uid, email, emailVerified, displayName, photoURL } = userCredential;
  const credential = {
    uid,
    email: email,
    emailVerified: emailVerified,
    displayName: displayName || null,
    photoURL: photoURL || null,
  };

  return {
    props: {
      credential: credential,
    },
  };
};

const Page: NextPage<AuthState> = ({ credential }) => {
  console.log(credential);
  return (
    <div>
      {/* <p>{credential.uid}</p> */}
      <p></p>
    </div>
  );
};

export default Page;
