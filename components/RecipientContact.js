const RecipientContact = ({ onClose }) => {
  return (
    <div className="relative bg-beige w-[25rem] max-h-screen min-h-screen  flex flex-col items-center justify-start max-w-full text-left text-[1.25rem] text-darkolivegreen font-rubik">
      <div className="self-stretch bg-white h-[5.81rem] shrink-0   flex flex-row py-[2rem] px-[1.44rem] box-border items-center justify-start gap-[2.5rem]">
        <img
        onClick={onClose}
          className="relative cursor-pointer w-[1.88rem] h-[1.88rem] shrink-0  "
          alt=""
          loading="lazy"
          src="../frame5.svg"
        />
        <p className="m-0 relative font-medium">Contact info</p>
      </div>
      <div className="self-stretch flex-1 overflow-y-scroll   flex flex-col py-[1.25rem] px-[0rem] items-center justify-start gap-[4.63rem] text-[2rem] text-gray-100">
        <div className="flex flex-col items-center justify-center gap-[0.94rem]">
          <img
            className="relative rounded-[100000000376832px] w-[14.25rem] h-[14.25rem] shrink-0 object-cover"
            alt=""
            loading="lazy"
            src="../aman-janwani-a-relaxing-picture-15e86afb9ad44b3dbfba7636b019edf7-3@2x.png"
          />
          <p className="m-0 relative font-medium">Aman Janwani</p>
          <p className="m-0 relative text-[1.25rem] text-gray-200">
            +91 7879599816
          </p>
        </div>
        <div className="self-stretch bg-seagreen-200   flex flex-col p-[1.25rem] items-start justify-start gap-[0.63rem] text-[1.25rem]">
          <p className="m-0 relative font-medium">About</p>
          <p className="m-0 self-stretch relative text-[1rem]">
            Conquistador Paracord Watch Strap Tutorial | UNDONE Watches
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipientContact;
