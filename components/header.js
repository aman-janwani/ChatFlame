import { useState, useCallback } from "react";
import RecipientContact from "./RecipientContact";
import PortalPopup from "../components/portal-popup";
import Image from "next/image";
import getRecipientEmail from "../utils/getRecipientEmail";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, where } from "firebase/firestore";
import Moment from "react-moment";
import { useRouter } from "next/router";

const Header = ({ chatUsers }) => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const q = query(
    collection(db, "users"),
    where("email", "==", getRecipientEmail(chatUsers, user))
  );
  const [recipientSnapshot] = useCollection(q);
  const recipient = recipientSnapshot?.docs?.[0]?.data();

  const recipientEmail = getRecipientEmail(chatUsers, user);

  // console.log("recipient", recipient);

  const [isFrameContainer18Open, setFrameContainer18Open] = useState(false);

  const openFrameContainer18 = useCallback(() => {
    setFrameContainer18Open(true);
  }, []);

  const closeFrameContainer18 = useCallback(() => {
    setFrameContainer18Open(false);
  }, []);

  const onFrameIcon1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <>
      <div className="self-stretch bg-white  flex flex-row p-[0.94rem] items-center justify-center gap-[0.63rem] text-left text-[1rem] text-black font-rubik">
        <div className="block lg:hidden">
          <Image
            width={25}
            height={25}
            className="relative w-[2.31rem] h-[2.31rem] shrink-0   cursor-pointer"
            alt=""
            loading="lazy"
            src="/frame1.svg"
            onClick={onFrameIcon1Click}
          />
        </div>
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
        <div className="flex-1   flex flex-col p-[0.63rem] items-start justify-center gap-[0.63rem]">
          {recipient ? (
            <p className="m-0 relative font-medium">{recipient?.name}</p>
          ) : (
            <p className="m-0 relative font-medium">{recipientEmail}</p>
          )}
          {recipient ? (
            <p className="m-0 relative text-[0.75rem] text-gray-200">
              last seen{" "}
              <Moment format="LT">{recipient?.lastSeen?.toDate()}</Moment>
            </p>
          ) : (
            <p className="m-0 relative text-[0.75rem] text-gray-200">
              last seen: unavailable
            </p>
          )}
        </div>
        <div
          className="  flex flex-col p-[0.63rem] items-center justify-center cursor-pointer"
          onClick={openFrameContainer18}
        >
          <Image
            width={24}
            height={24}
            className="relative w-[1.5rem] h-[1.5rem] shrink-0  "
            alt=""
            loading="lazy"
            src="/frame11.svg"
          />
        </div>
      </div>
      {isFrameContainer18Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top right"
          onOutsideClick={closeFrameContainer18}
        >
          <RecipientContact
            onClose={closeFrameContainer18}
            recipient={recipient}
            recipientEmail={recipientEmail}
          />
        </PortalPopup>
      )}
    </>
  );
};

export default Header;
