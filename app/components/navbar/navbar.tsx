"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import { AppImages } from "@/app/shared/image/image";
import Icon from "@/app/shared/icon/icon";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-999 ${
        scrolled ? styles.header_container : "bg-transparent"
      } `}
    >
      <nav className={`${styles?.test} `}>
        <div
          className={`flex justify-between items-center transition-all duration-300 ${
            scrolled ? "pt-[20px] pb-[20px]" : "pt-[35px] pb-2"
          }`}
        >
          <div>
            {" "}
            <Image src={AppImages.Logo} alt="this is logo"></Image>
          </div>
          <div className="hidden md:block">
            {" "}
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Testimonial</Link>
              </li>
              <li>
                <Link href="/">Services</Link>
                <Icon
                  name="rounded-down"
                  className={styles.icon_style}
                  width={17}
                  height={19.2}
                ></Icon>
              </li>
              <li>
                <Link href="/">Blog</Link>
                <Icon
                  name="rounded-down"
                  className={styles.icon_style}
                  width={17}
                  height={19.2}
                ></Icon>
              </li>
              <li>
                <Link href="/">Pages</Link>
                <Icon
                  name="rounded-down"
                  className={styles.icon_style}
                  width={17}
                  height={19.2}
                ></Icon>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
              <li>
                <Link href="/">
                  <button className="group  bg-orange text-white rounded-[25px] px-[38px] py-[9px] text-[15px] font-bold uppercase cursor-pointer">
                    Try it free
                    <Icon
                      name="arrow-right"
                      width={20}
                      height={22}
                      className="inline ml-1 -rotate-45 group-hover:rotate-0 transition-all duration-400 "
                    ></Icon>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="block md:hidden">
            <Icon
              name="navigation-menu"
              width={20}
              height={20}
              className="text-gray"
            />
            <Icon name="close" width={20} height={20} className="text-gray" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
