import React from "react";
import AdvanceFeatureCard from "./advance-feature-card/advance-feature-card";

const AdvancedFeature = () => {
  return (
    <section className="py-[30px] md:py-[50px]">
      <div className="text-center max-w-[1370px] mx-auto px-[15px]">
        <div className=" bg-primary rounded-[30px] px-5 py-[50px]  md:p-[100px]">
          <div className="max-w-[610px] mx-auto">
            <h2 className="text-white font-bold text-[25px] leading-[30px] mb-[10px] md:text-[40px] md:leading-12">
              Advanced features
            </h2>
            <p className="text-white text-[16px] leading-[27px] md:text-[17px] md:leading-[29px] font-normal mb-4">
              Lorem Ipsum is simply dummy text of the printing and typese tting
              indus orem Ipsum has beenthe standard dummy text ever since.
            </p>
          </div>
          <AdvanceFeatureCard></AdvanceFeatureCard>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeature;
