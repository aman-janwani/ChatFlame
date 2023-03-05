import { useCallback } from "react";
import { useRouter } from "next/router";
import SideBar from "../components/side-bar";
import ListBar2 from "../components/list-bar2";
import Messages from "../components/messages";

const Desktop1 = () => {
  const router = useRouter();

  const onAmanJanwaniARelaxingPicturIconClick = useCallback(() => {
    router.push("/desktop3");
  }, [router]);

  const onFrameContainer11Click = useCallback(() => {
    router.push("/desktop2");
  }, [router]);

  return (
    <div className="max-w-[110rem] mx-auto bg-white w-full max-h-screen   flex flex-row items-start justify-center">
      <SideBar
        frame24Height="unset"
        frame24AlignSelf="stretch"
        untitledDesign65AdobeExpr="../untitled-design-65-adobe-express-13.svg"
        onAmanJanwaniARelaxingPicturIconClick={
          onAmanJanwaniARelaxingPicturIconClick
        }
        amanJanwaniARelaxingPictuCursor="pointer"
      />
      <ListBar2 />
      <Messages />
    </div>
  );
};

export default Desktop1;
