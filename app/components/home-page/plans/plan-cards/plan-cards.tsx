import Icon from "@/app/shared/icon/icon";
import { AppImages } from "@/app/shared/image/image";
import Image from "next/image";
import React from "react";

const PlanCards: React.FC<{ isYearly: boolean }> = ({ isYearly }) => {
  const pricingData = [
    {
      image: AppImages.FreeTrial,
      title: "Free Trial",
      description: "For the basics",
      monthlyPrice: "$0",
      yearlyPrice: "$0",
      features: [
        { title: "7 Days free trial", isIncluded: true },
        { title: "2 platforms of your choice", isIncluded: true },
        { title: "10 GB Dedicated Hosting free", isIncluded: true },
        { title: "Unlimited updates", isIncluded: false },
        { title: "Live support", isIncluded: false },
      ],
    },
    {
      image: AppImages.Unlimited,
      title: "Unlimited",
      description: "For the professionals",
      monthlyPrice: "$99",
      yearlyPrice: "$999",

      features: [
        { title: "7 Days free trial", isIncluded: true },
        { title: "2 platforms of your choice", isIncluded: true },
        { title: "10 GB Dedicated Hosting free", isIncluded: true },
        { title: "Unlimited updates", isIncluded: true },
        { title: "Live support", isIncluded: true },
      ],
    },
    {
      image: AppImages.Premium,
      title: "Premium",
      description: "For small team",
      monthlyPrice: "$55",
      yearlyPrice: "$555",
      features: [
        { title: "7 Days free trial", isIncluded: true },
        { title: "2 platforms of your choice", isIncluded: true },
        { title: "10 GB Dedicated Hosting free", isIncluded: true },
        { title: "Unlimited updates", isIncluded: true },
        { title: "Live support", isIncluded: false },
      ],
    },
  ];

  return (
    <div className="flex flex-col md:flex-row  items-center justify-center md:mx-[-15px]">
      {pricingData.map((plan, index) => (
        <div key={index} className="md:px-[15px] w-full">
          <div
            key={index}
            className={` p-[30px] md:pt-[60px] md:pl-[50px] border border-[#f1eff7] rounded-[12px] shadow-[0_4px_30px] shadow-[#ede9fe] mb-[30px]  bg-no-repeat bg-cover relative ${
              index === 1 ? "bg-primary" : "bg-white"
            }`}
          >
            {index === 1 && (
              <Image
                src={AppImages.Unlimited_Bg}
                alt="background"
                width={246}
                height={246}
                className="absolute top-[-70px] left-[-70px] w-[246px] h-[246px]  z-0 "
              />
            )}

            <Image
              src={plan.image}
              alt="image"
              width={120}
              className="mb-[10px] ml-[-25px] "
            ></Image>
            <h2
              className={` ${
                index === 1 ? "text-white" : "text-secondary"
              } text-xl leading-6 font-bold`}
            >
              {plan.title}
            </h2>
            <p
              className={`${
                index === 1 ? "text-white" : "text-gray"
              } text-[15px] leading-[26px] font-normal`}
            >
              {plan.description}
            </p>

            <h1 className={`my-[15px] md:my-[25px]`}>
              <span
                className={`${
                  index === 1 ? "text-white" : "text-primary"
                }  text-[36px] leading-[61px] font-bold md:text-[48px] md:leading-[82px]`}
              >
                {" "}
                {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              </span>{" "}
              <span
                className={`${
                  index === 1 ? "text-white" : "text-gray"
                }  text-[15px] leading-[26px] font-normal`}
              >
                /{isYearly ? "Year" : "Month"}
              </span>
            </h1>
            <div className="mb-10">
              {plan.features.map((feature, featureIndex) => (
                <p
                  key={featureIndex}
                  className={`text-[15px] leading-[26px] font-normal md:text-[17px] md:leading-[29px] mb-[5px]  ${
                    index === 1 ? "text-white" : "text-secondary"
                  }`}
                >
                  <Icon
                    name={
                      feature.isIncluded ? "check-circled" : "close-circled"
                    }
                    className={`inline  w-[15px] h-[15px] md:w-[17px] md:h-[17px] mr-[5px] ${
                      feature.isIncluded ? "text-green-500" : "text-red-500"
                    } ${index === 1 ? "text-white" : ""}`}
                  ></Icon>
                  <span className="relative top-[2px]">{feature.title}</span>
                </p>
              ))}
            </div>
            <button
              className={`group w-[180px] border text-primary uppercase text-sm leading-[21px] font-bold px-[20px] py-[8px] md:px-[30px] md:py-[10px] cursor-pointer rounded-[25px] transition-all duration-400  ${
                index === 1
                  ? "bg-orange-gradient text-white border-transparent hover:bg-hover-gradient hover:opacity-[0.9]"
                  : "bg-white hover:bg-primary hover:text-white"
              }`}
            >
              Buy Now
              <Icon
                name="arrow-right"
                width={20}
                height={22}
                className={`inline ml-1 -rotate-45 group-hover:rotate-0  `}
              ></Icon>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlanCards;
