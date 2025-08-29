import Image from "next/image";
import React from "react";
import Icon from "@/app/shared/icon/icon";
import { AppImages } from "@/app/shared/image/image";

const Banner = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center pt-[70px] max-w-[1200px] mx-auto ">
      {/* text section  */}
      <div className="mx-auto text-center md:text-left max-w-[500px] px-[15px]">
        <div className="flex items-center gap-[1px] justify-center md:justify-start">
          <Icon
            name="rocket"
            width={20}
            height={22}
            className="text-orange"
          ></Icon>
          <div className="text-dark-purple text-[15px] leading-[26px] md:text-xl  md:leading-[34px] font-bold ">
            Powerful, easier and faster
          </div>
        </div>
        <h1 className="text-primary text-[30px] leading-9  md:text-[36px] md:leading-[43px] lg:text-[50px] lg:leading-15 font-bold mt-[15px] mb-2 ">
          Build your network <br />
          <span className="text-dark-purple">faster with apper</span>
        </h1>
        <div className="text-gray text-[16px] leading-[27px] md:text-[17px] md:leading-[29px] font-normal my-[10px] md:my-5 ">
          The Worlds simplest and fast platform that brings everything together
        </div>
        <div className="relative mb-4">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            autoComplete="off"
            className="h-[50px] rounded-full bg-white pl-[47px]  w-full bg-no-repeat bg-position-[15px_50%] focus:outline-none"
            style={{
              backgroundImage: `url(${AppImages.Mail_Icon.src})`,
            }}
          />
          <span className="absolute left-[42px] top-1/2 -translate-y-1/2 w-[1px] h-[18px] bg-[#b4b5d4]" />
          <button className="absolute right-[5px] top-[3px] bg-orange text-white rounded-[25px] px-[24px] py-[9px] text-[15px] font-bold uppercase cursor-pointer group flex items-center">
            Get Started
            <Icon
              name="arrow-right"
              width={20}
              height={22}
              className="inline ml-1 -rotate-45 group-hover:rotate-0 transition-all duration-400"
            />
          </button>
        </div>
        <div className="flex items-start gap-x-[10px] justify-center md:justify-start">
          <div className="flex items-center gap-x-0.5">
            <Icon
              name="check-circled"
              className="w-[14px] h-[15px] md:w-[17px] md:h-[19px] "
            ></Icon>
            <h6 className="text-gray text-sm leading-6 font-normal md:text-[17px] md:leading-[29px]">
              Free trial 14 days
            </h6>
          </div>
          <div className="flex items-center gap-x-0.5">
            <Icon
              name="check-circled"
              className="w-[14px] h-[15px] md:w-[17px] md:h-[19px] "
            ></Icon>
            <h6 className="text-gray text-sm leading-6 font-normal md:text-[17px] md:leading-[29px]">
              No credit card require
            </h6>
          </div>
        </div>
      </div>

      {/* image section  */}
      <div className="px-[15px] mt-25 md:mt-0">
        <Image src={AppImages.Banner} alt="banner" placeholder="blur"></Image>
      </div>
    </section>
  );
};

export default Banner;
