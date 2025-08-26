import Icon from "@/app/shared/icon/icon";
import Link from "next/link";
import React from "react";

const FooterBottom = () => {
  const footerBottomData = {
    copyright: "© 2025 Codely. All rights reserved.",

    social: [
      { name: "facebook", url: "https://facebook.com" },
      { name: "twitter", url: "https://twitter.com" },
      { name: "instagram", url: "https://instagram.com" },
      { name: "pinterest", url: "https://pinterest.com" },
    ],
    designBy: {
      name: "Shoriful Habib (Dhrubo)",
      url: "https://shorifulhabib.netlify.app/",
    },
  };
  return (
    <section className="border-t border-[#6a49f2] bg-secondary-purple text-xs  leading-5 md:leading-[26px] md:text-[15px]font-normal">
      <div className="max-w-[1200px] mx-auto px-[15px]   text-white">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between flex-wrap py-[15px] md:mx-[-15px]">
          <div className="mx-[15px] ">{footerBottomData.copyright}</div>
          <div className="mx-[15px] flex items-center justify-center my-[15px] md:my-0">
            {footerBottomData.social.map((social, index) => (
              <div
                key={index}
                className="border border-white rounded-[50px] mr-[10px] p-[10px] hover:bg-white hover:text-black cursor-pointer "
              >
                <Link href={social.url}>
                  {" "}
                  <Icon name={social.name} width={15} height={16.8}></Icon>
                </Link>
              </div>
            ))}
          </div>
          <p className="mx-[15px] ">
            Design & Developed by{" "}
            <Link
              className=" border-b border-white cursor-pointer"
              href={footerBottomData.designBy.url}
              target="_blank"
            >
              {footerBottomData.designBy.name}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterBottom;
