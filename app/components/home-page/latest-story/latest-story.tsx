import Icon from "@/app/shared/icon/icon";
import { AppImages } from "@/app/shared/image/image";
import Image from "next/image";
import React from "react";

const LatestStory = () => {
  const storyData = [
    {
      img: AppImages.Latest_Story_1,
      date: "23",
      month: "AUG",
      author: "Admin",
      comments: 36,
      title: "Powerfull features makes software awesome !",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been.",
    },
    {
      img: AppImages.Latest_Story_2,
      date: "23",
      month: "AUG",
      author: "Admin",
      comments: 36,
      title: "Why software is globally used as best software",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been.",
    },
    {
      img: AppImages.Latest_Story_3,
      date: "23",
      month: "AUG",
      author: "Admin",
      comments: 36,
      title: "Beautiful user interface with bug free code.",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been.",
    },
  ];

  return (
    <section className="py-[30px] md:py-[50px]">
      <div className="mx-auto max-w-[1200px]">
        <section className="px-[15px]">
          <section className="mx-auto max-w-[600px] text-center mb-10">
            <h2 className="text-secondary font-bold text-[25px] leading-[30px] mb-[10px] md:text-[40px] md:leading-12">
              Read latest story
            </h2>
            <p className="text-gray text-[16px] leading-[27px] md:text-[17px] md:leading-[29px] font-normal mb-4">
              Lorem Ipsum is simply dummy text of the printing and typese tting
              indus orem Ipsum has been the standard dummy.
            </p>
          </section>
          <section>
            <section className="flex flex-col md:flex-row justify-center items-center md:mx-[-15px]">
              {storyData.map((story, index) => (
                <section key={index} className="px-[15px]">
                  <section className=" bg-white rounded-xl mb-[30px] md:mb-0 relative">
                    <Image
                      src={story.img}
                      alt={story.title}
                      className="rounded-xl w-full"
                    />
                    <div className="bg-white rounded-xl absolute top-[10px] left-[10px] px-[10px] py-[6px] text-center text-[17px] leading-[17px] font-bold">
                      {story.date} <br />
                      <div className="text-xs leading-[18px]">
                        {story.month}
                      </div>
                    </div>
                    <div className="p-[15px] md:px-[30px] md:py-5">
                      <div className="mb-[12px] flex items-center gap-x-[15px]">
                        <p>
                          <Icon
                            name="user-suited"
                            className="text-primary size-3 inline"
                          ></Icon>{" "}
                          <span className="text-xs leading-5 font-normal text-gray">
                            {" "}
                            {story.author}
                          </span>
                        </p>
                        <p>
                          <Icon
                            name="speech-comments"
                            className="text-primary  size-3 inline"
                          ></Icon>{" "}
                          <span className="text-xs leading-5 font-normal text-gray">
                            {" "}
                            {story.comments} Comments
                          </span>
                        </p>
                      </div>
                      <h3 className="text-secondary font-bold text-[20px] leading-[24px] mb-2">
                        {story.title}
                      </h3>
                      <p className="text-gray text-[14px] leading-[21px] font-normal mb-2">
                        {story.description}
                      </p>
                      <button className="group flex items-center  border border-white text-primary bg-white uppercase text-sm leading-[21px] font-bold  cursor-pointer hover:text-light-black mt-[25px] mb-[10px]">
                        Read More
                        <Icon
                          name="arrow-right"
                          width={20}
                          height={22}
                          className="inline ml-1 -rotate-45 group-hover:rotate-0 transition-all duration-400 "
                        ></Icon>
                      </button>
                    </div>
                  </section>
                </section>
              ))}
            </section>
          </section>
        </section>
      </div>
    </section>
  );
};

export default LatestStory;
