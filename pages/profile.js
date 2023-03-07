import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import SideBar from "../components/side-bar";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import Login from "../components/Login";
import { doc, setDoc, serverTimestamp, getDoc, query, collection, where } from "firebase/firestore";
import { signOut } from "firebase/auth";
import ChangeAbout from "../components/ChangeAbout";
import PortalPopup from "../components/portal-popup";
import { useCollection } from "react-firebase-hooks/firestore";

const Profile = () => {
  const [isFrameContainer3Open, setFrameContainer3Open] = useState(false);
  const router = useRouter();

  const [user] = useAuthState(auth);

  // get all user data from firestore with the user id
  const q = query(
    collection(db, "users"),
    where("email", "==", user?.email)
  );
  const [userSnapshot] = useCollection(q);
  const userData = userSnapshot?.docs?.[0]?.data();

  // create a sign out function
  const signOutUser = () => {
    signOut(auth);
  };

  const onFrameIcon1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const openFrameContainer3 = useCallback(() => {
    setFrameContainer3Open(true);
  }, []);

  const closeFrameContainer3 = useCallback(() => {
    setFrameContainer3Open(false);
  }, []);

  return (
    <div className="max-w-[110rem] mx-auto bg-white w-full max-h-screen   flex flex-row items-start justify-center font-rubik">
      <SideBar />
      <div className="self-stretch flex-1 bg-beige   flex flex-col items-start justify-start">
        <div className="self-stretch bg-white h-[5.81rem] shrink-0   flex flex-row py-[0.63rem] px-[1.25rem] box-border items-center justify-start gap-[2.19rem]">
          <Image
            width={36}
            height={36}
            className="relative w-[2.31rem] h-[2.31rem] shrink-0   cursor-pointer"
            alt=""
            loading="lazy"
            src="/frame1.svg"
            onClick={onFrameIcon1Click}
          />
          <p className="m-0 relative font-medium">Profile</p>
        </div>
        <div className="self-stretch overflow-y-scroll   flex flex-col py-[1.25rem] px-[0rem] items-center justify-start gap-[1.88rem] text-[1rem]">
          <div className="flex flex-col items-end justify-end">
            <Image
              width={323}
              height={323}
              className="relative rounded-base w-[20.19rem] h-[20.19rem] shrink-0 object-cover"
              alt=""
              loading="lazy"
              src={user?.photoURL}
            />
          </div>
          <div className="  flex flex-col py-[0.63rem] px-[0rem] items-start justify-start gap-[0.63rem]">
            <p className="m-0 relative font-medium">Your Name</p>
            <div className="w-[19.19rem]   flex flex-row py-[0.63rem] px-[0rem] box-border items-center justify-between text-[1.5rem] text-gray-100">
              <p className="m-0 relative font-medium">{user?.displayName}</p>
            </div>
          </div>
          <div className="  flex flex-col py-[0.63rem] px-[0rem] items-start justify-start gap-[0.63rem]">
            <p className="m-0 relative font-medium">Your Email</p>
            <div className="w-[19.19rem]   flex flex-row py-[0.63rem] px-[0rem] box-border items-center justify-between text-[1.5rem] text-gray-100">
              <p className="m-0 relative font-medium">{user?.email}</p>
            </div>
          </div>
          <div className="  flex flex-col py-[0.63rem] px-[0rem] items-start justify-start gap-[0.63rem]">
            <p className="m-0 relative font-medium">About</p>
            <div className="w-[19.19rem]   flex flex-row py-[0.63rem] px-[0rem] box-border items-center justify-between text-gray-100">
              <p className="m-0 relative inline-block w-[16.56rem] shrink-0">
                {userData?.about}
              </p>
              <Image
                onClick={openFrameContainer3}
                width={20}
                height={20}
                className="relative w-[1.38rem] h-[1.38rem] shrink-0  "
                alt=""
                loading="lazy"
                src="/frame3.svg"
              />
            </div>
          </div>
          <div className="  flex flex-col py-[0.63rem] px-[0rem] items-center justify-center gap-[0.63rem]">
            <button
              onClick={signOutUser}
              className="cursor-pointer [border:none] p-0 bg-red-500 rounded-xxs w-[20rem] h-[3.4rem] shrink-0   flex flex-row items-center justify-center"
            >
              <div className="relative text-[1.1rem] font-medium font-rubik text-white text-left">
                Logout
              </div>
            </button>
          </div>
        </div>
      </div>
      {isFrameContainer3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrameContainer3}
        >
          <ChangeAbout onClose={closeFrameContainer3} />
        </PortalPopup>
      )}
    </div>
  );
};

export default Profile;
