"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  { label: "VOICE AI", value: "voice" },
  { label: "ROBOTICS", value: "robotics" },
  { label: "LIVESTREAMING", value: "livestreaming" },
];

export default function Scroller() {
  const [activeTab, setActiveTab] = useState("voice");
  const [visibleSections, setVisibleSections] = useState({
    voice: false,
    robotics: false,
    livestreaming: false,
  });

  const voiceRef = useRef(null);
  const roboticsRef = useRef(null);
  const livestreamingRef = useRef(null);

  const sectionRefs = {
    voice: voiceRef,
    robotics: roboticsRef,
    livestreaming: livestreamingRef,
  };

  useEffect(() => {
    const observerOptions = { root: null, threshold: 0.6 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("data-id");
        if (entry.isIntersecting) {
          setActiveTab(id);
          setVisibleSections((prev) => ({ ...prev, [id]: true }));
        }
      });
    }, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const handleTabClick = (tab) => {
    sectionRefs[tab].current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex min-h-screen w-full pt-20 bg-black text-white">
      {/* Sidebar */}
      <div className="w-1/4 border-r border-gray-700 p-4 bg-black sticky top-20 flex flex-col justify-start z-10">
        {tabs.map((tab) => (
          <div
            key={tab.value}
            onClick={() => handleTabClick(tab.value)}
            className="cursor-pointer py-2 text-sm font-mono tracking-wider relative"
          >
            <span className={activeTab === tab.value ? "text-cyan-400" : "text-gray-500"}>
              {tab.label}
            </span>
            <span
              className={`absolute bottom-0 left-0 h-[2px] bg-cyan-400 transition-all duration-300 ease-in-out ${
                activeTab === tab.value ? "w-full" : "w-0"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Scrollable Content */}
      <div className="w-3/4 h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar-hide">
        
        {/* Voice AI */}
        <section
          ref={voiceRef}
          data-id="voice"
          className="snap-start h-screen flex items-center justify-center p-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={visibleSections.voice ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-xl text-center"
          >
            <h1 className="text-3xl font-bold mb-4">Voice AI</h1>
            <p className="text-gray-300 text-lg">
              Build real-time audio experiences using AI models for voice recognition and synthesis.
            </p>
          </motion.div>
        </section>

        {/* Robotics */}
        <section
          ref={roboticsRef}
          data-id="robotics"
          className="snap-start h-screen flex items-center justify-center p-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={visibleSections.robotics ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-xl text-center"
          >
            <h1 className="text-3xl font-bold mb-4">Robotics</h1>
            <p className="text-gray-300 text-lg">
              Integrate robotics systems with advanced control and AI-based automation frameworks.
            </p>
          </motion.div>
        </section>

        {/* Livestreaming */}
        <section
          ref={livestreamingRef}
          data-id="livestreaming"
          className="snap-start h-screen flex items-center justify-center p-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={visibleSections.livestreaming ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-xl text-center"
          >
            <h1 className="text-3xl font-bold mb-4">Livestreaming</h1>
            <p className="text-gray-300 mb-6">
              Playback uses <span className="text-red-400">LiveKit</span> to host a global arena for fans to watch live sports together.
            </p>

            <ul className="text-gray-400 space-y-2 mb-6 text-left">
              <li>🔁 Every user is synchronized</li>
              <li>🧩 Import media streams</li>
              <li>♾️ Unlimited concurrent viewers</li>
            </ul>

            <div className="border border-blue-600 rounded-md overflow-hidden">
              <div className="relative bg-gray-900">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/1/1e/New_York_Knicks_logo.svg"
                  alt="Live"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-xs p-2 flex justify-between">
                  <span>
                    Celtics vs Knicks <span className="text-red-500">● LIVE</span>
                  </span>
                  <span>🎥 Knicks Film School</span>
                </div>
              </div>
              <div className="bg-gray-800 h-32 p-4 overflow-y-auto text-sm">
                <div><strong>Sam:</strong> BING</div>
                <div><strong>Jessica:</strong> so happy</div>
                <div><strong>Charlotte:</strong> GIVE THAT MAN THE MAX!!!</div>
              </div>
              <div className="bg-gray-900 p-2">
                <input
                  className="w-full px-3 py-1 rounded bg-gray-700 text-white"
                  placeholder="Send a message"
                />
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
