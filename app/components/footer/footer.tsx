import React from "react";
import FooterTop from "./footer-top/footer-top";
import FooterBottom from "./footer-bottom/footer-bottom";
import { AppImages } from "@/app/shared/image/image";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerData = {
    logo: AppImages.Logo_White,
    description:
      "Lorem Ipsum is simply dummy text of the printing and type setting industry ype setting industry lorem Ipsum has been the industrys standard dummy.",
    usefulLinks: [
      {
        title: "Home",
        url: "/about",
      },
      {
        title: "About Us",
        url: "/about",
      },
      {
        title: "Services",
        url: "/services",
      },

      {
        title: "Services Detail",
        url: "/services-detail",
      },
      {
        title: "Blog",
        url: "/blog",
      },
    ],
    helpAndSupport: [
      {
        title: "FAQs",
        url: "/faq",
      },
      {
        title: "How it works",
        url: "/how-it-works",
      },
      {
        title: "Terms & conditions",
        url: "/terms-and-conditions",
      },
      {
        title: "Privacy policy",
        url: "/privacy-policy",
      },
    ],
    contactUs: [
      {
        image: AppImages.Reach_Us,
        title: "Reach us",
        description: "599, Vilium Crossing, NJ",
      },
      {
        image: AppImages.Call_Us,
        title: "Call us",
        description: "+1-900-123 4567",
      },
      {
        image: AppImages.Email_Us,
        title: "Email us",
        description: "support@example.com",
      },
    ],
  };
  return (
    <section className="pt-[70px]">
      <FooterTop></FooterTop>
      <section className="pt-[200px] pb-[100px] bg-primary font-normal mt-[-140px] md:mt-[-120px] lg:mt-[-92px] ">
        <div className="flex flex-wrap  flex-col md:flex-row items-start  text-white max-w-[1200px] md:px-[15px] mx-auto">
          <div className="w-full md:max-w-[400px] px-[15px]">
            <div className="mr-[50px]">
              <Image src={footerData.logo} alt="Logo" className="mb-10" />
              <p className="text-[16px] leading-[27px] mb-4">
                {footerData.description}
              </p>
            </div>
          </div>
          <div className="px-[15px]">
            <h2 className="text-[20px] leading-10 font-bold pt-[10px] mb-10">
              Useful Links
            </h2>
            {footerData.usefulLinks.map((link, index) => (
              <div key={index} className="mb-[15px]">
                <Link
                  href={link.url}
                  className="text-[17px] leading-[29px] hover:text-orange "
                >
                  {link.title}
                </Link>
              </div>
            ))}
          </div>
          <div className="w-full md:max-w-[300px] px-[15px]">
            <h2 className="text-[20px] leading-10 font-bold pt-[10px] mb-10">
              Help & Support
            </h2>
            {footerData.helpAndSupport.map((link, index) => (
              <div key={index} className="mb-[15px]">
                <Link
                  href={link.url}
                  className="text-[17px] leading-[29px] hover:text-orange "
                >
                  {link.title}
                </Link>
              </div>
            ))}
          </div>
          <div className="w-full md:max-w-[300px] px-[15px] ">
            <div className="md:ml-[-20px]">
              <h2 className="text-[20px] leading-10 font-bold pt-[10px] mb-10">
                Contact us
              </h2>
              {footerData.contactUs.map((contact, index) => (
                <div
                  key={index}
                  className="mb-5 flex justify-between items-center"
                >
                  <div className="flex items-center gap-[15px]">
                    <Image
                      src={contact.image}
                      alt="image"
                      width={42}
                      height={42}
                    />
                    <div className="w-[calc(100%-42px)] text-[17px] leading-[25px]">
                      <h3>{contact.title}</h3>
                      <p className="text-[16px] leading-[27px]">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <FooterBottom></FooterBottom> */}
    </section>
  );
};

export default Footer;
