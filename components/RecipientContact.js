import Image from "next/image";
import Moment from "react-moment";

const RecipientContact = ({ onClose, recipient, recipientEmail }) => {

  return (
    <div className="relative bg-beige w-[25rem] max-h-screen min-h-screen  flex flex-col items-center justify-start max-w-full text-left text-[1.25rem] text-darkolivegreen font-rubik">
      <div className="self-stretch bg-white h-[5.81rem] shrink-0   flex flex-row py-[2rem] px-[1.44rem] box-border items-center justify-start gap-[2.5rem]">
        <Image
          width={30}
          height={30}
          onClick={onClose}
          className="relative cursor-pointer w-[1.88rem] h-[1.88rem] shrink-0  "
          alt=""
          loading="lazy"
          src="/frame5.svg"
        />
        <p className="m-0 relative font-medium">Contact info</p>
      </div>
      <div className="self-stretch flex-1 overflow-y-scroll   flex flex-col py-[1.25rem] px-[0rem] items-center justify-start gap-[4.63rem] text-[1.75rem] text-gray-100">
        <div className="flex flex-col items-center justify-center gap-[0.94rem]">
          {recipient ? (
            <Image
              width={228}
              height={228}
              className="relative rounded-[100000000376832px] w-[14.25rem] h-[14.25rem] shrink-0 object-cover"
              alt=""
              loading="lazy"
              src={recipient?.photoURL}
            />
          ) : (
            <Image
              width={228}
              height={228}
              className="relative rounded-[100000000376832px] w-[14.25rem] h-[14.25rem] shrink-0 object-cover"
              alt=""
              loading="lazy"
              src={`https://res.cloudinary.com/dfk5jbk5r/image/upload/v1678095426/ChatFlame/Vector_10_ulkc6j.svg`}
            />
          )}
          {recipient ? (
            <p className="m-0 relative font-medium">{recipient?.name}</p>
          ) : (
            <p className="m-0 relative font-medium">{recipientEmail}</p>
          )}
          {recipient ? (
            <p className="m-0 relative text-[1rem] text-gray-200">
              last seen{" "}
              <Moment format="LT">{recipient?.lastSeen?.toDate()}</Moment>
            </p>
          ) : (
            <p className="m-0 relative text-[1rem] text-gray-200">
              last seen: unavailable
            </p>
          )}
          {recipient ? (
            <p className="m-0 relative text-[1.25rem] text-gray-200">
              {recipient?.email}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="self-stretch bg-seagreen-200   flex flex-col p-[1.25rem] items-start justify-start gap-[0.63rem] text-[1.25rem]">
          <p className="m-0 relative font-medium">About</p>
          {recipient ? (
            <p className="m-0 self-stretch relative text-[1rem]">
              {recipient?.about}
            </p>
          ) : (
            <p className="m-0 self-stretch relative text-[1rem]">
              unavailable
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipientContact;
