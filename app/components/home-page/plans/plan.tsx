"use client";
import React, { useState } from "react";
import PlanCards from "./plan-cards/plan-cards";

const Plan = () => {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <section className="pt-[50px] pb-[30px] md:py-[50px]">
      <div className="mx-auto max-w-[1200px]">
        <section className="px-[15px]">
          <section className="max-w-[600px] mx-auto text-center mb-10">
            <h2 className="text-secondary font-bold text-[25px] leading-[30px] mb-[10px] md:text-[40px] md:leading-12">
              Best plans, pay what you use
            </h2>
            <p className="text-gray text-[16px] leading-[27px] md:text-[17px] md:leading-[29px] font-normal mb-4">
              Lorem Ipsum is simply dummy text of the printing and typese tting
              orem Ipsum has beenthe standard dummy text ever since.
            </p>
          </section>
          <section>
            <div className="flex justify-center items-center ">
              <span
                className={`cursor-pointer mx-[5px] text-[16px] leading-[27px] font-semibold md:text-[17px] md:leading-[29px]  ${
                  !isYearly ? "text-primary" : "text-secondary"
                }`}
              >
                Monthly
              </span>

              <div
                className="w-[70px] h-[35px] bg-white rounded-full p-1 cursor-pointer flex items-center mx-[10px]"
                onClick={() => setIsYearly(!isYearly)}
              >
                <div
                  className={`bg-primary w-[23px] h-[23px] mx-[5px] rounded-full transition-all duration-400 ${
                    isYearly ? "translate-x-[29px]" : "translate-x-0"
                  }`}
                ></div>
              </div>

              <div className="flex items-center gap-1">
                <span
                  className={`cursor-pointer mx-[5px] text-[16px] leading-[27px] font-semibold md:text-[17px] md:leading-[29px]  ${
                    isYearly ? "text-primary " : "text-secondary"
                  }`}
                >
                  Yearly
                </span>
                <span className="bg-orange text-white text-[13px] leading-[22px] font-normal px-[10px] py-[2px] rounded-[5px]">
                  50% off
                </span>
              </div>
            </div>
          </section>
          <section>
            <PlanCards isYearly={isYearly}></PlanCards>
          </section>
        </section>
      </div>
    </section>
  );
};

export default Plan;
