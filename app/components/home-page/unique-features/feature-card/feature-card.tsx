import React from "react";
import Image from "next/image";
import feature1 from "@/public/images/unique-features/features_icon_01.svg";
import feature2 from "@/public/images/unique-features/features_icon_02.svg";
import feature3 from "@/public/images/unique-features/features_icon_03.svg";
import Icon from "@/app/shared/icon/icon";

const cardData = [
  {
    image: feature1,
    title: "Highly customizable",
    description:
      "Lorem Ipsum is simply dummy text of the printing and type setting indus ideas orem Ipsum has beenthe.",
  },
  {
    image: feature2,
    title: "Pixel perfect design",
    description:
      "Lorem Ipsum is simply dummy text of the printing and type setting indus ideas orem Ipsum has beenthe.",
  },
  {
    image: feature3,
    title: "Lifetime free updates",
    description:
      "Lorem Ipsum is simply dummy text of the printing and type setting indus ideas orem Ipsum has beenthe.",
  },
];

const FeatureCard = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center text-center gap-x-[38px]">
      {cardData.map((card, index) => (
        <section
          key={index}
          className="px-[15px] py-[20px] md:p-[40px] bg-white rounded-xl mb-[30px] md:mb-0 hover:shadow-[0_18px_29px] shadow-[#ede9fe] transition-all duration-400 "
        >
          <Image src={card.image} alt={`feature-image`} className="mx-auto" />
          <h3 className="text-secondary text-[16px] leading-[27px] font-bold md:text-xl md:leading-6 mb-5">
            {card.title}
          </h3>
          <p className="text-gray text-[16px] leading-[27px] md:text-[17px] md:leading-[29px] font-normal mb-4">
            {card.description}
          </p>
          <button className="group flex items-center mx-auto border border-white text-primary bg-white uppercase text-sm leading-[21px] font-bold px-[12px] py-[6px] cursor-pointer hover:text-light-black">
            Discover More
            <Icon
              name="arrow-right"
              width={20}
              height={22}
              className="inline ml-1 -rotate-45 group-hover:rotate-0 transition-all duration-400 "
            ></Icon>
          </button>
        </section>
      ))}
    </section>
  );
};

export default FeatureCard;
