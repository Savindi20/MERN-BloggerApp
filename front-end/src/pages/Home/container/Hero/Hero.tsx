import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { images } from "../../../../constants/Images";

const Hero = () => {
  return (
    <section className="container mx-auto flex flex-col px-5 py-5 lg:flex-row">
      <div className="mt-10 lg:w-1/2">
        <h1 className="font-ubuntu text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">
          Read the most interesting articles
        </h1>
        <p className="text-dark-light mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
        This blog is your one-stop shop for everything related to User Interface (UI) and User Experience (UX) design. Whether you're a seasoned professional, a curious beginner, or simply interested in how the digital world works, we've got something for you.
        </p>
        <div className="flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959EAD]" />
            <input
              className="placeholder:font-bold placeholder:font-ubuntu font-semibold text-dark-soft placeholder:text-[#959EAD] rounded-lg pl-12 pr-3 w-full py-3 focus:outline-none shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]  md:py-4"
              type="text"
              placeholder="Search article"
            />
          </div>
          <button className="w-full bg-blue-800 text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2">
            Search
          </button>
        </div>
        <div className="flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7">
          <span className="text-dark-light font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:text-base">
            Popular Tags
          </span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
            <li className="rounded-lg bg-blue-800 bg-opacity-10 px-3 py-1.5 text-blue-800 font-semibold">
              UI
            </li>
            <li className="rounded-lg bg-blue-800 bg-opacity-10 px-3 py-1.5 text-blue-800 font-semibold">
              UX
            </li>
          </ul>
        </div>
      </div>

      <div className="hidden lg:block lg:1/2">
        <img
          className="w-full"
          src={images.HeroImage}
          alt="users are reading articles"
        />
      </div>
    </section>
  );
};

export default Hero;