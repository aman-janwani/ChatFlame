const AddFriend = ({ onClose }) => {
  return (
    <div className="relative rounded-3xl bg-beige w-[43.75rem]   flex flex-col p-[1.25rem] box-border items-start justify-start gap-[0.63rem] max-w-full max-h-full text-left text-[1.5rem] text-darkolivegreen font-rubik">
      <div className="self-stretch   flex flex-row p-[1.25rem] items-center justify-start">
        <p className="m-0 relative font-medium">Add Person</p>
      </div>
      <div className="self-stretch   flex flex-row py-[0rem] px-[1.25rem] items-center justify-center">
        <input
          className="[border:none] outline-none font-rubik text-[1.25rem] bg-seagreen-200 flex-1 rounded-xxs   flex flex-row py-[1.25rem] px-[1.25rem] items-center justify-start"
          type="text"
          placeholder="Enter Email"
        />
      </div>
      <div className="self-stretch   flex flex-row py-[1.25rem] px-[10.75rem] items-center justify-center">
        <button className="cursor-pointer [border:none] p-0 bg-darkolivegreen rounded-xxs w-[8rem] h-[3.4rem] shrink-0   flex flex-row items-center justify-center">
          <div className="relative text-[1.1rem] font-medium font-rubik text-white text-left">
            Add
          </div>
        </button>
      </div>
    </div>
  );
};

export default AddFriend;
