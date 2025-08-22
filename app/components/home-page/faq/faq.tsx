"use client";
import Icon from "@/app/shared/icon/icon";
import { AppImages } from "@/app/shared/image/image";
import Image from "next/image";
import React, { useState } from "react";

const FAQ = () => {
  const faqData = [
    {
      question: "How can I pay?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      question: "How to setup account ?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      question: "What is process to get refund?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      question: "What is process to get refund?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  // Track which index is active
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-[30px] md:py-[50px]">
      <div className="mx-auto max-w-[1200px]">
        <section className="px-[15px]">
          <section className="mx-auto max-w-[690px] text-center mb-10">
            <h2 className="text-secondary font-bold text-[25px] leading-[30px] mb-[10px] md:text-[40px] md:leading-12">
              FAQ - Frequently Asked Questions
            </h2>
            <p className="text-gray text-[16px] leading-[27px] md:text-[17px] md:leading-[29px] font-normal mb-4">
              Lorem Ipsum is simply dummy text of the printing and typese tting
              indus orem Ipsum has been the standard dummy.
            </p>
          </section>

          <section>
            {faqData.map((item, index) => {
              const isOpen = activeIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white py-4 mb-5 rounded-[12px] border-[#f1eff7] shadow-[0px_4px_10px_#ede9fe]"
                >
                  <div>
                    <div
                      className="px-5 flex items-center gap-x-[17px] cursor-pointer"
                      onClick={() => handleToggle(index)}
                    >
                      <div>
                        <Image
                          src={AppImages.Qustion_Icon}
                          alt="question"
                        ></Image>
                      </div>

                      <div className="flex justify-between items-center flex-1">
                        <h2
                          className={`text-[17px] leading-[26px] font-bold md:text-xl md:leading-[30px] ${
                            isOpen ? "text-primary" : "text-dark-purple"
                          }`}
                        >
                          {item.question}
                        </h2>
                        <div>
                          {isOpen ? (
                            <Icon
                              name="minus-icon"
                              className="text-[#839bc0] size-5"
                            />
                          ) : (
                            <Icon
                              name="plus-icon"
                              className="text-[#839bc0] size-5"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? "max-h-full opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray text-[16px] leading-[27px] md:text-[17px] md:leading-[29px] font-normal mb-4 px-5 pt-5">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        </section>
      </div>
    </section>
  );
};

export default FAQ;
