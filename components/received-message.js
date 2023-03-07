import Image from "next/image";
import Moment from "react-moment";

const ReceivedMessage = ({ message }) => {
  return (
    <div className="self-stretch   flex flex-row py-[0.63rem] px-[0rem] items-start justify-start gap-[0.63rem] text-left text-[0.75rem] text-gray-100 font-rubik">
      <Image
        width={35}
        height={35}
        className="relative rounded-base w-[2.19rem] h-[2.19rem] shrink-0 object-cover"
        alt=""
        src={message?.photoURL}
      />
      <div className="  flex flex-col items-start justify-start">
        <div className="self-stretch   flex flex-row py-[0.63rem] px-[0.25rem] items-center justify-end">
          <p className="m-0 relative text-[0.63rem] text-gray-200">
            <Moment format="h:mm A">{message?.timestamp}</Moment>
          </p>
        </div>
        <div className="rounded-tl-none rounded-tr-lg rounded-b-lg bg-seagreen-200 flex flex-col p-[0.63rem] items-start justify-start text-[14px] text-darkolivegreen">
          {message?.messageImage && (
            <div className="mb-5 w-80 h-80 relative rounded-lg ">
              <Image
                layout="fill"
                objectFit="cover"
                className="rounded-lg shrink-0 object-cover"
                alt=""
                src={message?.messageImage}
              />
            </div>
          )}
          <p className="m-0 relative">{message?.message}</p>
        </div>
      </div>
    </div>
  );
};

export default ReceivedMessage;
