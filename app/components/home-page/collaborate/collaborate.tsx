import Icon from "@/app/shared/icon/icon";
import { AppImages } from "@/app/shared/image/image";
import Image from "next/image";
import React from "react";

const Collaborate = () => {
  return (
    <section className="py-[50px]">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center mx-auto max-w-[1200px]">
        {/* image section  */}
        <div className="px-0 md:px-[15px] order-2 md:order-1">
          <Image src={AppImages.Analyze_Bg} alt="Background"></Image>
        </div>
        {/* text section  */}
        <div className="px-[15px] mx-auto order-1 md:order-2">
          <div className="w-full md:pl-[30px]">
            <Image
              src={AppImages.Collaborate_Image}
              alt="analyze-image"
              className="absolute md:static text-left w-10 h-10 md:w-15 md:h-15"
            ></Image>
            <div className="mt-[15px] mb-5 md:mb-10">
              <h2 className="text-dark-purple font-bold text-[25px] leading-[30px] mb-[15px] md:text-[40px] md:leading-12 pl-[50px] md:pl-0">
                Collaborate securely everything
              </h2>
              <p className="text-gray text-[16px] leading-[27px] md:text-[17px] md:leading-[29px] font-normal mb-4">
                Lorem Ipsum is simply dummy text of the printing and types
                etting industry lorem Ipsum has been the indu has been the
                industrys standard dummy text ever since the when an unknown
                printer took a galley of type and.
              </p>
            </div>
            <div className="md:pb-[25px]">
              <div className="mb-5 md:mb-[35px]">
                <Image
                  src={AppImages.Sync_Followers}
                  alt="right-icon"
                  className="w-[50px] h-[50px] md:w-auto md:h-auto absolute"
                ></Image>
                <div className="pl-[65px] md:pl-[115px] top-0 relative">
                  <h3 className="text-secondary text-[17px] leading-5 font-bold md:text-xl md:leading-6 mb-[5px]">
                    Sync followers
                  </h3>
                  <p className="text-gray text-[16px] leading-[27px] md:text-[17px] md:leading-[29px] font-normal mb-4">
                    Simply dummy text of the printing and typesetting inustry
                    lorem Ipsum has Lorem dollar summit.
                  </p>
                </div>
              </div>
              <div className="mb-5 md:mb-[35px]">
                <Image
                  src={AppImages.Globally_Connected}
                  alt="right-icon"
                  className="w-[50px] h-[50px] md:w-auto md:h-auto absolute"
                ></Image>
                <div className="pl-[65px] md:pl-[115px]  top-0 relative">
                  <h3 className="text-secondary text-[17px] leading-5 font-bold md:text-xl md:leading-6 mb-[5px]">
                    Globally connected
                  </h3>
                  <p className="text-gray text-[16px] leading-[27px] md:text-[17px] md:leading-[29px] font-normal mb-4">
                    Simply dummy text of the printing and typesetting inustry
                    lorem Ipsum has Lorem dollar summit.
                  </p>
                </div>
              </div>
            </div>
            <button className="group flex items-center text-white bg-orange uppercase  text-[12px] leading-[18px] md:text-[15px] md:leading-[23px] font-bold px-[20px] py-[8px] md:px-[30px] md:py-[10px] cursor-pointer  rounded-[25px]">
              Read More
              <Icon
                name="arrow-right"
                width={20}
                height={22}
                className="inline ml-1 -rotate-45 group-hover:rotate-0 transition-all duration-400 "
              ></Icon>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
