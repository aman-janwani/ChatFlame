import Header from "../components/header";
import ReceivedMessage from "../components/received-message";
import SentMessage from "../components/sent-message";
import InputMessage from "../components/input-message";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { useRouter } from "next/router";
import { collection, doc, getDocs, query, orderBy } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

const Messages = ({ chat, messages }) => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const messagesRef = query(
    collection(doc(db, "chats", router.query.id), "messages"),
    orderBy("timestamp", "asc")
  );
  const [messagesSnapshot] = useCollection(messagesRef);

  console.log("messages", messagesSnapshot);

  const showMessages = () => {
    if (messagesSnapshot) {
      return messagesSnapshot.docs.map((message) => (
        <>
          {message.data().user === user.email ? (
            <SentMessage
              key={message.id}
              message={{
                ...message.data(),
                timestamp: message.data().timestamp?.toDate().getTime(),
              }}
            />
          ) : (
            <ReceivedMessage
              key={message.id}
              message={{
                ...message.data(),
                timestamp: message.data().timestamp?.toDate().getTime(),
              }}
            />
          )}
        </>
      ));
    } else {
      return JSON.parse(messages).map((message) => (
        <>
          {message.user === user.email ? (
            <SentMessage key={message.id} message={message} />
          ) : (
            <ReceivedMessage key={message.id} message={message} />
          )}
        </>
      ));
    }
  };

  return (
    <div className="self-stretch flex-1 bg-beige overflow-y-scroll flex flex-col items-start justify-start text-left text-[1rem] text-black font-rubik">
      <Header chatUsers={chat?.users} />
      <div className="self-stretch flex-1 overflow-y-scroll flex flex-col px-[0.94rem] pb-[0.94rem] items-start justify-start text-[0.75rem] text-gray-100">
        <div className="self-stretch flex-1 overflow-y-scroll flex flex-col items-start justify-start gap-[0.63rem]">
          {showMessages()}
        </div>
        <InputMessage />
      </div>
    </div>
  );
};

export default Messages;
