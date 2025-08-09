"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counts = () => {
  const countData = [
    {
      value: 450,
      label: "Million of client logins monthly",
    },
    {
      value: 120,
      label: "Languages and countries",
    },
    {
      value: 135,
      label: "Percent yearly turnover increase",
    },
    {
      value: 324,
      label: "Million active accounts",
    },
  ];
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
    fallbackInView: true,
  });
  return (
    <div className="flex  flex-wrap justify-between " ref={ref}>
      {countData.map((card, index) => (
        <div
          key={index}
          className="my-[10px] text-center md:max-w-[180px] w-1/2"
        >
          <h2 className="text-primary text-[32px] leading-[38px] md:text-6xl md:leading-18 font-bold">
            {inView ? <CountUp start={0} end={card.value} duration={3} /> : 0}+
          </h2>
          <p className="text-gray text-[16px] md:text-[17px] leading-[23px] font-semibold mb-4">
            {card.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Counts;
