import { useCallback } from "react";
import { useRouter } from "next/router";
import SideBar from "../components/side-bar";

const Desktop3 = () => {
  const router = useRouter();
  const onAmanJanwaniARelaxingPicturIconClick = useCallback(() => {
    router.push("/desktop3");
  }, [router]);

  const onFrameIcon1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="max-w-[110rem] mx-auto bg-white w-full max-h-screen   flex flex-row items-start justify-center font-rubik">
      <SideBar
        frame24Height="unset"
        frame24AlignSelf="stretch"
        untitledDesign65AdobeExpr="../untitled-design-65-adobe-express-13.svg"
        onAmanJanwaniARelaxingPicturIconClick={
          onAmanJanwaniARelaxingPicturIconClick
        }
        amanJanwaniARelaxingPictuCursor="pointer"
      />
      <div className="self-stretch flex-1 bg-beige   flex flex-col items-start justify-start">
        <div className="self-stretch bg-white h-[5.81rem] shrink-0   flex flex-row py-[0.63rem] px-[1.25rem] box-border items-center justify-start gap-[2.19rem]">
          <img
            className="relative w-[2.31rem] h-[2.31rem] shrink-0   cursor-pointer"
            alt=""
            loading="lazy"
            src="../frame1.svg"
            onClick={onFrameIcon1Click}
          />
          <p className="m-0 relative font-medium">Profile</p>
        </div>
        <div className="self-stretch overflow-y-scroll   flex flex-col py-[1.25rem] px-[0rem] items-center justify-start gap-[1.88rem] text-[1rem]">
          <div className="flex flex-col items-end justify-end">
            <img
              className="relative w-[1.38rem] h-[1.38rem] shrink-0  "
              alt=""
              loading="lazy"
              src="../frame2.svg"
            />
            <img
              className="relative rounded-base w-[20.19rem] h-[20.19rem] shrink-0 object-cover"
              alt=""
              loading="lazy"
              src="../aman-janwani-a-relaxing-picture-15e86afb9ad44b3dbfba7636b019edf7-4@2x.png"
            />
          </div>
          <div className="  flex flex-col py-[0.63rem] px-[0rem] items-start justify-start gap-[0.63rem]">
            <p className="m-0 relative font-medium">Your Name</p>
            <div className="w-[19.19rem]   flex flex-row py-[0.63rem] px-[0rem] box-border items-center justify-between text-[1.5rem] text-gray-100">
              <p className="m-0 relative font-medium">{`Aman janwani `}</p>
              <img
                className="relative w-[1.38rem] h-[1.38rem] shrink-0  "
                alt=""
                loading="lazy"
                src="../frame3.svg"
              />
            </div>
          </div>
          <div className="  flex flex-col py-[0.63rem] px-[0rem] items-start justify-start gap-[0.63rem]">
            <p className="m-0 relative font-medium">About</p>
            <div className="w-[19.19rem]   flex flex-row py-[0.63rem] px-[0rem] box-border items-center justify-between text-gray-100">
              <p className="m-0 relative inline-block w-[16.56rem] shrink-0">
                Conquistador Paracord Watch Strap Tutorial | UNDONE Watches
              </p>
              <img
                className="relative w-[1.38rem] h-[1.38rem] shrink-0  "
                alt=""
                loading="lazy"
                src="../frame3.svg"
              />
            </div>
          </div>
          <div className="  flex flex-col py-[0.63rem] px-[0rem] items-center justify-center gap-[0.63rem]">
            <button className="cursor-pointer [border:none] p-0 bg-red-500 rounded-xxs w-[20rem] h-[3.4rem] shrink-0   flex flex-row items-center justify-center">
              <div className="relative text-[1.1rem] font-medium font-rubik text-white text-left">
                Logout
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop3;
