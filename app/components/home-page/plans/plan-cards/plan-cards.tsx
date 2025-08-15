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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
      {pricingData.map((plan, index) => (
        <div key={index} className="px-[15px]">
          <div
            key={index}
            className={`p-[30px] md:pt-[60px] md:pl-[50px] rounded-[12px] shadow-[0_4px_30px] shadow-[#ede9fe] ${
              index === 1 ? "bg-primary" : "bg-white"
            }`}
          >
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlanCards;
