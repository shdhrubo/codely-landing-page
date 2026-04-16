import Image from "next/image";
import React from "react";

import { AppImages } from "@/app/shared/image/image";

const AnalyzeData = () => {
  return (
    <section className="py-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-2  mx-auto max-w-[1200px] justify-center px-[15px]">
        {/* text section  */}
        <div className="px-[15px]  md:mx-[-15px]">
          <div className="max-w-[475px] ">
            <Image
              src={AppImages.Analyze_Image}
              alt="analyze-image"
              className="absolute md:static text-left w-10 h-10 md:w-auto md:h-auto"
            ></Image>
            <div className="mt-[15px] mb-5 md:mb-10">
              <h2 className="text-dark-purple font-bold text-[25px] leading-[30px] mb-[15px] md:text-[40px] md:leading-12 pl-[50px] md:pl-0">
                Analyze your data with powerful tool
              </h2>
              <p className="text-gray text-[16px] leading-[27px] md:text-[17px] md:leading-[29px] font-normal mb-4">
                Lorem Ipsum is simply dummy text of the printing and types
                etting industry lorem Ipsum has been the industrys standard
                dummy text ever since the when an unknown printer took a galley
                of type and.
              </p>
            </div>
            <div>
              <Image
                src={AppImages.Right_Icon}
                alt="right-icon"
                className="absolute"
              ></Image>
              <div className="pl-[35px] top-0 relative">
                <h3 className="text-secondary text-[17px] leading-5 font-bold md:text-xl md:leading-6 mb-[5px]">
                  Highly Customized
                </h3>
                <p className="text-gray text-[16px] leading-[27px] md:text-[17px] md:leading-[29px] font-normal mb-4">
                  Lorem Ipsum is simply dummy text of the printing and typ
                  esetting industry lorem Ipsum has.
                </p>
              </div>
              <Image
                src={AppImages.Right_Icon}
                alt="right-icon"
                className="absolute"
              ></Image>
              <div className="pl-[35px] top-0 relative">
                <h3 className="text-secondary text-[17px] leading-5 font-bold md:text-xl md:leading-6 mb-[5px]">
                  Seamless Sync
                </h3>
                <p className="text-gray text-[16px] leading-[27px] md:text-[17px] md:leading-[29px] font-normal mb-4">
                  Simply dummy text of the printing and typesetting inustry
                  lorem Ipsum has Lorem dollar summit.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* image section  */}
        <div
          className="relative px-[15px] md:mx-[-15px] bg-contain bg-no-repeat min-h-[576px] flex justify-center items-center"
          style={{ backgroundImage: `url(${AppImages.Analyze_Bg.src})` }}
        >
          {/* Centered Image */}
          <Image
            src={AppImages.Analyze_Data_3}
            alt="image"
            className="z-10 shadow-[0_18px_29px_#ede9fe]"
          />

          {/* Top-Right Image */}
          <Image
            src={AppImages.Analyze_Data_2}
            alt="image"
            className="absolute top-[70px] right-[65px] z-20 shadow-[0_18px_29px_#ede9fe]"
          />

          {/* Bottom-Left Image */}
          <Image
            src={AppImages.Analyze_Data_1}
            alt="image"
            className="absolute bottom-[15px] left-[105px] z-20 shadow-[0_18px_29px_#ede9fe]"
          />
        </div>
      </div>
    </section>
  );
};

export default AnalyzeData;
