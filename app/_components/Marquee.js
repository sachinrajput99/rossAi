"use client";
import { motion } from "framer-motion";
import FancyButton from "./FancyButton";

// const testimonials = [
//   {
//     logo: "https://via.placeholder.com/80x40?text=Retell+AI",
//     text: "We recently moved from a homegrown WebSocket stack to LiveKit Cloud, allowing us to flexibly integrate with telephony systems and offer a unified export interface across web and phone calls.",
//     name: "Zexia Zhang",
//     username: "CTO, Retell AI",
//   },
//   {
//     logo: "https://via.placeholder.com/80x40?text=Playback",
//     text: "Not having to worry about our ability to scale has been massive. We just have LiveKit worry about that scaling for us and have a predictable cost.",
//     name: "Ari Borensztein",
//     username: "Co-founder & CTO, Playback",
//   },
//   {
//     logo: "https://via.placeholder.com/80x40?text=Voice",
//     text: "Infrastructure for realtime voice assistants. The demo is 🔥",
//     name: "Guillermo Rauch",
//     username: "@rauchg",
//   },
//   {
//     logo: "https://via.placeholder.com/80x40?text=LiveKit",
//     text: "damn @livekit python sdk for tts and set was so smooth",
//     name: "Ivan Leo",
//     username: "@ivanleomk",
//   },
//   {
//     logo: "https://via.placeholder.com/80x40?text=Customer",
//     text: "LiveKit has a lot to offer. One of the best platforms for real-time AI integrations.",
//     name: "Mojibola Olalekan",
//     username: "@Ola_dev01",
//   },
// ];


const testimonials = [
  {
    logo: "https://dummyimage.com/80x40/cccccc/000000&text=Veridian+Legal",
    text: "Ross AI seamlessly integrates into our workflow, helping us uncover critical insights faster than ever. It’s become an indispensable partner for our legal team.",
    name: "Zexia Zhang",
    username: "CTO, Veridian Legal",
  },
  {
    logo: "https://dummyimage.com/80x40/cccccc/000000&text=Apex+Litigation",
    text: "The ability to scale without worrying about infrastructure has been a game-changer. Ross AI delivers performance and reliability at a predictable cost.",
    name: "Ari Borensztein",
    username: "Co-founder & CTO, Apex Litigation Partners",
  },
  {
    logo: "https://dummyimage.com/80x40/cccccc/000000&text=Crestview+Law",
    text: "Drafting and reviewing complex documents is no longer a bottleneck. Ross AI’s grounded research ensures accuracy and confidence in every case.",
    name: "Guillermo Rauch",
    username: "Senior Partner, Crestview Law Group",
  },
  {
    logo: "https://dummyimage.com/80x40/cccccc/000000&text=Stanton+Royce",
    text: "The platform’s predictive analytics have transformed how we approach case strategy. Ross AI helps us anticipate challenges and make data-backed decisions.",
    name: "Ivan Leo",
    username: "Managing Partner, Stanton & Royce",
  },
  {
    logo: "https://dummyimage.com/80x40/cccccc/000000&text=Blue+Harbor",
    text: "Security and confidentiality are paramount in our practice. Ross AI’s enterprise-grade protocols give us peace of mind while leveraging AI for research and insights.",
    name: "Mojibola Olalekan",
    username: "Head of Legal Ops, Blue Harbor Counsel",
  },
];



export default function Marquee() {
  return (
    <div>
      {" "}
      {/* Heading */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-white text-3xl md:text-4xl text-center mb-12 font-light"
        style={{ fontFamily: '"Poppins", sans-serif' }}
      >
        {/* new code  */}
        <div className="px-6 bg-black  pt-12">
          <div className="mx-auto w-full max-w-7xl">
            <div className="flex flex-col gap-6 md:flex-row md:justify-between">
              <div className="space-y-2 text-white">
                <div className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-gray-300">
                  Chosen by Innovators
                </div>
                <h2 className="z-20 tracking-tight lg:text-4xl text-3xl font-light">
                  <span>From </span>
                  <span className="text-cyan-400 drop-shadow-[0_0_8px_rgb(0,200,255)]">
                    startups
                  </span>
                  <span> to </span>
                  <span className="text-cyan-400 drop-shadow-[0_0_8px_rgb(0,200,255)]">
                    industry giants
                  </span>
                </h2>
              </div>

              <div className="w-full md:w-auto md:self-end">
                {/* <a
                  href="/customers"
                  className="flex items-center justify-center gap-2 rounded-md px-5 py-2 text-sm font-semibold text-black bg-cyan-400 hover:bg-cyan-300 transition shadow-[0_0_12px_rgba(0,200,255,0.8)]"
                >
                  View all customers
                </a> */}
                <FancyButton
                  buttonName=" View all customers"
                  showIcon={false}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.h3>
      <div className="relative w-full overflow-hidden bg-black rounded pb-16">
        {/* Marquee */}
        <div className="marquee-container">
          <motion.div
            className="marquee-content flex flex-row"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40, // slower for smoother scroll
            }}
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="bg-black border  border-gray-800 rounded-xl p-6 mx-4 w-96 flex-shrink-0 shadow-lg"
              >
                {item.logo && (
                  <img
                    src={item.logo}
                    alt="logo"
                    className="h-6 mb-4 object-contain"
                  />
                )}
                <p className="text-gray-300 text-sm mb-4">{item.text}</p>
                <p className="text-white font-semibold">{item.name}</p>
                <p className="text-gray-500 text-sm">{item.username}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Gradient Masks */}
        <div
          className="absolute top-0 left-0 h-full w-[120px] pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to right, #0d0d0d 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute top-0 right-0 h-full w-[120px] pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to left, #0d0d0d 0%, transparent 100%)",
          }}
        />

        {/* Styles */}
        <style jsx>{`
          .marquee-container {
            width: 100%;
            overflow: hidden;
          }
          .marquee-content {
            display: flex;
            flex-direction: row;
            width: max-content;
          }
        `}</style>
      </div>
    </div>
  );
}
