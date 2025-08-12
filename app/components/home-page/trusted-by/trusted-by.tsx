"use client";
import { AppImages } from "@/app/shared/image/image";
import Image from "next/image";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@/app/components/home-page/trusted-by/trusted-by.module.css";

const TrustedBy = () => {
  const trustedByData = [
    {
      image: AppImages.Paypal,
    },
    {
      image: AppImages.Spotify,
    },
    {
      image: AppImages.Envato,
    },
    {
      image: AppImages.Shopboat,
    },
    {
      image: AppImages.Slack,
    },
    {
      image: AppImages.Paypal,
    },
    {
      image: AppImages.Spotify,
    },
    {
      image: AppImages.Envato,
    },
    {
      image: AppImages.Shopboat,
    },
    {
      image: AppImages.Slack,
    },
  ];
  return (
    <section className="py-[50px] md:pt-[100px] md:pb-[50px]">
      <div className="mx-auto max-w-[1200px]">
        <section className="px-[15px]">
          <section className="max-w-[600px] mx-auto text-center mb-10">
            <h2 className="text-secondary font-bold text-[25px] leading-[30px] mb-[10px] md:text-[40px] md:leading-12">
              Trusted by 150+ companies
            </h2>
            <p className="text-gray text-[16px] leading-[27px] md:text-[17px] md:leading-[29px] font-normal mb-4">
              Lorem Ipsum is simply dummy text of the printing and typese tting
              indus orem Ipsum has beenthe standard dummy.
            </p>
          </section>

          <section className="pt-5">
            <Swiper
              className={styles.trustedBy}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              modules={[Autoplay, Pagination]}
              pagination={{ clickable: true }}
              breakpoints={{
                0: { slidesPerView: 2 },
                960: { slidesPerView: 3 },
                1280: { slidesPerView: 5 },
              }}
            >
              {trustedByData.map((data, key) => (
                <SwiperSlide key={key}>
                  <div className="mr-[10px]">
                    <Image
                      src={data.image}
                      className="grayscale hover:grayscale-0  hover:cursor-grab mx-auto  "
                      alt="images"
                    ></Image>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        </section>
      </div>
    </section>
  );
};

export default TrustedBy;
