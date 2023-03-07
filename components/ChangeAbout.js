import { useState } from "react";
import { db, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { setDoc, doc, serverTimestamp} from "firebase/firestore";

const ChangeAbout = ({ onClose }) => {
  const [user] = useAuthState(auth);
 

  const [input, setInput] = useState("");

  const updateAbout = async () => {

    if (!input) return;

    setDoc(
        doc(db, "users", user.uid),
        {
          email: user.email,
          lastSeen: serverTimestamp(),
          photoURL: user.photoURL,
          name: user.displayName,
          about: input,
        },
        { merge: true }
      );

    setInput("");
    onClose();
  };


  return (
    <div className="relative rounded-3xl bg-beige w-[43.75rem]   flex flex-col p-[1.25rem] box-border items-start justify-start gap-[0.63rem] max-w-full max-h-full text-left text-[1.5rem] text-darkolivegreen font-rubik">
      <div className="self-stretch   flex flex-row p-[1.25rem] items-center justify-start">
        <p className="m-0 relative font-medium">Update About</p>
      </div>
      <div className="self-stretch   flex flex-row py-[0rem] px-[1.25rem] items-center justify-center">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className={`border-none outline-none font-rubik text-[1.25rem] bg-seagreen-200 flex-1 rounded-xxs   flex flex-row py-[1.25rem] px-[1.25rem] items-center justify-start`}
          type="text"
          placeholder="Enter New About"
        />
      </div>
      <div className="self-stretch   flex flex-row py-[1.25rem] px-[10.75rem] items-center justify-center">
        <button
          onClick={updateAbout}
          className="cursor-pointer [border:none] p-0 bg-darkolivegreen rounded-xxs w-[8rem] h-[3.4rem] shrink-0   flex flex-row items-center justify-center"
        >
          <div className="relative text-[1.1rem] font-medium font-rubik text-white text-left">
            Update
          </div>
        </button>
      </div>
    </div>
  );
};

export default ChangeAbout;
