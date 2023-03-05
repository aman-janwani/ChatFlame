import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import AddFriend from "./AddFriend";
import PortalPopup from "../components/portal-popup";
import FriendsList from "../components/friends-list";

const ListBar2 = () => {
  const router = useRouter();
  const [isFrameContainer3Open, setFrameContainer3Open] = useState(false);

  const onFrameContainer11Click = useCallback(() => {
    router.push("/desktop2");
  }, [router]);

  const openFrameContainer3 = useCallback(() => {
    setFrameContainer3Open(true);
  }, []);

  const closeFrameContainer3 = useCallback(() => {
    setFrameContainer3Open(false);
  }, []);

  return (
    <>
      <div className="self-stretch max-h-screen bg-white flex flex-col py-[0.63rem] px-[0rem] items-center justify-start gap-[0.63rem] text-left text-[2rem] text-gray-100 font-rubik  border-r-2 border-0 border-solid border-seagreen-200">
        <div className="flex flex-col items-center justify-center gap-[0.13rem]">
          <div className="self-stretch   flex flex-row p-[0.94rem] items-center justify-between">
            <img
              className="relative w-[3.13rem] h-[3.31rem] shrink-0   hidden"
              alt=""
              loading="lazy"
              src="../untitled-design-65-adobe-express-14.svg"
            />
            <p className="m-0 relative">Messages</p>
            <img
              className="relative w-[1.75rem] h-[1.75rem] shrink-0   cursor-pointer"
              alt=""
              loading="lazy"
              src="../frame9.svg"
              onClick={openFrameContainer3}
            />
          </div>
          <div className="self-stretch   flex flex-row py-[0rem] px-[0.94rem] items-start justify-start">
            <div className="rounded-xxs bg-seagreen-100 w-[23.13rem] shrink-0   flex flex-row py-[1.25rem] px-[0.63rem] box-border items-center justify-start gap-[0.63rem]">
              <img
                className="relative w-[1.25rem] h-[1.25rem] shrink-0  "
                alt=""
                loading="lazy"
                src="../frame10.svg"
              />
              <input
                className="[border:none] outline-none font-rubik text-[0.88rem] bg-[transparent] self-stretch flex-1 flex flex-row items-center justify-start"
                type="text"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
        <FriendsList
          propBackgroundColor="#f2f3d9"
          onFrameContainer11Click={onFrameContainer11Click}
        />
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

export default ListBar2;
