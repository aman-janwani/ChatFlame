import Image from "next/image";
import { useMemo } from "react";

const FriendsList = ({ propBackgroundColor, onFrameContainer11Click }) => {
  const frameDiv1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className="self-stretch flex-1  overflow-y-scroll  flex flex-col items-start justify-start text-left text-[1rem] text-gray-100 font-rubik">
      <div className="self-stretch   flex flex-row p-[0.94rem] items-center justify-start gap-[0.63rem] border-b-[1px] border-0 border-solid border-seagreen-200  hover:bg-beige cursor-pointer">
        <Image width={55} height={55}
          className="relative rounded-large w-[3.44rem] h-[3.44rem] shrink-0 object-cover"
          alt=""
          loading="lazy"
          src="/aman-janwani-2048-x-1152-relaxing-picture-65afdf4323fe4e73b8603f71db8ef040-1@2x.png"
        />
        <div className="self-stretch flex-1   flex flex-col items-start justify-center gap-[0.63rem]">
          <p className="m-0 relative font-medium">Aman Janwani</p>
          <p className="m-0 relative text-[0.88rem] text-gray-200">
            Hello How are you?
          </p>
        </div>
        <div className="self-stretch   flex flex-row items-start justify-end text-[0.75rem] text-gray-200">
          <p className="m-0 relative">6:38PM</p>
        </div>
      </div>
      <div
        className="self-stretch   flex flex-row p-[0.94rem] items-center justify-start gap-[0.63rem] cursor-pointer border-b-[1px] border-0 border-solid border-seagreen-200 hover:bg-beige"
      >
        <Image width={55} height={55}
          className="relative rounded-large w-[3.44rem] h-[3.44rem] shrink-0 object-cover"
          alt=""
          loading="lazy"
          src="/aman-janwani-2048-x-1152-relaxing-picture-65afdf4323fe4e73b8603f71db8ef040-1@2x.png"
        />
        <div className="self-stretch flex-1   flex flex-col items-start justify-center gap-[0.63rem]">
          <p className="m-0 relative font-medium">Aman Janwani</p>
          <p className="m-0 relative text-[0.88rem] text-gray-200">
            Hello How are you?
          </p>
        </div>
        <div className="self-stretch   flex flex-row items-start justify-end text-[0.75rem] text-gray-200">
          <p className="m-0 relative">6:38PM</p>
        </div>
      </div>
    </div>
  );
};

export default FriendsList;
