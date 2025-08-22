"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import { AppImages } from "@/app/shared/image/image";
import Icon from "@/app/shared/icon/icon";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  }, []);

  // Reusable Nav Items
  const navItems = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/">About Us</Link>
      </li>
      <li>
        <Link href="/">Testimonial</Link>
      </li>
      <li className="flex items-center justify-between gap-1">
        <Link href="/">Services</Link>
        <Icon
          name="rounded-down"
          className={styles.icon_style}
          width={17}
          height={19.2}
        />
      </li>
      <li className="flex items-center justify-between gap-1">
        <Link href="/">Blog</Link>
        <Icon
          name="rounded-down"
          className={styles.icon_style}
          width={17}
          height={19.2}
        />
      </li>
      <li className="flex items-center justify-between gap-1">
        <Link href="/">Pages</Link>
        <Icon
          name="rounded-down"
          className={styles.icon_style}
          width={17}
          height={19.2}
        />
      </li>
      <li>
        <Link href="/">Contact</Link>
      </li>
      <li>
        <Link href="/">
          <button className="group bg-orange text-white rounded-[25px] px-[38px] py-[9px] text-[15px] font-bold uppercase cursor-pointer">
            Try it free
            <Icon
              name="arrow-right"
              width={20}
              height={22}
              className="inline ml-1 -rotate-45 group-hover:rotate-0 transition-all duration-400 "
            />
          </button>
        </Link>
      </li>
    </>
  );

  return (
    <header
      className={`sticky top-0 z-999 h-21 ${
        scrolled ? styles.header_container : "bg-transparent"
      }`}
    >
      <nav
        className={`${styles?.test} max-w-[1200px] mx-auto  py-0 px-[15px] w-full z-1000`}
      >
        <div
          className={`flex justify-between items-center transition-all duration-400  ${
            scrolled ? "pt-[20px] pb-[20px]" : "pt-[35px] pb-2"
          }`}
        >
          {/* Logo */}
          <div>
            <Image src={AppImages.Logo} alt="this is logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center">{navItems}</ul>
          </div>

          {/* Mobile Menu Icon */}
          <div className="block md:hidden">
            {menuOpen ? (
              <div onClick={() => setMenuOpen(false)}>
                <Icon
                  name="close"
                  width={25}
                  height={25}
                  className="text-gray"
                />
              </div>
            ) : (
              <div onClick={() => setMenuOpen(true)}>
                <Icon
                  name="navigation-menu"
                  width={25}
                  height={25}
                  className="text-gray"
                />
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu List */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md pt-5  px-[15px] border-t border-primary transition-all duration-400 h-screen">
            <ul className="flex flex-col   gap-5">{navItems}</ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
