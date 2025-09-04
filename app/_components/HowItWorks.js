// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const steps = [
//   {
//     title: "User speaks to agent via app, browser, or phone call",
//   },
//   {
//     title: "User speech is streamed from device to agent",
//     desc: "Voice, video, and text data travel via WebRTC through LiveKit’s global edge network with less than 100ms latency.",
//   },
//   {
//     title: "Agent receives user speech and runs your custom business logic",
//   },
//   {
//     title: "Agent responds back to the user",
//   },
// ];

// export default function HowItWorks() {
//   const [stepIndex, setStepIndex] = useState(0);
//   const [scrolling, setScrolling] = useState(false);

//   // Scroll lock (jaise pehle tha)
//   useEffect(() => {
//     const preventScroll = (e) => {
//       if (stepIndex > 0 && stepIndex < steps.length - 1) {
//         e.preventDefault();
//       }
//     };
//     window.addEventListener("wheel", preventScroll, { passive: false });
//     return () => window.removeEventListener("wheel", preventScroll);
//   }, [stepIndex]);

//   // Step navigation with scroll
//   useEffect(() => {
//     const handleScroll = (e) => {
//       if (scrolling) return;
//       setScrolling(true);

//       if (e.deltaY > 0) {
//         setStepIndex((prev) =>
//           prev < steps.length - 1 ? prev + 1 : prev
//         );
//       } else if (e.deltaY < 0) {
//         setStepIndex((prev) => (prev > 0 ? prev - 1 : prev));
//       }

//       setTimeout(() => setScrolling(false), 600);
//     };

//     window.addEventListener("wheel", handleScroll);
//     return () => window.removeEventListener("wheel", handleScroll);
//   }, [scrolling]);

//   return (
//     <section className="relative min-h-screen bg-black text-white">
//       <div className="sticky top-0 flex h-screen items-center justify-center">
//         <div className="grid grid-cols-2 gap-12 w-4/5">
//           {/* LEFT CONTENT */}
//           <div className="w-full max-w-xl">
//             {/* Heading */}
//             <h2 className="text-4xl font-light mb-10">
//               <span className="text-cyan-400">How </span>
//               it works
//             </h2>

//             {/* Steps */}
//             <div className="flex flex-col gap-6">
//               {steps.map((step, idx) => (
//                 <div key={idx} className="flex items-start gap-4">
//                   {/* Step number */}
//                   <div
//                     className={`w-8 h-8 flex items-center justify-center rounded-full border-2 text-sm font-bold shrink-0
//                       ${
//                         idx === stepIndex
//                           ? "border-white text-white"
//                           : "border-gray-600 text-gray-400"
//                       }`}
//                   >
//                     {idx + 1}
//                   </div>

//                   {/* Step content */}
//                   <div>
//                     <p
//                       className={`text-base ${
//                         idx === stepIndex ? "font-semibold" : "text-gray-400"
//                       }`}
//                     >
//                       {step.title}
//                     </p>
//                     {step.desc && (
//                       <p className="text-gray-500 text-sm mt-1">{step.desc}</p>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Buttons */}
//             <div className="flex gap-3 mt-10">
//               <a
//                 href="https://docs.livekit.io/agents/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 hover:bg-gray-700 text-sm"
//               >
//                 View documentation
//               </a>
//               <a
//                 href="https://github.com/livekit/agents"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 hover:bg-gray-700 text-sm"
//               >
//                 livekit/agents
//               </a>
//             </div>
//           </div>

//           {/* RIGHT SIDE PLACEHOLDER IMAGE */}
//           <div className="flex items-center justify-center">
//             <img
//               src="https://via.placeholder.com/400x300"
//               alt="Placeholder"
//               className="rounded-xl shadow-lg object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FancyButton from "./FancyButton";

const steps = [
  {
    title: "MS Word Integration",
    desc: "Draft, redline, and access AI insights without ever leaving your document.",
    img: "https://via.placeholder.com/400x300?text=Step+1",
  },
  {
    title: "Practice Management Sync",
    desc: "Deep, bi-directional integration with Clio and other leading PMS platforms to sync matters, files, and billing automatically.",
    img: "https://via.placeholder.com/400x300?text=Step+2",
  },
  {
    title: "Secure Case Vault",
    desc: "A centralized, encrypted repository for all your case files. Ask natural language questions and get instant answers from your firm's own knowledge base.",
    img: "https://via.placeholder.com/400x300?text=Step+3",
  },
  {
    title: "No-Code Workflow Builder",
    desc: "Automate your firm's unique processes—from client intake to discovery requests—with an intuitive drag-and-drop interface.",
    img: "https://via.placeholder.com/400x300?text=Step+4",
  },
];

export default function HowItWorks() {
  const [stepIndex, setStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const duration = 4000; // 4 seconds per step

  // Auto timer + progress
  useEffect(() => {
    setProgress(0);
    const stepTimer = setInterval(() => {
      setStepIndex((prev) => (prev + 1) % steps.length);
    }, duration);

    const progressTimer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, duration / 100);

    return () => {
      clearInterval(stepTimer);
      clearInterval(progressTimer);
    };
  }, [stepIndex]);

  return (
    <section className="relative min-h-screen bg-black text-white">
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <div className="grid grid-cols-2 gap-12 w-4/5">
          {/* LEFT CONTENT */}
          <div className="w-full max-w-xl">
            {/* Heading */}
            <h2 className="text-4xl font-light mb-10">
              <span className="text-cyan-400">Built </span>
              For Lawyers
            </h2>

            {/* Steps */}
            <div className="flex flex-col gap-6">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="cursor-pointer"
                  onClick={() => setStepIndex(idx)}
                >
                  <div className="flex items-start gap-4">
                    {/* Step number */}
                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-full border-2 text-sm font-bold shrink-0
                      ${
                        idx === stepIndex
                          ? "border-cyan-400 text-cyan-400"
                          : "border-gray-600 text-gray-400"
                      }`}
                    >
                      {idx + 1}
                    </div>

                    {/* Step content */}
                    <div className="flex-1">
                      <p
                        className={`text-base ${
                          idx === stepIndex
                            ? "font-semibold text-white"
                            : "text-gray-400"
                        }`}
                      >
                        {step.title}
                      </p>
                      {step.desc && (
                        <p className="text-gray-500 text-sm mt-1">
                          {step.desc}
                        </p>
                      )}

                      {/* Progress bar (only for active step) */}
                      {idx === stepIndex && (
                        <div className="mt-2 h-1 w-full bg-gray-700 rounded">
                          <motion.div
                            className="h-1 bg-cyan-400 rounded"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-10">
              {/* <a
                href="#"
                className="px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 hover:bg-gray-700 text-sm transition"
              >
                Learn More
              </a> */}
              {/* <a
                href="#"
                className="px-4 py-2 rounded-lg border border-cyan-500  bg-cyan-400 hover:bg-cyan-500 text-sm text-black font-semibold transition"
              >
                Get Started
              </a> */}

              {/* chenign */}
              {/* <FancyButton buttonName="Get Started" showIcon={false} /> */}
              <a
                href="#"
                class="text-blue-500 hover:text-blue-400 font-medium inline-flex items-center transition-colors duration-200"
              >
                Explore the Platform{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-right ml-2 w-4 h-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={stepIndex}
                src={steps[stepIndex].img}
                alt={steps[stepIndex].title}
                className="rounded-xl shadow-lg object-cover w-[400px] h-[300px]"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
