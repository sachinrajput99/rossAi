"use client";

const features = [
  {
    title: "Voice AI quickstart",
    desc: "Build a simple voice agent with Python in less than 10 minutes.",
//     href: "https://docs.livekit.io/agents/start/voice-ai/",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
      >
        <path
          d="M7.75 3.75V20.25M3.75 9.75V14.25M12 7.75V16.25M16.25 5.75V18.25M20.25 9.75V14.25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
        />
      </svg>
    ),
  },
  {
    title: "Voice agent starter apps",
    desc: "Bring your agent to life through a web or mobile app.",
//     href: "https://docs.livekit.io/agents/start/frontend/#starter-apps",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
      >
        <path
          d="M3 10.75H21M3 5H21.5V19.5H3V5Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M5.75 8.375C6.09518 8.375 6.375 8.09518 6.375 7.75C6.375 7.40482 6.09518 7.125 5.75 7.125C5.40482 7.125 5.125 7.40482 5.125 7.75C5.125 8.09518 5.40482 8.375 5.75 8.375ZM8.25 8.375C8.59518 8.375 8.875 8.09518 8.875 7.75C8.875 7.40482 8.59518 7.125 8.25 7.125C7.90482 7.125 7.625 7.40482 7.625 7.75C7.625 8.09518 7.90482 8.375 8.25 8.375ZM10.75 8.375C11.0952 8.375 11.375 8.09518 11.375 7.75C11.375 7.40482 11.0952 7.125 10.75 7.125C10.4048 7.125 10.125 7.40482 10.125 7.75C10.125 8.09518 10.4048 8.375 10.75 8.375Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0.25"
        />
      </svg>
    ),
  },
  {
    title: "Integrate with telephony",
    desc: "Enable your voice agent to make or take phone calls.",
//     href: "https://docs.livekit.io/agents/start/telephony/",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
      >
        <path
          d="M8.90625 3.75H3.75V5.8125C3.75 13.7861 10.2139 20.25 18.1875 20.25H20.25V15.0938L16.125 13.0312L14.5781 14.5781C12 13.5469 10.4531 12 9.42188 9.42188L10.9688 7.875L8.90625 3.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: "Deploy to LiveKit Cloud",
    desc: "Run your agents on LiveKit's global realtime infrastructure.",
//     href: "https://docs.livekit.io/agents/ops/deployment/",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
      >
        <path
          d="M7 3.75V7M7 7V10.25M7 7H3.75M7 7H10.25M19.2981 14.7019L17 17M17 17L14.7019 19.2981M17 17L14.7019 14.7019M17 17L19.2981 19.2981M17 10.25C15.2051 10.25 13.75 8.79493 13.75 7C13.75 5.20507 15.2051 3.75 17 3.75C18.7949 3.75 20.25 5.20507 20.25 7C20.25 8.79493 18.7949 10.25 17 10.25ZM3.75 13.75H10.25V20.25H3.75V13.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
        />
      </svg>
    ),
  },
];

export default function FeatureCards() {
  return (
    <div className="grid grid-cols-1 pb-16 gap-4 text-gray-300 md:grid-cols-2 lg:grid-cols-4">
      {features.map((item, i) => (
        <a
          key={i}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative flex min-h-40 flex-col justify-between gap-3 overflow-hidden rounded-md border border-[#1f1f1f]  border-separator1 px-5 py-4 h-full">
            {item.icon}
            <div className="flex flex-col gap-1 text-sm">
              <span className="text-fg0">{item.title}</span>
              <span>{item.desc}</span>
              <div className="mt-4 w-fit">
                <button className="rounded-md px-3 py-1 text-gray-200 transition-all duration-200 ease-out active:scale-[0.99] text-sm font-semibold border border-separator1 bg-bg2 text-fg1 hover:bg-bg3">
                  Try it out
                </button>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
