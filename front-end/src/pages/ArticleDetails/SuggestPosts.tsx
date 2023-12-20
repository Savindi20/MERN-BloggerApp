import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  className?: string;
  header: string;
  tags: string[];
}

const SuggestPosts = ({ className, header, tags }: CardProps) => {

  return (
    <div
      className={`w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-lg p-4 ${className}`}
    >
      <h2 className="font-Ubuntu font-medium text-dark-hard md:text-xl">
        {header}
      </h2>
      <h2 className="font-Ubuntu font-medium text-dark-hard mt-8 md:text-xl">
        Tags
      </h2>
    </div>
  );
};

export default SuggestPosts;