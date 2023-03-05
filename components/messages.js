import Header from "../components/header";
import ReceivedMessage from "../components/received-message";
import SentMessage from "../components/sent-message";
import InputMessage from "../components/input-message";

const Messages = () => {
  return (
    <div className="self-stretch flex-1 bg-beige overflow-y-scroll flex flex-col items-start justify-start text-left text-[1rem] text-black font-rubik">
      <Header />
      <div className="self-stretch flex-1 overflow-y-scroll flex flex-col p-[0.94rem] items-start justify-start text-[0.75rem] text-gray-100">
        <div className="self-stretch flex-1 overflow-y-scroll flex flex-col items-start justify-start gap-[0.63rem]">
          <ReceivedMessage />
          <ReceivedMessage />
          <SentMessage />
          <SentMessage />
          <ReceivedMessage />
          <SentMessage />
          <ReceivedMessage />
          <SentMessage />
        </div>
        <InputMessage />
      </div>
    </div>
  );
};

export default Messages;
