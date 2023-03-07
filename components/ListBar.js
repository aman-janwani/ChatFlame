import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/router";
import AddFriend from "./AddFriend";
import PortalPopup from "./portal-popup";
import FriendsList from "./friends-list";
import Image from "next/image";
import { db, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";


const ListBar = ({w}) => {
  const [isFrameContainer3Open, setFrameContainer3Open] = useState(false);
  const [chats, setChats] = useState([]);
  const router = useRouter();
  const [user] = useAuthState(auth);

  const q = query(
    collection(db, "chats"),
    where("users", "array-contains", user.email)
  );
  const [chatsSnapshot] = useCollection(q);

  // console.log("chatsSnapshot", chatsSnapshot?.docs);
  
  useEffect(() => {
    if (chatsSnapshot?.docs) {
      setChats(chatsSnapshot.docs);
    }
  }, [chatsSnapshot]);
    

  const onCLick = useCallback(() => {
    router.push("/profile");
  }, [router]);

  const openFrameContainer3 = useCallback(() => {
    setFrameContainer3Open(true);
  }, []);

  const closeFrameContainer3 = useCallback(() => {
    setFrameContainer3Open(false);
  }, []);

  return (
    <>
      <div className={`${w==="full" ? ("w-full lg:w-fit"):("")} ${w==="hid" ? ("w-0 hidden lg:flex lg:w-fit"):("")} self-stretch max-h-screen bg-white flex flex-col py-[0.63rem] px-[0rem] items-center justify-start gap-[0.63rem] text-left text-[2rem] text-gray-100 font-rubik  border-r-[1px] border-0 border-solid border-seagreen-200`}>
        <div className="flex flex-col w-full items-center justify-center gap-[0.13rem]">
          <div className="self-stretch   flex flex-row p-[0.94rem] items-center justify-between">
            <div className="block md:hidden">
              <Image
                width={50}
                height={50}
                onClick={onCLick}
                className="relative w-[3.13rem] h-[3.31rem] shrink-0 "
                alt=""
                loading="lazy"
                src="/untitled-design-65-adobe-express-14.svg"
              />
            </div>
            <p className="m-0 relative">Messages</p>
            <Image
              width={20}
              height={20}
              className="relative w-[1.75rem] h-[1.75rem] shrink-0   cursor-pointer"
              alt=""
              loading="lazy"
              src="/frame9.svg"
              onClick={openFrameContainer3}
            />
          </div>
          <div className="self-stretch   flex flex-row py-[0rem] px-[0.94rem] items-start justify-start">
            <div className="rounded-xxs bg-seagreen-100 min-w-[23.13rem] shrink-0   flex flex-row py-[1.25rem] px-[0.63rem] box-border items-center justify-start gap-[0.63rem]">
              <Image
                width={20}
                height={20}
                className="relative w-[1.25rem] h-[1.25rem] shrink-0  "
                alt=""
                loading="lazy"
                src="/frame10.svg"
              />
              <input
                className="[border:none] outline-none font-rubik text-[0.88rem] bg-[transparent] self-stretch flex-1 flex flex-row items-center justify-start"
                type="text"
                disabled
                placeholder="Coming Soon"
              />
            </div>
          </div>
        </div>
        <FriendsList chats={chats} userLoggedIn={user} />
      </div>
      {isFrameContainer3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrameContainer3}
        >
          <AddFriend onClose={closeFrameContainer3} />
        </PortalPopup>
      )}
    </>
  );
};

export default ListBar;
