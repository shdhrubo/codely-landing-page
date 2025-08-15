"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import Icon from "@/app/shared/icon/icon";
import { AppImages } from "@/app/shared/image/image";
import Image from "next/image";
import styles from "@/app/components/home-page/testimonial/testimonial.module.css";

const testimonialData = [
  {
    reviewer: "Willium Joe",
    company: "Careative inc.",
    image: AppImages.Testimonial_Img_1,
    review:
      "Lorem Ipsum is simply dummy text of the print ing and typese tting us orem Ipsum has been.",
    rating: 5,
  },
  {
    reviewer: "Willium Joe",
    company: "Careative inc.",
    image: AppImages.Testimonial_Img_2,
    review:
      "Lorem Ipsum is simply dummy text of the print ing and typese tting us orem Ipsum has been.",
    rating: 5,
  },
  {
    reviewer: "Willium Joe",
    company: "Careative inc.",
    image: AppImages.Testimonial_Img_3,
    review:
      "Lorem Ipsum is simply dummy text of the print ing and typese tting us orem Ipsum has been.",
    rating: 5,
  },
  {
    reviewer: "Willium Joe",
    company: "Careative inc.",
    image: AppImages.Testimonial_Img_1,
    review:
      "Lorem Ipsum is simply dummy text of the print ing and typese tting us orem Ipsum has been.",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <section className="py-[50px] md:pt-[100px] md:pb-[50px]">
      <div className="mx-auto max-w-[1200px]">
        <section className="px-[15px]">
          <section className="max-w-[600px] mx-auto text-center mb-10">
            <h2 className="text-secondary font-bold text-[25px] leading-[30px] mb-[10px] md:text-[40px] md:leading-12">
              What our customer says
            </h2>
            <p className="text-gray text-[16px] leading-[27px] md:text-[17px] md:leading-[29px] font-normal mb-4">
              Lorem Ipsum is simply dummy text of the printing and typese tting
              indus orem Ipsum has beenthe standard dummy text ever since.
            </p>
          </section>

          <Swiper
            className={styles.testimonial}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              960: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
          >
            {testimonialData.map((data, key) => (
              <SwiperSlide key={key}>
                <section className="bg-white py-[30px] px-4 mb-[30px] rounded-[10px] h-full hover:cursor-grab">
                  <p className="mb-[10px] flex ">
                    {[...Array(data.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        name="star-icon"
                        className="text-orange"
                        width={15}
                        height={16.8}
                      />
                    ))}
                  </p>
                  <p className="text-gray text-[16px] leading-[27px] md:text-[17px] md:leading-[29px] font-normal mb-4">
                    {data.review}
                  </p>
                  <div className="mt-[30px] flex items-center gap-3">
                    <Image
                      src={data.image}
                      alt="image"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className={styles.reviewer}>
                      <h2 className="text-secondary text-[17px] leading-5 font-bold">
                        {data.reviewer}
                      </h2>
                      <p className="text-gray text-[17px] leading-[29px] font-normal">
                        {data.company}
                      </p>
                    </div>
                  </div>
                </section>
              </SwiperSlide>
            ))}
          </Swiper>

          <section className=" mt-5 flex items-center justify-center ">
            <div className="flex items-center mr-[5px]">
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  name="star-icon"
                  className="text-orange"
                  width={18}
                  height={20}
                />
              ))}
            </div>
            <div>
              <h4 className="text-xs leading-8 font-bold md:text-[17px] flex items-center">
                <span className="text-secondary"> 5.0 / 5.0 -</span>
                <span className="text-primary ml-1">
                  {" "}
                  3689 Total User Reviews{" "}
                  <Icon
                    name="arrow-right"
                    className="inline"
                    width={17}
                    height={19.2}
                  ></Icon>
                </span>
              </h4>
            </div>
          </section>
        </section>
      </div>
    </section>
  );
};

export default Testimonial;
