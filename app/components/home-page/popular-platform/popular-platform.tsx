import { AppImages } from "@/app/shared/image/image";
import React from "react";

const PopularPlatform = () => {
  const cardData = [
    {
      label: "Mailchimp",
      image: AppImages.Mailchimp,
    },
    {
      label: "Google Drive",
      image: AppImages.Google_Drive,
    },
    {
      label: "Whatsapp",
      image: AppImages.Whatsapp,
    },
    {
      label: "Google Drive",
      image: AppImages.Google_Drive,
    },
    {
      label: "Mailchimp",
      image: AppImages.Mailchimp,
    },
    {
      label: "Dropbox",
      image: AppImages.Dropbox,
    },
    {
      label: "Skype",
      image: AppImages.Skype,
    },
    {
      label: "Wordpress",
      image: AppImages.Wordpress,
    },
    {
      label: "Smashing",
      image: AppImages.Smashing,
    },
    {
      label: "Firefox",
      image: AppImages.Firefox,
    },
    {
      label: "Yahoo",
      image: AppImages.Yahoo,
    },
    {
      label: "Bing",
      image: AppImages.Bing,
    },
  ];
  return (
    <section className="py-[50px] md:pt-[100px] md:pb-[50px]">
      <div className="px-[15px] mx-auto max-w-[1200px]">
        <section className="max-w-[600px] mx-auto text-center">
          <h2 className="text-secondary font-bold text-[25px] leading-[30px] mb-[10px] md:text-[40px] md:leading-12">
            Easy integration <br /> with popular platforms
          </h2>
          <p className="text-gray text-[16px] leading-[27px] md:text-[17px] md:leading-[29px] font-normal mb-4">
            Lorem Ipsum is simply dummy text of the printing and typese tting
            indus orem Ipsum has beenthe standard dummy text ever since.
          </p>
        </section>
      </div>
    </section>
  );
};

export default PopularPlatform;
