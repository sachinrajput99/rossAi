import React from "react";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-[100] w-full border-b border-transparent py-3 transition-all duration-300 ease-out bg-black">
      <div className="px-6">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-row items-center justify-between gap-12 py-2">
            {/* Logo */}
            {/* <a href="/" className="flex items-center">
              <img
                src="/logo.svg" // Replace with your logo path
                alt="LiveKit"
                className="h-6"
              />
            </a> */}
            <div class="flex-shrink-0"><h1 class="text-xl font-bold text-white">Ross AI</h1></div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex flex-grow items-center justify-between">
              <ul className="flex flex-row items-center gap-6">
                <li>
                  <button className="flex items-center py-2 text-md font-semibold text-white hover:text-cyan-400 transition">
                    Home
                    <svg
                      viewBox="0 0 8 8"
                      width="16"
                      height="16"
                      className="ml-1 h-4 w-4"
                    >
                      <path
                        fill="currentColor"
                        d="M1.5 2.5h1v1h-1v-1Zm2 2v-1h-1v1h1Zm1 0v1h-1v-1h1Zm1-1v1h-1v-1h1Zm0 0v-1h1v1h-1Z"
                      />
                    </svg>
                  </button>
                </li>
                <li>
                  <button className="flex items-center py-2 text-md font-semibold text-white hover:text-cyan-400 transition">
                    Solution
                    <svg
                      viewBox="0 0 8 8"
                      width="16"
                      height="16"
                      className="ml-1 h-4 w-4"
                    >
                      <path
                        fill="currentColor"
                        d="M1.5 2.5h1v1h-1v-1Zm2 2v-1h-1v1h1Zm1 0v1h-1v-1h1Zm1-1v1h-1v-1h1Zm0 0v-1h1v1h-1Z"
                      />
                    </svg>
                  </button>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-md font-semibold text-white hover:text-cyan-400 transition"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-md font-semibold text-white hover:text-cyan-400 transition"
                  >
                    Docs
                  </a>
                </li>
              </ul>

              {/* GitHub + Button */}
              <div className="flex items-center gap-4">
                {/* <a
                  href="https://github.com/livekit/agents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-cyan-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12..."></path>
                  </svg>
                  <span className="text-sm font-semibold">
                    livekit / agents
                  </span>
                  <span className="rounded-full bg-gray-800 px-2 py-0.5 text-xs">
                    7.3k
                  </span>
                </a> */}

                <a
                  href="#"
                  className="flex items-center gap-2 rounded-md px-4 py-2 font-semibold text-black bg-cyan-400 shadow-md hover:shadow-lg hover:scale-105 transition"
                >
                  <svg
                    viewBox="0 0 8 8"
                    width="12"
                    height="12"
                    className="inline-block"
                  >
                    <path
                      fill="currentColor"
                      d="M1.5 2.5h1v1h-1v-1Zm2 2v-1h-1v1h1Zm1 0v1h-1v-1h1Zm1-1v1h-1v-1h1Zm0 0v-1h1v1h-1Z"
                    />
                  </svg>
                  Start building
                </a>
              </div>
            </nav>

            {/* Mobile Hamburger */}
            <div className="block lg:hidden">
              <img src="/hamburger-icon.svg" alt="Menu" className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
