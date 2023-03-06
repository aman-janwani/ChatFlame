import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import SideBar from "../components/side-bar";
import ListBar from "../components/list-bar2";
import Messages from "../components/messages";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import Login from "../components/Login";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

const Desktop1 = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      setDoc(
        doc(db, "users", user.uid),
        {
          email: user.email,
          lastSeen: serverTimestamp(),
          photoURL: user.photoURL,
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
    <div className="max-w-[110rem] mx-auto bg-white w-full max-h-screen   flex flex-row items-start justify-center">
      <SideBar />
      <ListBar />
      <Messages />
    </div>
  );
};

export default Desktop1;
