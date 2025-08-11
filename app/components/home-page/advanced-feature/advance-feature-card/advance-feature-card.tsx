import { AppImages } from "@/app/shared/image/image";
import Image from "next/image";
import React from "react";

const AdvanceFeatureCard = () => {
  const cardData = [
    {
      image: AppImages.Secure_Data,
      title: "Secure data",
      description:
        "Lorem Ipsum is simply dummy text of the prin ting and type setting indus ideas orem Ipsum has beenthe standard dummy text ever since the when an type setting indus ideas own.",
    },
    {
      image: AppImages.Fully_Functional,
      title: "Fully functional",
      description:
        "Simply dummy text of the printing and type se tting indus ideas orem Ipsum has beenthe stanard dummy text ever since the when an type setting indus iLorem Ipsum is.",
    },
    {
      image: AppImages.Live_Chat,
      title: "Live chat",
      description:
        "Lorem Ipsum is simply dummy text of the prin ting and type setting indus ideas orem Ipsum has beenthe standard dummy text ever since the when an type setting indus ideas own.",
    },
    {
      image: AppImages.Support,
      title: "24-7 Support",
      description:
        "Lorem Ipsum is simply dummy text of the prin ting and type setting indus ideas orem Ipsum has beenthe standard dummy text ever since the when an type setting indus ideas own.",
    },
  ];
  return (
    <section className="flex flex-wrap max-w-[1170px] mx-auto">
      {cardData.map((card, index) => (
        <section key={index} className="w-full md:w-1/2 px-[15px]">
          <div className="mt-[30px] p-[30px] md:p-10 bg-white rounded-xl   md:flex md:items-start gap-x-[15px] ">
            <Image
              src={card.image}
              alt={`feature-image`}
              width={95}
              className="mx-auto"
            />
            <div className="text-center md:text-left w-full md:max-w-[365px] mt-[15px] md:mt-0">
              <h3 className="text-secondary text-[16px] leading-[27px] font-bold md:text-xl md:leading-6 mb-5">
                {card.title}
              </h3>
              <p className="text-gray text-[16px] leading-[27px] md:text-[17px] md:leading-[29px] font-normal mb-4">
                {card.description}
              </p>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
};

export default AdvanceFeatureCard;
