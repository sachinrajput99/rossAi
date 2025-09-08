import React from "react";
import FancyButton from "./FancyButton";

const HeroSection = () => {
  return (
    <section
      className=" z-10 mx-auto flex max-w-8xl flex-col items-center gap-8  pb-12 text-center 
                        md:flex-row md:items-start md:gap-16 md:text-left lg:pb-32 lg:pt-6 bg-black text-white"
    >
      {/* Left Side */}
      <div className="flex flex-col items-center md:items-start gap-6 max-w-xl">
        {/* Top Badge Link */}
        <div className="space-y-4">
          <div className="relative w-full lg:w-auto">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto inline-block w-fit md:mx-0"
            >
              <div
                className="cursor-pointer text-center text-sm leading-normal text-cyan-500 backdrop-blur-sm"
                style={{ borderRadius: "1.25rem" }}
              >
                <div
                  className="relative h-full w-full overflow-hidden transition-all duration-300 bg-separator1 p-[1px]"
                  style={{ borderRadius: "24px" }}
                >
                  <div
                    className="relative h-full w-full bg-bg1 px-4 py-2"
                    style={{ borderRadius: "24px" }}
                  >
                    <div
                      className="absolute bg-bg1/80 left-[0.5px] top-[0.5px] h-[calc(100%-1px)] w-[calc(100%-1px)]"
                      style={{ borderRadius: "24px" }}
                    ></div>
                    <div>
                      <div className="flex items-center justify-between gap-2 text-fg0">
                        <div className="text-xs font-semibold">
                          The AI Legal OS
                        </div>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          role="presentation"
                          className="h-3 w-3 text-fg0"
                        >
                          <path
                            d="M9 4L17 12L9 20"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="square"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Heading + Subtext */}
          <div className="space-y-2">
            <div className="space-y-2 text-fg0 [&>h1]:whitespace-nowrap">
              <h1 className="z-20 text-pretty text-white tracking-tight lg:text-5xl text-4xl font-light">
                <span>The </span>
                <span>Strategic </span>
                <span>AI </span>
                <span className="text-cyan-400 drop-shadow-[0_0_8px_rgb(3,92,109)]">
                  Co -
                  <br />
                </span>
                <span className="text-cyan-400 drop-shadow-[0_0_8px_rgb(3,92,109)]">
                  Pilot{" "}
                </span>
                <span className="text-cyan-400 drop-shadow-[0_0_8px_rgb(3,92,109)]">
                  For{" "}
                </span>
                <span className="text-cyan-400 drop-shadow-[0_0_8px_rgb(3,92,109)]">
                  Law{" "}
                </span>
              </h1>
            </div>
            <p className="lg:font-regular pt-[8px] mt-[8px] font-regular text-[#B2b2b2] text-pretty text-base text-fg2 lg:text-lg">
              Automate routine work, uncover critical insights, and gain a
              data-driven edge in every case. Ross AI is the operating system
              for the modern law firm, built for the 99% of practices left
              behind by enterprise AI.
            </p>
          </div>
        </div>
        {/* Buttons Section */}
        <div className="flex w-full mt-[16px] flex-col gap-4 md:flex-row">
          <FancyButton
            buttonName="Request a Demo

"
            showIcon={false}
          />

          {/* Talk to Agent Button */}
          <div className="basis-1/2">
            <div
              className="relative h-full w-full overflow-hidden transition-all duration-300 bg-separator1 p-[1px]"
              style={{ borderRadius: "4px" }}
            >
              <div
                className="relative h-full w-full bg-bg1"
                style={{ borderRadius: "4px" }}
              >
                <div
                  className="absolute z-0 rounded-full bg-lk-200"
                  style={{
                    width: "40px",
                    height: "40px",
                    transform: "translate(-50%, -1%)",
                    filter: "blur(20px)",
                    opacity: 1,
                    left: "50.8739%",
                    top: "0%",
                  }}
                ></div>
                <div
                  className="absolute bg-bg1/80 left-[0.5px] top-[0.5px] h-[calc(100%-1px)] w-[calc(100%-1px)]"
                  style={{ borderRadius: "4px" }}
                ></div>
                <button className="relative inline-flex h-full w-full cursor-pointer items-center justify-center py-2">
                  <div className="absolute left-2 top-1/2 hidden h-5 w-5 -translate-y-1/2 items-center justify-center rounded-sm border border-separator1 bg-bg2 font-mono text-xxs text-fg1 lg:flex">
                    T
                  </div>
                  <span className="flex text-[#B2b2b2] items-center justify-center gap-1 pl-2 text-sm font-semibold text-fg1">
                    Start Your 14-Day Free Trial
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Features */}
        <div className="h-[250px] flex  text-[#b2b2b2] justify-end">
          <div className="z-10 flex grow flex-col justify-end md:max-w-prose">
            <div className="relative">
              <button className="flex w-full items-center justify-center gap-2 py-2 md:justify-start text-fg3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="presentation"
                  className="h-5 w-5"
                >
                  <path
                    d="M7 3.75V7M7 7V10.25M7 7H3.75M7 7H10.25M19.2981 14.7019L17 17M17 17L14.7019 19.2981M17 17L14.7019 14.7019M17 17L19.2981 19.2981M17 10.25C15.2051 10.25 13.75 8.79493 13.75 7C13.75 5.20507 15.2051 3.75 17 3.75C18.7949 3.75 20.25 5.20507 20.25 7C20.25 8.79493 18.7949 10.25 17 10.25ZM3.75 13.75H10.25V20.25H3.75V13.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
                <span className="text-base hover:text-white font-semibold">
                  Legal Research AI Assistant
                </span>
              </button>
            </div>

            <div className="relative">
              <button className="flex w-full items-center justify-center gap-2 py-2 md:justify-start text-fg3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="presentation"
                  className="h-5 w-5"
                >
                  <path
                    d="M3.25 7.75L7.25 3.75L11.25 7.75M12.75 16.25L16.75 20.25L20.75 16.25M7.25 5V20.25M16.75 3.75V19.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
                <span className="text-base hover:text-white font-semibold">
                  Secure Case Vault (storing firm&apos;s own knowledge base)
                </span>
              </button>
            </div>

            <div className="relative">
              <button className="flex w-full items-center justify-center gap-2 py-2 md:justify-start text-fg0">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="presentation"
                  className="h-5 w-5"
                >
                  <path
                    d="M7.75 3.75V20.25M3.75 9.75V14.25M12 7.75V16.25M16.25 5.75V18.25M20.25 9.75V14.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="square"
                  />
                </svg>
                <span className="text-base hover:text-white font-semibold">
                  Strategic Analytics Using Workflow Automation
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Placeholder Image */}
      <div className="flex-1 mt-10 md:mt-0">
        <div className="w-full h-96 rounded-xl bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
          {/* <span className="text-gray-500">
            [ Add Image / Illustration Here ]
          </span> */}
          <img src="/hero.png" alt="Hero image" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
/////////////////////////////////////
// import React from "react";
// import FancyButton from "./FancyButton";

// const HeroSection = () => {
//   return (
//     <section
//       className=" z-10 mx-auto flex max-w-8xl flex-col items-center gap-8  pb-12 text-center
//                         md:flex-row md:items-start md:gap-16 md:text-left lg:pb-32 lg:pt-6 bg-black text-white"
//     >
//       {/* Left Side */}
//       <div className="flex flex-col items-center md:items-start gap-6 max-w-xl">
//         {/* Top Badge Link */}
//         <div className="space-y-4">
//           <div className="relative w-full lg:w-auto">
//             <a
//               href="https://blog.livekit.io/deploy-and-scale-agents-on-livekit-cloud/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mx-auto inline-block w-fit md:mx-0"
//             >
//               <div
//                 className="cursor-pointer text-center text-sm leading-normal text-cyan-500 backdrop-blur-sm"
//                 style={{ borderRadius: "1.25rem" }}
//               >
//                 <div
//                   className="relative h-full w-full overflow-hidden transition-all duration-300 bg-separator1 p-[1px]"
//                   style={{ borderRadius: "24px" }}
//                 >
//                   <div
//                     className="relative h-full w-full bg-bg1 px-4 py-2"
//                     style={{ borderRadius: "24px" }}
//                   >
//                     <div
//                       className="absolute bg-bg1/80 left-[0.5px] top-[0.5px] h-[calc(100%-1px)] w-[calc(100%-1px)]"
//                       style={{ borderRadius: "24px" }}
//                     ></div>
//                     <div>
//                       <div className="flex items-center justify-between gap-2 text-fg0">
//                         <div className="text-xs font-semibold">
//                           Deploy agents on LiveKit Cloud
//                         </div>
//                         <svg
//                           width="24"
//                           height="24"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                           role="presentation"
//                           className="h-3 w-3 text-fg0"
//                         >
//                           <path
//                             d="M9 4L17 12L9 20"
//                             stroke="currentColor"
//                             strokeWidth="1.5"
//                             strokeLinecap="square"
//                           />
//                         </svg>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </a>
//           </div>

//           {/* Heading + Subtext */}
//           <div className="space-y-2">
//             <div className="space-y-2 text-fg0 [&>h1]:whitespace-nowrap">
//               <h1 className="z-20 text-pretty text-white tracking-tight lg:text-5xl text-4xl font-light">
//                 The Strategic AI Co-Pilot for Law
//               </h1>
//             </div>
//             <p className="lg:font-regular pt-[8px] mt-[8px] font-regular text-[#B2b2b2] text-pretty text-base text-fg2 lg:text-lg">
//               Automate routine work, uncover critical insights, and gain a
//               data-driven edge in every case.{" "}
//               <span className="text-white font-medium">Ross AI</span> is the
//               operating system for the modern law firm, built for the 99% of
//               practices left behind by enterprise AI.
//             </p>
//           </div>
//         </div>

//         {/* Buttons Section */}
//         <div className="flex w-full mt-[16px] flex-col gap-4 md:flex-row">
//           <FancyButton buttonName="Start Your 14-Day Free Trial" showIcon={false} />

//           <div className="basis-1/2">
//             <div
//               className="relative h-full w-full overflow-hidden transition-all duration-300 bg-separator1 p-[1px]"
//               style={{ borderRadius: "4px" }}
//             >
//               <div
//                 className="relative h-full w-full bg-bg1"
//                 style={{ borderRadius: "4px" }}
//               >
//                 <div
//                   className="absolute z-0 rounded-full bg-lk-200"
//                   style={{
//                     width: "40px",
//                     height: "40px",
//                     transform: "translate(-50%, -1%)",
//                     filter: "blur(20px)",
//                     opacity: 1,
//                     left: "50.8739%",
//                     top: "0%",
//                   }}
//                 ></div>
//                 <div
//                   className="absolute bg-bg1/80 left-[0.5px] top-[0.5px] h-[calc(100%-1px)] w-[calc(100%-1px)]"
//                   style={{ borderRadius: "4px" }}
//                 ></div>
//                 <button className="relative inline-flex h-full w-full cursor-pointer items-center justify-center py-2">
//                   <span className="flex text-[#B2b2b2] items-center justify-center gap-1 pl-2 text-sm font-semibold text-fg1">
//                     Request a Demo
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>{" "}
//       </div>

//       {/* Right Side - Placeholder Image */}
//       <div className="flex-1 mt-10 md:mt-0">
//         <div className="w-full h-96 rounded-xl bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
//           <span className="text-gray-500">
//             [ Add Image / Illustration Here ]
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
