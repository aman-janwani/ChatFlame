import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";


const SideBar = ({
  frame24Height,
  frame24AlignSelf,
  untitledDesign65AdobeExpr,
  // onAmanJanwaniARelaxingPicturIconClick,
  amanJanwaniARelaxingPictuCursor,
}) => {
  const [user] = useAuthState(auth);

  const router = useRouter();

  const onProfileClick = useCallback(() => {
    router.push("/profile");
  }, [router]);

  const onChatClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onLogoClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const frameDivStyle = useMemo(() => {
    return {
      height: frame24Height,
      alignSelf: frame24AlignSelf,
    };
  }, [frame24Height, frame24AlignSelf]);

  const amanJanwaniARelaxingPicturIconStyle = useMemo(() => {
    return {
      cursor: amanJanwaniARelaxingPictuCursor,
    };
  }, [amanJanwaniARelaxingPictuCursor]);

  return (
    <div
      className="hidden md:flex bg-darkolivegreen w-[6.25rem] max-h-min min-h-screen shrink-0   flex-col p-[0.63rem] box-border items-center justify-between"
      style={frameDivStyle}
    >
      <Image width={50} height={50}
        className="relative w-[3.13rem] h-[3.31rem] shrink-0 cursor-pointer "
        alt=""
        loading="lazy"
        src={"/untitled-design-65-adobe-express-11.svg"}
        onClick={onLogoClick}
        
      />
      <Image width={24} height={24}
        className="relative w-[1.5rem] h-[1.5rem] shrink-0  cursor-pointer "
        alt=""
        loading="lazy"
        src="/frame.svg"
        onClick={onChatClick}
      />
      <Image width={50} height={50}
        className="relative rounded-small w-[3.13rem] h-[3.13rem] shrink-0 object-cover cursor-pointer"
        alt=""
        loading="lazy"
        src={user?.photoURL}
        onClick={onProfileClick}
      />
    </div>
  );
};

export default SideBar;
