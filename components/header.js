import { useState, useCallback } from "react";
import RecipientContact from "./RecipientContact";
import PortalPopup from "../components/portal-popup";

const Header = () => {
  const [isFrameContainer18Open, setFrameContainer18Open] = useState(false);

  const openFrameContainer18 = useCallback(() => {
    setFrameContainer18Open(true);
  }, []);

  const closeFrameContainer18 = useCallback(() => {
    setFrameContainer18Open(false);
  }, []);

  return (
    <>
      <div className="self-stretch bg-white  flex flex-row p-[0.94rem] items-center justify-center gap-[0.63rem] text-left text-[1rem] text-black font-rubik">
        <img
          className="relative rounded-base w-[3.44rem] h-[3.44rem] shrink-0 object-cover"
          alt=""
          loading="lazy"
          src="../aman-janwani-a-relaxing-picture-15e86afb9ad44b3dbfba7636b019edf7-2@2x.png"
        />
        <div className="flex-1   flex flex-col p-[0.63rem] items-start justify-center gap-[0.63rem]">
          <p className="m-0 relative font-medium">Aman Janwani</p>
          <p className="m-0 relative text-[0.75rem] text-gray-200">
            last seen 6:54PM
          </p>
        </div>
        <div
          className="  flex flex-col p-[0.63rem] items-center justify-center cursor-pointer"
          onClick={openFrameContainer18}
        >
          <img
            className="relative w-[1.5rem] h-[1.5rem] shrink-0  "
            alt=""
            loading="lazy"
            src="../frame11.svg"
          />
        </div>
      </div>
      {isFrameContainer18Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top right"
          onOutsideClick={closeFrameContainer18}
        >
          <RecipientContact onClose={closeFrameContainer18} />
        </PortalPopup>
      )}
    </>
  );
};

export default Header;
