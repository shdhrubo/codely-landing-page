import Icon from "@/app/shared/icon/icon";
import { AppImages } from "@/app/shared/image/image";
import Image from "next/image";
import React from "react";

const FooterTop = () => {
  return (
    <section className="w-full sm:max-w-[540px] md:max-w-[920px] lg:max-w-[1200px] mx-auto px-[15px]">
      <section className="relative bg-primary text-white rounded-[12px] px-[50px] py-12 shadow-[0px_0px_8px_#0000004f] overflow-hidden">
        <Image
          src={AppImages.Footer_Bg}
          alt="background"
          width={246}
          height={246}
          className="absolute right-[-50px] bottom-0 w-[246px] h-[246px]  z-0  "
        />
        <div className="flex flex-col  md:flex-row justify-between items-center">
          <div>
            <h2 className="text-[26px] leading-[31px] font-bold  md:text-[40px] md:leading-[48px] mb-[10px] text-center md:text-start">
              Need support ? contact our team
            </h2>
            <p className="text-[16px] leading-[27px] font-normal md:text-[17px] md:leading-[29px] flex items-center gap-[2px] justify-center md:justify-start">
              <Icon name="clock-time" width={16} height={17.2}></Icon> Mon -
              Fri: 9 am - 5 pm
            </p>
          </div>
          <div className="mt-[10px] md:mt-0">
            <button className="flex items-center  rounded-[25px] px-[38px] py-[9px] text-[17px] font-bold uppercase cursor-pointer bg-orange-gradient text-white border-transparent hover:bg-hover-gradient hover:opacity-[0.9] mb-[5px] w-[230px]">
              <Icon
                name="phone-circle"
                width={18}
                height={20}
                className="inline mr-[3px] "
              />
              +123 456 7890
            </button>
            <a
              href="text"
              className="text-[16px] leading-[27px] font-normal md:text-[17px] md:leading-[29px] underline text-center block"
            >
              Read The FAQ
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FooterTop;
