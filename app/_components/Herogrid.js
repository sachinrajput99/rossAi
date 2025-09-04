import React from "react";

export default function HeroGrid() {
  return (
    <div className="absolute left-[calc(50%-600px)] top-[120px] h-[1095px] w-[1580px] -rotate-[30deg] skew-x-[30deg]">
      {/* Grid background */}
      <img
        className="absolute left-0 top-0 object-none"
        alt="Grid"
        src="/images/home/hero-grid.svg"
      />

      {/* Example floating icon */}
      <div
        className="flex items-center justify-center rounded-md border border-bg3 shadow-[-3px_3px_0px_0px_theme(colors.bg2)] 
          hover:border-fg0 hover:shadow-[-3px_3px_0px_0px_theme(colors.fg0)] 
          transition-all duration-500 ease-out absolute left-[calc(50%-89px)] top-[297px] z-20 h-12 w-12"
        style={{ backgroundColor: "rgb(var(--lk-color-bg1))" }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="h-5 w-5 text-fg0"
          fill="currentColor"
        >
          <path d="M12 2C9.5 2 7.5 4 7.5 6.5S9.5 11 12 11s4.5-2 4.5-4.5S14.5 2 12 2Z" />
          <path d="M12 12c-4.8 0-8.1 3.8-8.5 8.5V21h17v-.5C20.1 15.8 16.8 12 12 12Z" />
        </svg>
      </div>

      {/* Animated paths (example with one gradient) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-full w-full max-w-7xl -translate-x-1/2 -translate-y-1/2">
        <svg className="absolute left-0 top-0 h-full w-full pointer-events-none">
          <defs>
            <linearGradient id="line1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
              <stop offset="50%" stopColor="#1FD5F9" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                from="-3 0"
                to="3 0"
                dur="3s"
                repeatCount="indefinite"
              />
            </linearGradient>
          </defs>
          <path
            d="M600,328 L994,329"
            stroke="url(#line1)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Labels */}
      <div className="absolute left-[calc(50%+320px)] top-[735px] z-20 rounded-full border border-separator1 bg-bg1 px-2 py-0.5 text-xxs text-fg0 transition-all duration-500 ease-out">
        HTTP/Websocket
      </div>
      <div className="absolute left-[calc(50%+180px)] top-[314px] z-20 rounded-full border border-separator1 bg-bg1 px-2 py-0.5 text-xxs text-fg0 transition-all duration-500 ease-out">
        WebRTC
      </div>

      {/* Example SDK node */}
      <div className="absolute left-[calc(50%+118px)] top-[290px] z-20">
        <div className="rounded-full border border-separator1 bg-bg1 px-2 py-0.5 text-xxs text-fg1">
          SDKs
        </div>
        <div
          className="absolute flex items-center justify-center h-12 w-12 rounded-md border border-bg3 shadow-[-3px_3px_0px_0px_theme(colors.bg2)] 
            hover:border-fg0 hover:shadow-[-3px_3px_0px_0px_theme(colors.fg0)] transition-all duration-500 ease-out"
          style={{ backgroundColor: "rgb(var(--lk-color-bg1))" }}
        >
          <img src="/logos/square/python.svg" alt="Python Logo" className="h-6 w-6 opacity-80" />
        </div>
      </div>
    </div>
  );
}
