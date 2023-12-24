import React, { FC } from "react";
import images from "../../../constants/Images/images";
import { PostProps } from "../../../types/PostProps";

const Card: FC<PostProps> = (props) => { // props: PostProps

  return (
    <div
      className={`rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20 transition-transform duration-300 hover:scale-105 ${ props.className }`}>
      <img
        src=""
        alt="title"
        className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
      />
      <div className="p-5">
        <h2 className="font-Ubuntu font-bold text-xl text-dark-soft md:text-2xl lg:[28px]">
          {props.title}
        </h2>
        <p className="text-dark-light mt-3 text-sm md:text-lg">
          {props.caption}
        </p>
        <div className="flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img
              src={images.PostProfileImage}
              alt="post profile"
              className="w-9 h-9 md:w-10 md:h-10 "
            />
          </div>
          <span className="font-bold text-dark-light italic text-sm md:text-base">
            {props.date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;