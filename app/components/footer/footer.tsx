import React from "react";
import FooterTop from "./footer-top/footer-top";
import FooterBottom from "./footer-bottom/footer-bottom";
import { AppImages } from "@/app/shared/image/image";
import Image from "next/image";
import Link from "next/link";
import FooterBody from "./footer-body/footer-body";

const Footer = () => {
  return (
    <section className="pt-[70px]">
      <FooterTop></FooterTop>
      <FooterBody></FooterBody>
      <FooterBottom></FooterBottom>
    </section>
  );
};

export default Footer;
