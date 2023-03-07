import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import {
  collection,
  addDoc,
  serverTimestamp,
  setDoc,
  doc,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";
// import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

const InputMessage = ({ ScrollToBottom }) => {
  const [user] = useAuthState(auth);
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);

  const router = useRouter();

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };

  const sendMessage = async (e) => {
    // console.log("sending message");
    e.preventDefault();

    // update the last seen
    await setDoc(
      doc(db, "users", user.uid),
      {
        lastSeen: serverTimestamp(),
      },
      { merge: true }
    );

    // add the message to the db

    addDoc(collection(doc(db, "chats", router.query.id), "messages"), {
      timestamp: serverTimestamp(),
      message: input,
      messageImage: image,
      user: user.email,
      photoURL: user.photoURL,
    });

    setInput("");
    setImage(null);
    ScrollToBottom();
  };

  const handleUploadImage = (e) => {
    // console.log(e.target.files[0]);
    const data = new FormData();
    data.append("file", e.target.files[0]);
    data.append("upload_preset", "ugfxe2q8");
    data.append("cloud_name", "dfk5jbk5r");
    fetch("https://api.cloudinary.com/v1_1/dfk5jbk5r/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setImage(data.url);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="self-stretch  rounded-xxs bg-seagreen-100   flex flex-row p-[0.94rem] items-center justify-start gap-[0.63rem]">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="[border:none] outline-none font-rubik text-[0.75rem] bg-[transparent] self-stretch flex-1 flex flex-row items-center justify-start"
          type="text"
          placeholder="Your Message"
        />
        <div>
          {image && (
            <Image
              onClick={() => setImage(null)}
              src={image}
              width={50}
              height={40}
              className="rounded-md cursor-pointer"
            />
          )}
        </div>
        <div className="  flex flex-row items-center justify-center gap-[0.63rem]">
          <Image
            onClick={() => setShowEmojis(!showEmojis)}
            width={20}
            height={20}
            className="relative w-[1.25rem] h-[1.25rem] shrink-0  "
            alt=""
            loading="lazy"
            src="/frame12.svg"
          />
          <label htmlFor="file">
            <Image
              width={20}
              height={20}
              className="relative w-[1.25rem] h-[1.25rem] shrink-0  "
              alt=""
              loading="lazy"
              src="/frame13.svg"
            />
          </label>
          <input
            id="file"
            type="file"
            onChange={handleUploadImage}
            className="hidden"
          />

          <button
            className="bg-transparent outline-none border-none
        "
            disabled={!input}
            type="submit"
            onClick={sendMessage}
          >
            <Image
              width={24}
              height={24}
              className="relative w-[1.5rem] h-[1.5rem] shrink-0  "
              alt=""
              loading="lazy"
              src="/frame14.svg"
            />
          </button>
        </div>
      </div>
      {showEmojis && (
        <div className="absolute bottom-20 right-5">
          <Picker onEmojiSelect={addEmoji} theme="light"  />
        </div>
      )}
    </>
  );
};

export default InputMessage;
