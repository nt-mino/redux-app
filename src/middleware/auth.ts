import { GetServerSidePropsContext } from "next";
import { auth, db } from "@/plugins/firebaseAdmin";

type Credential = {
  uid: string;
  email: string | null;
  emailVerified: boolean | null;
  photoURL: string | null;
  displayName: string | null;
};

export const verifyUser = () => async (context: GetServerSidePropsContext) => {
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
  const credential: Credential = {
    uid,
    email: email || null,
    emailVerified: emailVerified || null,
    displayName: displayName || null,
    photoURL: photoURL || null,
  };

  return {
    props: {
      credential: credential,
    },
  };
};
