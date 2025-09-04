"use client";

import { motion } from "framer-motion";

export default function FancyButton({
  buttonName = "Start building",
  href = "#",
  className = "",
  showIcon = true, // 👈 new prop
}) {
  return (
    <motion.a
      href={href}
      target="_self"
      tabIndex={0}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className={`
        group relative flex items-center
        ${showIcon ? "gap-1 justify-start" : "justify-center"} 
        overflow-hidden rounded-md border px-4 py-2
        text-sm font-semibold
        ${className}
      `}
      variants={{
        rest: {
          scale: 1,
          backgroundColor: "rgb(31,213,249)", // cyan
          boxShadow: "0 0 8px rgba(31,213,249,0.25)",
        },
        hover: {
          scale: 1.05,
          backgroundColor: "rgb(0,0,0)", // black
          boxShadow: "0 0 16px rgba(31,213,249,0.5)",
        },
        tap: { scale: 0.95 },
      }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      {/* Icon Animation (only if showIcon is true) */}
      {showIcon && (
        <div className="relative h-4 w-4 overflow-hidden">
          <motion.div
            variants={{
              rest: { y: 0, opacity: 1 },
              hover: { y: -16, opacity: 0 },
            }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-0"
          >
            <ChevronIcon className="text-black" />
          </motion.div>

          <motion.div
            variants={{
              rest: { y: 16, opacity: 0 },
              hover: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-0"
          >
            <ChevronIcon className="text-white" />
          </motion.div>
        </div>
      )}

      {/* Text Animation */}
      <div
        className={`relative h-5 overflow-hidden w-[120px] ${
          showIcon ? "text-left" : "text-center"
        }`}
      >
        {/* Default text */}
        <motion.div
          variants={{
            rest: { y: 0 },
            hover: { y: "-100%" },
          }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 top-0 flex flex-col w-full"
        >
          <span className="text-black">{buttonName}</span>
        </motion.div>

        {/* Hover text */}
        <motion.div
          variants={{
            rest: { y: "100%" },
            hover: { y: 0 },
          }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 top-0 flex flex-col w-full"
        >
          <span className="text-white">{buttonName}</span>
        </motion.div>
      </div>
    </motion.a>
  );
}

function ChevronIcon({ className }) {
  return (
    <svg
      viewBox="0 0 8 8"
      width="8"
      height="8"
      role="img"
      fill="currentColor"
      className={`inline-block h-4 w-4 ${className}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 2.5h1v1h-1v-1Zm2 2v-1h-1v1h1Zm1 0v1h-1v-1h1Zm1-1v1h-1v-1h1Zm0 0v-1h1v1h-1Z"
      />
    </svg>
  );
}
