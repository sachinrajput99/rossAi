import React, { useEffect, useRef } from 'react';
import { FileText, Search, Brain } from 'lucide-react';

const steps = [
  {
    title: "User connects with agent via app, browser, or phone call",
    desc: "The conversation starts when the user connects with the agent through the app, browser, or a phone call.",
    img: "https://via.placeholder.com/400x300?text=Step+1",
  },
  {
    title: "User's voice is streamed from device to agent",
    desc: "Voice, video, and text data travel via WebRTC through LiveKit’s global edge network with under 100ms latency.",
    img: "https://via.placeholder.com/400x300?text=Step+2",
  },
  {
    title: "Agent receives user's voice and applies business logic",
    desc: "The agent processes the user's input, applies your defined business logic, and prepares an appropriate response.",
    img: "https://via.placeholder.com/400x300?text=Step+3",
  },
  {
    title: "Agent responds to the user",
    desc: "The agent replies to the user in real-time to ensure a smooth and natural conversation.",
    img: "https://via.placeholder.com/400x300?text=Step+4",
  },
];

const AILegalOS = () => {
  const visualRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-pulse-glow');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (visualRef.current) {
      observer.observe(visualRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4">
            The AI Legal OS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            An Integrated Command Center for Your Entire Practice
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ross AI is more than a tool; it's a foundational platform that transforms your firm's 
            scattered data into a strategic asset. It connects every phase of your workflow, from 
            intake to argument, providing a single source of truth and intelligence.
          </p>
        </div>

        {/* Central Visual */}
        <div className="flex justify-center mb-16">
          <div
            ref={visualRef}
            className="relative w-96 h-96 flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse-slow">
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30">
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-400/40 to-purple-400/40 flex items-center justify-center">
                  <div className="text-4xl font-bold text-blue-400">AI</div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-full border border-blue-500/30 animate-spin-slow"></div>
            <div className="absolute inset-8 rounded-full border border-purple-500/30 animate-spin-reverse"></div>
            <div className="absolute inset-16 rounded-full border border-blue-400/20 animate-spin-slow"></div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center group">
            <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
              <div className="flex justify-center mb-4">
                <FileText className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Drafting & Analysis</h3>
              <p className="text-gray-400 leading-relaxed">
                Generate and review complex legal documents in minutes, not hours.
              </p>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
              <div className="flex justify-center mb-4">
                <Search className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Grounded Research</h3>
              <p className="text-gray-400 leading-relaxed">
                Get reliable, citable answers from case law and your own private case files. No hallucinations. Ever.
              </p>
            </div>
          </div>

          <div className="text-center group">
            <div className="bg-zinc-900/50 rounded-lg p-6 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
              <div className="flex justify-center mb-4">
                <Brain className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Strategic Intelligence</h3>
              <p className="text-gray-400 leading-relaxed">
                Move beyond research to foresight. Predict case outcomes, analyze judicial patterns, and build data-driven strategies that win.
              </p>
            </div>
          </div>
        </div>

        {/* Steps Section */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-10 bg-zinc-900/50 p-6 rounded-lg border border-zinc-800"
            >
              <img
                src={step.img}
                alt={`Step ${index + 1}`}
                className="w-full md:w-1/2 rounded shadow"
              />
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-3 text-blue-400">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AILegalOS;
