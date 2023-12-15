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