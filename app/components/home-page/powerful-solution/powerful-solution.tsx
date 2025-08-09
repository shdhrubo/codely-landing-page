import Icon from "@/app/shared/icon/icon";
import { AppImages } from "@/app/shared/image/image";
import React from "react";
import Counts from "./counts/counts";
import ImageGallery from "./image-gallery/image-gallery";

const PowerfulSolution = () => {
  const chipsData = [
    {
      icon: "check-circled",
      label: "Highly customized",
    },
    {
      icon: "check-circled",
      label: "Pixel perfect design",
    },
    {
      icon: "check-circled",
      label: "Worldwide support",
    },
  ];
  return (
    <section
      className="py-[50px] bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${AppImages.Powerful_Bg.src})` }}
    >
      <div className="px-[15px] mx-auto max-w-[1200px]">
        <section className="max-w-[680px] mx-auto text-center">
          <h2 className="text-secondary font-bold text-[25px] leading-[30px] mb-[10px] md:text-[40px] md:leading-12">
            Powerful solution for your business{" "}
          </h2>
          <p className="text-gray text-[16px] leading-[27px] md:text-[17px] md:leading-[29px] font-normal mb-4">
            Lorem Ipsum is simply dummy text of the printing and typese tting
            indus orem Ipsum has beenthe standard dummy text ever since.
          </p>
        </section>
        <section className="mt-[30px] flex flex-col md:flex-row  items-center justify-center gap-y-[15px]">
          {chipsData.map((card, index) => (
            <section
              key={index}
              className="flex  flex-row  items-center bg-white rounded-[100px] px-[35px] py-[5px] mx-[10px] gap-x-[2px]"
            >
              <Icon
                name={card.icon}
                className="w-[14px] h-[15px] md:w-[17px] md:h-[19px]"
              ></Icon>
              <h6 className="text-gray text-sm leading-6 font-semibold md:text-[17px] md:leading-[29px]">
                {card.label}
              </h6>
            </section>
          ))}
        </section>
        <section className="mt-[35px] mb-[50px]">
          <Counts></Counts>
        </section>
        <section>
          <ImageGallery></ImageGallery>
        </section>
      </div>
    </section>
  );
};

export default PowerfulSolution;
