// import { useCallback } from "react";
// import { useRouter } from "next/router";
// import FriendsList from "../components/friends-list";
// import Image from "next/image";

// const ListBar = () => {
//   const router = useRouter();

//   const onFrameContainer11Click = useCallback(() => {
//     router.push("/");
//   }, [router]);

//   return (
//     <div className="self-stretch bg-white w-[25rem] shrink-0   flex flex-col py-[0.63rem] px-[0rem] box-border items-center justify-start gap-[0.63rem] text-left text-[2rem] text-gray-100 font-rubik">
//       <div className="flex flex-col items-center justify-center gap-[0.13rem]">
//         <div className="self-stretch   flex flex-row p-[0.94rem] items-center justify-between">
//           <div className="hidden">
//             <Image
//               width={50}
//               height={50}
//               className="relative w-[3.13rem] h-[3.31rem] shrink-0   hidden"
//               alt=""
//               loading="lazy"
//               src="/untitled-design-65-adobe-express-14.svg"
//             />
//           </div>
//           <p className="m-0 relative">Messages</p>
//           <div className="relative w-[1.75rem] h-[1.75rem] shrink-0  ">
//             <Image
//               width={20}
//               height={20}
//               className="absolute h-[85.27%] w-[85.27%] top-[5.8%] right-[5.8%] bottom-[8.93%] left-[8.93%] max-w-full   max-h-full"
//               alt=""
//               loading="lazy"
//               src="/vector.svg"
//             />
//           </div>
//         </div>
//         <div className="self-stretch   flex flex-row py-[0rem] px-[0.94rem] items-start justify-start">
//           <div className="rounded-xxs bg-seagreen-100 w-[23.13rem] shrink-0   flex flex-row py-[1.25rem] px-[0.63rem] box-border items-center justify-start gap-[0.63rem]">
//             <Image
//               width={20}
//               height={20}
//               className="relative w-[1.25rem] h-[1.25rem] shrink-0  "
//               alt=""
//               loading="lazy"
//               src="/frame7.svg"
//             />
//             <input
//               className="[border:none] outline-none font-rubik text-[0.88rem] bg-[transparent] self-stretch flex-1 flex flex-row items-center justify-start"
//               type="text"
//               placeholder="Search..."
//             />
//           </div>
//         </div>
//       </div>
//       <FriendsList onFrameContainer11Click={onFrameContainer11Click} />
//     </div>
//   );
// };

// export default ListBar;
