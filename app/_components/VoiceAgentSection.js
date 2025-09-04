"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Eye } from "lucide-react";

// 🔹 Highlight function
function highlightCode(code, lang) {
  if (lang === "python") {
    return code
      .replace(
        /AgentSession/g,
        `<span style="color:#00e0ff; font-weight:bold;">AgentSession</span>`
      )
      .replace(
        /LLM/g,
        `<span style="color:#ff80ff; font-weight:bold;">LLM</span>`
      )
      .replace(
        /"gpt-4o"/g,
        `<span style="color:#4fc3f7; font-weight:bold;">"gpt-4o"</span>`
      )
      .replace(
        /MultilingualModel\(\)/g,
        `<span style="color:#00ffb0; font-weight:bold;">MultilingualModel()</span>`
      );
  }

  if (lang === "tsx") {
    return code
      .replace(
        /function SimpleVoiceAssistant\(\)/g,
        `<span style="color:#00e0ff; font-weight:bold;">function SimpleVoiceAssistant()</span>`
      )
      .replace(
        /useVoiceAssistant\(\)/g,
        `<span style="color:#ff80ff; font-weight:bold;">useVoiceAssistant()</span>`
      )
      .replace(
        /BarVisualizer/g,
        `<span style="color:#4fc3f7; font-weight:bold;">BarVisualizer</span>`
      );
  }
  return code;
}

export default function VoiceAgentHero() {
  const [activeTab, setActiveTab] = useState("python");

  const codeSnippets = {
    python: `session = AgentSession(<br/>
  <span style="padding-left:10px;">stt=deepgram.STT(),<br/></span> 
  <span style="padding-left:10px;">llm=openai.LLM(model="gpt-4o"),<br/></span> 
  <span style="padding-left:10px;">tts=cartesia.TTS(),<br/></span> 
  <span style="padding-left:10px;">vad=silero.VAD.load(),<br/></span> 
  <span style="padding-left:10px;">turn_detection=MultilingualModel()</span>
)
`,
    tsx: `<span>function SimpleVoiceAssistant() {<br/></span>
<span style="padding-left:10px;">const { state, audioTrack } = useVoiceAssistant();<br/></span>
<span style="padding-left:10px;">return (<br/></span>
<span style="padding-left:20px;">&lt;div className="h-80"&gt;<br/></span>
<span style="padding-left:30px;">&lt;BarVisualizer state={state} barCount={5} trackRef={audioTrack} /&gt;<br/></span>
<span style="padding-left:20px;">&lt;/div&gt;<br/></span>
<span style="padding-left:10px;">);<br/></span>
<span>}</span>`,
  };

  return (
    <section className="relative   mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-16 text-center md:flex-row md:items-start md:text-left">
      {/* Left Side */}
      <div className="flex-1 space-y-8">
        {/* Heading */}
        <div className="space-y-3">
          <div className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-gray-400">
            Simple and Powerful APIs
          </div>
          <h2 className=" text-pretty tracking-tight lg:text-4xl text-3xl font-light text-white">
            Quickly{" "}
            <span className="bg-gradient-to-r text-pretty tracking-tight lg:text-4xl text-3xl font-light from-sky-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgb(0,180,255)]">
              build
            </span>{" "}
            voice agents
          </h2>
        </div>

        {/* Code Box */}
        <div className="rounded-md border border-[#1f1f1f] bg-[#0b0b0b] overflow-hidden shadow-lg">
          {/* Tabs */}
          <div className="flex border-b border-[#1f1f1f] bg-[#111]">
            <button
              onClick={() => setActiveTab("python")}
              className={`px-4 py-2 text-sm font-mono ${
                activeTab === "python"
                  ? "text-white bg-[#0b0b0b] border-t border-x border-[#1f1f1f]"
                  : "text-gray-500"
              }`}
            >
              agent.py
            </button>
            <button
              onClick={() => setActiveTab("tsx")}
              className={`px-4 py-2 text-sm font-mono ${
                activeTab === "tsx"
                  ? "text-white bg-[#0b0b0b] border-t border-x border-[#1f1f1f]"
                  : "text-gray-500"
              }`}
            >
              visualizer.tsx
            </button>
          </div>

          <div className="flex flex-row justify-between">
            {/* Code Block */}
            <div className="p-4  text-left text-sm">
              <div
                dangerouslySetInnerHTML={{
                  __html: highlightCode(
                    activeTab === "python"
                      ? codeSnippets.python
                      : codeSnippets.tsx,
                    activeTab
                  ),
                }}
                className="font-mono text-[0.9rem] text-gray-200"
              />
            </div>

            {/* Right Side - Preview */}
            <div className="flex-1  flex items-center justify-end p-7">
              <div className="rounded-md border border-[#1f1f1f] bg-[#0b0b0b] shadow-lg w-full max-w-sm h-64 flex flex-col">
                {/* Top Bar */}
                <div className="flex items-center gap-2 border-b border-[#1f1f1f] bg-[#111] px-3 py-2">
                  <Eye size={14} className="text-gray-400" />
                  <span className="text-xs text-gray-300 font-mono">
                    Preview
                  </span>
                </div>

                {/* Bars animation with dotted bg */}
                <div className="flex flex-1 items-center justify-center gap-2 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:16px_16px]">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 rounded-full bg-white"
                      animate={{ height: ["20%", "40%", "20%"] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
