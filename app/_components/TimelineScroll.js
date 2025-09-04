











"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    title: "User speaks to agent",
    desc: "User speaks to agent via app, browser, or phone call.",
  },
  {
    title: "Speech is streamed",
    desc: "User speech is streamed from device to agent.",
  },
  {
    title: "Agent processes logic",
    desc: "Agent receives user speech and runs your custom business logic.",
  },
  {
    title: "Agent responds",
    desc: "Agent responds back to the user.",
  },
];

export default function HowItWorks() {
  const [stepIndex, setStepIndex] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  // Scroll Lock (jab tak pehla aur last step complete na ho)
  useEffect(() => {
    const preventScroll = (e) => {
      if (stepIndex > 0 && stepIndex < steps.length - 1) {
        e.preventDefault();
      }
    };
    window.addEventListener("wheel", preventScroll, { passive: false });
    return () => window.removeEventListener("wheel", preventScroll);
  }, [stepIndex]);

  // Step navigation with scroll
  useEffect(() => {
    const handleScroll = (e) => {
      if (scrolling) return; // debounce effect
      setScrolling(true);

      if (e.deltaY > 0) {
        // scroll down
        setStepIndex((prev) =>
          prev < steps.length - 1 ? prev + 1 : prev
        );
      } else if (e.deltaY < 0) {
        // scroll up
        setStepIndex((prev) => (prev > 0 ? prev - 1 : prev));
      }

      setTimeout(() => setScrolling(false), 600); // smooth delay
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [scrolling]);

  return (
    <section className="relative min-h-screen bg-black text-white">
      {/* Sticky wrapper */}
      <div className="sticky top-0 flex h-screen items-center justify-center">
        <div className="grid grid-cols-2 gap-12 w-4/5">
          {/* LEFT TIMELINE */}
          <div className="flex flex-col gap-8 relative">
            <h2 className="text-4xl font-light mb-6">
              <span className="text-cyan-400 drop-shadow-[0_0_8px_rgb(3,92,109)]">
                How{" "}
              </span>
              it works
            </h2>

            {steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div
                  className={`w-6 h-6 flex items-center justify-center rounded-full border-2 text-xs font-bold ${
                    idx <= stepIndex
                      ? "bg-blue-500 border-blue-500"
                      : "border-gray-500 text-gray-400"
                  }`}
                >
                  {idx + 1}
                </div>
                <div>
                  <h3
                    className={`font-semibold ${
                      idx === stepIndex ? "text-blue-400" : "text-gray-300"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}

            {/* Buttons */}
            <div className="flex gap-3 pt-6">
              <a
                href="https://docs.livekit.io/agents/"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 hover:bg-gray-700 text-sm"
              >
                View documentation
              </a>
              <a
                href="https://github.com/livekit/agents"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 hover:bg-gray-700 text-sm"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* RIGHT ANIMATED PANEL */}
          <div className="relative h-80 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={stepIndex}
                initial={{ opacity: 0, x: 100, rotateY: 45 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -100, rotateY: -45 }}
                transition={{ duration: 0.6 }}
                className="absolute w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl flex items-center justify-center"
              >
                <h2 className="text-2xl font-bold text-center">
                  {steps[stepIndex].title}
                </h2>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
