import React from "react";
import WhoWeAre from "../../../component/about/WhoWeAre";
import LoopSection from "../../../component/home/LoopSection";
import SectionTwo from "../../../component/about/SectionTwo";
import OurClients from "../../../component/about/OurClients";

export default function index() {
  return (
    <div>
      <WhoWeAre />
      <LoopSection />
      <SectionTwo />
      <OurClients />
    </div>
  );
}
