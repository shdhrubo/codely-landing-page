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
      </div>

      {/* image section  */}
      <div className="px-[15px]">
        <Image src={AppImages.Banner} alt="banner" placeholder="blur"></Image>
      </div>
    </section>
  );
};

export default Banner;
