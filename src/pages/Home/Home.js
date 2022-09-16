import React from "react";
// import Map from "@Components/Map";
import AboutSection from "./components/AboutSection";
import AboutShareWasherSection from "./components/AboutShareWasherSection";
import VideoSection from "./components/VideoSection";
import WhatIsShareWsher from "./components/WhatIsShareWsher";

export default function Home() {
  return (
    <>
      {/* <Map/> */}
      <AboutSection />
      <WhatIsShareWsher />
      <AboutShareWasherSection />
      <VideoSection />
      {/* <Map /> */}
    </>
  );
}
