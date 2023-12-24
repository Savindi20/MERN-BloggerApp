import React, { FC } from "react";
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
      </div>
    </div>
  );
};

export default Card;