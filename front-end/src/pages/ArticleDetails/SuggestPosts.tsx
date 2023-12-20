import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PostDetails } from "../../types/PostDetails";
import axios from "../../axios";

interface CardProps {
  className?: string;
  header: string;
  tags: string[];
}

const SuggestPosts = ({ className, header, tags }: CardProps) => {
  const [allPosts, setAllPosts] = useState<PostDetails[]>([]); // Use PostDetails type for allPosts state

  useEffect(() => {
    // use effect
    AllPosts();
  }, []);

  const AllPosts = () => {
    // retrieve all posts
    axios
      .get(`post`)
      .then((res) => {
        setAllPosts(res.data.responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
      <div className="flex flex-wrap gap-x-2 gap-y-2 mt-4">
        {allPosts.map((item, index) => {
          return (
            <Link
              key={index}
              to=""
              className="inline-block rounded-md px-3 py-1.5 bg-purple-600 font-Ubuntu text-xs text-white md:text-sm transition-transform duration-300 hover:scale-105 shadow-2xl"
            >
              {item.tags.join(", ")}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SuggestPosts;