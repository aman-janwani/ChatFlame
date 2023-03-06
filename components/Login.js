import Image from "next/image";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import ReactLoading from "react-loading";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider);
  };
  const [user, loading] = useAuthState(auth);

  return (
    <div className="w-full h-screen bg-beige flex items-center justify-center">
      {/* Login Component */}
      <div className="bg-darkolivegreen p-10 min-w-[20rem] rounded-md flex flex-col items-center justify-center">
        <Image
          src="https://res.cloudinary.com/dfk5jbk5r/image/upload/v1678018561/ChatFlame/Untitled_design_65__adobe_express_2_w62o2i.svg"
          width={200}
          height={200}
          objectFit="contain"
        />
        <p className="text-[35px] font-rubik font-medium text-beige">
          Chat Flame
        </p>
        {loading ? (
          <ReactLoading
            type={"bubbles"}
            color={"#3F9263"}
            height={40}
            width={80}
          />
        ) : (
          <button
            onClick={signIn}
            className="cursor-pointer [border:none] p-0 bg-seagreen-200/100 rounded-xxs w-[20rem] h-[3.4rem] shrink-0   flex flex-row items-center justify-center"
          >
            <div className="relative text-[1.1rem] font-medium font-rubik text-white text-left">
              Login with Google
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
