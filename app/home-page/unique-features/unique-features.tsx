import React from "react";
import FeatureCard from "./feature-card/feature-card";

const UniqueFeatures = () => {
  return (
    <section className="pt-10 pb-[30px] md:pt-20 md:pb-[50px] ">
      <section className="px-[15px] max-w-[1200px] mx-auto">
        {/* title of the section  */}
        <section className="text-center">
          <h2 className="text-dark-purple font-bold text-[25px] leading-[30px] mb-[10px] md:text-[40px] md:leading-12">
            Unique features
          </h2>
          <p className="text-gray text-[16px] leading-[27px] md:text-[17px] md:leading-[29px] font-normal mb-4 max-w-[568.52px] mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typese tting
            indus orem Ipsum has beenthe standard dummy text ever since
          </p>
        </section>

        {/* card section  */}
        <section className="mt-10">
          <FeatureCard></FeatureCard>
        </section>
      </section>
    </section>
  );
};

export default UniqueFeatures;
