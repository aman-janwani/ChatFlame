import Image from "next/image";
import React from "react";
import getRecipientEmail from "../utils/getRecipientEmail";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import Moment from "react-moment";
import { useRouter } from "next/router";


const Chat = ({ users, id }) => {
  const router = useRouter();
  const [user] = useAuthState(auth);

  // console.log("users", users);

  const q = query(
    collection(db, "users"),
    where("email", "==", getRecipientEmail(users, user))
  );
  const [recipientSnapshot] = useCollection(q);
  const recipient = recipientSnapshot?.docs?.[0]?.data();

  const recipientEmail = getRecipientEmail(users, user);

  // get recipient data from firestore v9

  // console.log("recipient", recipient?.lastSeen?.toDate());

  const enterChat = () => {
    router.push(`/chat/${id}`);
  };

  

  return (
    <div onClick={enterChat} className="self-stretch   flex flex-row p-[0.94rem] items-center justify-start gap-[0.63rem] border-b-[1px] border-0 border-solid border-seagreen-200  hover:bg-beige cursor-pointer">
      {recipient ? (
        <Image
          width={55}
          height={55}
          className="relative rounded-large w-[3.44rem] h-[3.44rem] shrink-0 object-cover"
          alt=""
          loading="lazy"
          src={recipient?.photoURL}
        />
      ) : (
        <Image
          width={55}
          height={55}
          className="relative rounded-large w-[3.44rem] h-[3.44rem] shrink-0 object-cover"
          alt=""
          loading="lazy"
          src={`https://res.cloudinary.com/dfk5jbk5r/image/upload/v1678095426/ChatFlame/Vector_10_ulkc6j.svg`}
        />
      )}
      <div className="self-stretch flex-1   flex flex-col items-start justify-center gap-[0.63rem]">
        {recipient ? (
          <p className="m-0 relative font-medium">{recipient?.name}</p>
        ) : (
          <p className="m-0 relative font-medium">{recipientEmail}</p>
        )}
        <p className="m-0 relative text-[0.88rem] text-gray-200">
          Hello How are you?
        </p>
      </div>
      {recipient ? (
        <div className="self-stretch   flex flex-row items-start justify-end text-[0.75rem] text-gray-200">
          <p className="m-0 relative">
            <Moment format="LT"  >{recipient?.lastSeen?.toDate()}</Moment>
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Chat;
