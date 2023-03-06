import React, { useEffect } from "react";
import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import Login from "../components/Login";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

import "./global.css";

function MyApp({ Component, pageProps }) {
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      setDoc(
        doc(db, "users", user.uid),
        {
          email: user.email,
          lastSeen: serverTimestamp(),
          photoURL: user.photoURL,
          name: user.displayName,
          about: "",
        },
        { merge: true }
      );
    }
  }, [user]);

  if (!user) {
    return (
      <div className="max-w-[110rem] mx-auto bg-white w-full max-h-screen   flex flex-row items-start justify-center">
        <Login />
      </div>
    );
  }

  return (
    <React.Fragment>
      <Head>
        <title>ChatFlame</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
