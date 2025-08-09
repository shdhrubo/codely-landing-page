import React from "react";
import Banner from "./banner/banner";
import UniqueFeatures from "./unique-features/unique-features";
import AnalyzeData from "./analyze-data/analyze-data";
import Collaborate from "./collaborate/collaborate";
import Communication from "./communication/communication";
import AdvancedFeature from "./advanced-feature/advanced-feature";
import PowerfulSolution from "./powerful-solution/powerful-solution";

const HomePage = () => {
  return (
    <main>
      <Banner></Banner>
      <UniqueFeatures></UniqueFeatures>
      <AnalyzeData></AnalyzeData>
      <Collaborate></Collaborate>
      <Communication></Communication>
      <AdvancedFeature></AdvancedFeature>
      <PowerfulSolution></PowerfulSolution>
    </main>
  );
};

export default HomePage;
