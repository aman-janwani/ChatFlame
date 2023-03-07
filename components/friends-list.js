import Image from "next/image";
import { useMemo } from "react";
import Chat from "./Chat";

const FriendsList = ({
  propBackgroundColor,
  onFrameContainer11Click,
  chats,
  messages
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  // console.log("chats", chats);

  return (
    <div className="self-stretch flex-1  overflow-y-scroll  flex flex-col items-start justify-start text-left text-[1rem] text-gray-100 font-rubik">
      {chats?.map((chat) => {
        return <Chat key={chat.id} id={chat.id} users={chat.data().users} />;
      })}
    </div>
  );
};

export default FriendsList;
