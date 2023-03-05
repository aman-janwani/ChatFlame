import { useCallback } from "react";
import { useRouter } from "next/router";
import SideBar from "../components/side-bar";
import ListBar from "../components/list-bar";
import MainInit from "../components/main-init";

const Desktop2 = () => {
  const router = useRouter();

  const onFrameContainer11Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="max-w-[110rem] mx-auto bg-white w-full max-h-screen   flex flex-row items-start justify-center">
      <SideBar untitledDesign65AdobeExpr="../untitled-design-65-adobe-express-11.svg" />
      <ListBar />
      <MainInit />
    </div>
  );
};

export default Desktop2;
