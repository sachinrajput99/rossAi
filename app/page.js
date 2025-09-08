import Link from "next/link";
import Image from "next/image";
// import bg from "@/public/bg.png";
import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";
import HeroGrid from "./_components/Herogrid";
import TrustedBy from "./_components/TrustedBy";
import ScrollSections from "./_components/ScrollSections";
import VoiceAgentSection from "./_components/VoiceAgentSection";
import FeatureCards from "./_components/FeatureCards";
import HowItWorks from "./_components/HowItWorks";
import TimelineScroll from "./_components/TimelineScroll";
import Footer from "./_components/FooterWrapper";

import Marquee from "./_components/Marquee";
import Differentiators from "./_components/Differentiators";
import MyGlobe from "./_components/MyGlobe";
import Scroller from "./Scroller";
import Globe from "react-globe.gl";
import AILegalOS from "./_components/AILegalOS";
export default function Page() {
  return (
    <div className="mt-24 bg-black">
      <Header />
      <HeroSection />
     {/* // <Scroller/> */}
      <TrustedBy />
      <AILegalOS />
      <ScrollSections />
     {/* // <VoiceAgentSection/> */}
      <HowItWorks />
      <FeatureCards />
      {/* <MyGlobe/> */}
      <Differentiators />
      <Marquee />
     {/* // <TimelineScroll /> */}

     {/* // <Globe  /> */}
    </div>
  );
}
