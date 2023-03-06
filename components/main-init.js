import Image from "next/image";

const MainInit = () => {
  return (
    <div className="self-stretch flex-1 bg-beige max-h-screen   flex flex-col items-center justify-center">
      <Image width={733} height={545}
        className="relative w-[45.84rem] h-[34.11rem] shrink-0  "
        alt=""
        loading="lazy"
        src="/undraw-online-chat-re-c4lx-1.svg"
      />
    </div>
  );
};

export default MainInit;
