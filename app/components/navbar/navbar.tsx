import Link from "next/link";
import React from "react";
import styles from "./navbar.module.scss";
import Image from "next/image";
import logo from "@/public/images/logo/logo.png";
const Navbar = () => {
  return (
    <nav className={styles?.test}>
      <div>
        {" "}
        <Image src={logo} alt="this is logo"></Image>
      </div>
      <div>
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
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">Pages</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
          <li>
            <Link href="/">
              <button className="bg-orange text-white rounded-[25px] px-[38px] py-[9px] text-[15px] font-bold uppercase">
                Try it free
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
