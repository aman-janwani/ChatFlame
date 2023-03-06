import Image from "next/image";

const SentMessage = () => {
  return (
    <div className="self-stretch   flex flex-row py-[0.63rem] px-[0rem] items-start justify-end gap-[0.63rem] text-left text-[0.63rem] text-gray-200 font-rubik">
      <div className="  flex flex-col items-start justify-start">
        <div className="self-stretch   flex flex-row py-[0.63rem] px-[0.25rem] items-center justify-between">
          <p className="m-0 relative">6:38PM</p>
          <p className="m-0 relative text-[0.75rem] font-medium text-gray-100">
            Aman Janwani
          </p>
        </div>
        <div className="rounded-tl-lg rounded-tr-none rounded-b-lg bg-darkolivegreen   flex flex-col p-[0.63rem] items-start justify-start text-white">
          <p className="m-0 relative">
            Conquistador Paracord Watch Strap Tutorial | UNDONE Watches
          </p>
        </div>
      </div>
      <Image width={35} height={35}
        className="relative rounded-base w-[2.19rem] h-[2.19rem] shrink-0 object-cover"
        alt=""
        loading="lazy"
        src="/aman-janwani-2048-x-1152-relaxing-picture-42b07e6c31c845b69fe0ae8a0aa1f9d3-1@2x.png"
      />
    </div>
  );
};

export default SentMessage;
