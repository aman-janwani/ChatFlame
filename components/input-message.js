import Image from "next/image";

const InputMessage = () => {
  return (
    <div className="self-stretch  rounded-xxs bg-seagreen-100   flex flex-row p-[0.94rem] items-center justify-start gap-[0.63rem]">
      <input
        className="[border:none] outline-none font-rubik text-[0.75rem] bg-[transparent] self-stretch flex-1 flex flex-row items-center justify-start"
        type="text"
        placeholder="Your Message"
      />
      <div className="  flex flex-row items-center justify-center gap-[0.63rem]">
        <Image width={20} height={20}
          className="relative w-[1.25rem] h-[1.25rem] shrink-0  "
          alt=""
          loading="lazy"
          src="/frame12.svg"
        />
        <Image width={20} height={20}
          className="relative w-[1.25rem] h-[1.25rem] shrink-0  "
          alt=""
          loading="lazy"
          src="/frame13.svg"
        />
        <Image width={24} height={24}
          className="relative w-[1.5rem] h-[1.5rem] shrink-0  "
          alt=""
          loading="lazy"
          src="/frame14.svg"
        />
      </div>
    </div>
  );
};

export default InputMessage;
