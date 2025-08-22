import React from "react";
import Banner from "./banner/banner";
import UniqueFeatures from "./unique-features/unique-features";
import AnalyzeData from "./analyze-data/analyze-data";
import Collaborate from "./collaborate/collaborate";
import Communication from "./communication/communication";
import AdvancedFeature from "./advanced-feature/advanced-feature";
import PowerfulSolution from "./powerful-solution/powerful-solution";
import PopularPlatform from "./popular-platform/popular-platform";
import Testimonial from "./testimonial/testimonial";
import TrustedBy from "./trusted-by/trusted-by";
import Plan from "./plans/plan";
import FAQ from "./faq/faq";

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
      <PopularPlatform></PopularPlatform>
      <Testimonial></Testimonial>
      <TrustedBy></TrustedBy>
      <Plan></Plan>
      <FAQ></FAQ>
    </main>
  );
};

export default HomePage;
