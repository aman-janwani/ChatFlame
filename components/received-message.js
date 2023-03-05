const ReceivedMessage = () => {
  return (
    <div className="self-stretch   flex flex-row py-[0.63rem] px-[0rem] items-start justify-start gap-[0.63rem] text-left text-[0.75rem] text-gray-100 font-rubik">
      <img
        className="relative rounded-base w-[2.19rem] h-[2.19rem] shrink-0 object-cover"
        alt=""
        src="../aman-janwani-2048-x-1152-relaxing-picture-42b07e6c31c845b69fe0ae8a0aa1f9d3-1@2x.png"
      />
      <div className="  flex flex-col items-start justify-start">
        <div className="self-stretch   flex flex-row py-[0.63rem] px-[0.25rem] items-center justify-between">
          <p className="m-0 relative font-medium">Aman Janwani</p>
          <p className="m-0 relative text-[0.63rem] text-gray-200">6:38PM</p>
        </div>
        <div className="rounded-tl-none rounded-tr-lg rounded-b-lg bg-seagreen-200 flex flex-col p-[0.63rem] items-start justify-start text-[0.63rem] text-darkolivegreen">
          <p className="m-0 relative">
            Conquistador Paracord Watch Strap Tutorial | UNDONE Watches
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReceivedMessage;
