import { useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import SideBar from "../../components/side-bar";
import ListBar from "../../components/ListBar";
import Messages from "../../components/messages";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import {
  doc,
  setDoc,
  serverTimestamp,
  getDocs,
  getDoc,
  orderBy,
  collection,
} from "firebase/firestore";
import { getTime } from "date-fns";
import Head from "next/head";

const Desktop1 = ({ messages, chat }) => {
  const [user] = useAuthState(auth);

  const router = useRouter();
  // console.log("messages", messages);
  // console.log("chats", chat);
  return (
    <div className="max-w-[110rem] mx-auto bg-white w-full max-h-screen   flex flex-row items-start justify-center">
      <Head>
        <title>ChatFlame</title>
      </Head>
      <SideBar />
      <ListBar w="hid" />
      <Messages chat={chat} messages={messages} />
    </div>
  );
};

export default Desktop1;

export async function getStaticPaths() {
  // get all chat IDs from your database
  const chatsRef = collection(db, "chats");
  const chatsRes = await getDocs(chatsRef);
  const chats = chatsRes.docs.map((doc) => doc.id);

  // generate the paths for all chats
  const paths = chats.map((chat) => ({ params: { id: chat } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // fetch the messages on the server with the id
  const ref = doc(db, "chats", params.id);
  const messagesRes = await getDocs(collection(ref, "messages"));
  const messages = messagesRes.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .map((messages) => ({
      ...messages,
      timestamp: getTime(messages.timestamp.toDate()),
    }));

  const chatRes = await getDoc(ref);
  const chat = {
    id: chatRes.id,
    ...chatRes.data(),
  };

  return {
    props: {
      messages: JSON.stringify(messages),
      chat: chat,
    },
  };
}
