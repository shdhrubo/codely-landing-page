import React from "react";
import Banner from "./banner/banner";
import UniqueFeatures from "./unique-features/unique-features";
import AnalyzeData from "./analyze-data/analyze-data";

const HomePage = () => {
  return (
    <main>
      <Banner></Banner>
      <UniqueFeatures></UniqueFeatures>
      <AnalyzeData></AnalyzeData>
    </main>
  );
};

export default HomePage;
