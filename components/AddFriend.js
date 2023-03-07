import { useState } from "react";
import * as EmailValidator from "email-validator";
import { db, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

const AddFriend = ({ onClose }) => {
  const [user] = useAuthState(auth);
  const q = query(
    collection(db, "chats"),
    where("users", "array-contains", user.email)
  );
  const [chatsSnapshot] = useCollection(q);
  // console.log("chatsSnapshot", chatsSnapshot);

  const [input, setInput] = useState("");
  const [error , setError] = useState(false);

  const createChat = async () => {
    // console.log("Creating a chat with ", input);

    if (!input) return;

    if (
      EmailValidator.validate(input) &&
      input !== user.email &&
      !chatsSnapshot?.docs.find((chat) => chat.data().users.find((user) => user === input)?.length > 0)
    ) {
      // We need to add the chat into the DB 'chats' collection
      const chat = await addDoc(collection(db, "chats"), {
        users: [user.email, input],
      }).then(() => {
        setInput("");
        onClose();
      });
      // console.log("chat should be created");
    }  else {
      // console.log("chat no need to be created");
      setError(true);
    }
  };


  return (
    <div className="relative rounded-3xl bg-beige w-[43.75rem]   flex flex-col p-[1.25rem] box-border items-start justify-start gap-[0.63rem] max-w-full max-h-full text-left text-[1.5rem] text-darkolivegreen font-rubik">
      <div className="self-stretch   flex flex-row p-[1.25rem] items-center justify-start">
        <p className="m-0 relative font-medium">Add Person</p>
      </div>
      <div className="self-stretch   flex flex-row py-[0rem] px-[1.25rem] items-center justify-center">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className={`${error ? ("border-2 border-solid border-red-500") : ("[border:none]")} outline-none font-rubik text-[1.25rem] bg-seagreen-200 flex-1 rounded-xxs   flex flex-row py-[1.25rem] px-[1.25rem] items-center justify-start`}
          type="text"
          placeholder="Enter Email"
        />
      </div>
      <div className="self-stretch   flex flex-row py-[1.25rem] px-[10.75rem] items-center justify-center">
        <button
          onClick={createChat}
          className="cursor-pointer [border:none] p-0 bg-darkolivegreen rounded-xxs w-[8rem] h-[3.4rem] shrink-0   flex flex-row items-center justify-center"
        >
          <div className="relative text-[1.1rem] font-medium font-rubik text-white text-left">
            Add
          </div>
        </button>
      </div>
    </div>
  );
};

export default AddFriend;
