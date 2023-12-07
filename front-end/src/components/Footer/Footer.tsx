import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { images } from "../../constants/Images";

const Footer = () => {
  return (
    <section className="bg-dark-hard">
      {/* start footer section  */}
      <footer className="container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10">
        {/* start navigations */}
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">Product</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <a href="/">Landingpage</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">Services</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <a href="/">Design</a>
            </li>
            <li>
              <a href="/">Themes</a>
            </li>
            <li>
              <a href="/">UI Kit</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 md:col-start-5 lg:col-start-auto lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">Company</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Terms</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">More</h3>
          <ul className="text-[#959EAD] text-sm mt-5 space-y-4 md:text-base">
            <li>
              <a href="/">License</a>
            </li>
            <li>
              <a href="/">Changelog</a>
            </li>
          </ul>
        </div>
        {/* end navigations */}
        <div className="col-span-10 md:order-first md:col-span-4 lg:col-span-2">
          {/* start logo  */}
          <img
            src={images.LogoImage}
            alt="logo"
            className="w-14 h-14 rounded-full"
          />
          <p className="text-sm text-dark-light text-center mt-4 md:text-left md:text-base lg:text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          {/* end logo  */}
          {/* start social media icons */}
          <ul className="flex justify-center items-center mt-5 space-x-4 text-gray-300 md:justify-start">
            <li>
              <a href="/">
                <TwitterIcon className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <GitHubIcon className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <InstagramIcon className="w-6 h-auto" />
              </a>
            </li>
            <li>
              <a href="/">
                <FacebookIcon className="w-6 h-auto" />
              </a>
            </li>
          </ul>
          {/* end social media icons */}
        </div>
        <div className="hidden md:flex flex-col items-center space-y-4 md:col-span-12 lg:col-span-10">
          <p className=" text-dark-light">
            © Copyright 2023 Savindi Dadallage. All Rights Reserved.
          </p>
        </div>
      </footer>
      {/* end footer section  */}
    </section>
  );
};

export default Footer;
