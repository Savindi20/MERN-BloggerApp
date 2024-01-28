import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PostDetails } from "../../../../types/PostDetails";
import axios from "../../../../axios";
import { image } from "../../../../types/Image";

interface CardProps {
  className?: string;
  header: string;
  tags: string[];
}

const SuggestPosts = ({ className, header, tags }: CardProps) => {
  const [allPosts, setAllPosts] = useState<PostDetails[]>([]); // Use PostDetails type for allPosts state
  const [imageList, setImageList] = useState<image[]>([]); // imageList: image[]

  useEffect(() => {
    // use effect
    AllPosts();
    retrieveImage();
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

  const retrieveImage = () => {
    // retrieve image based on imageId
    axios
      .get(`image`)
      .then((res) => {
        console.log(res);
        setImageList(res.data.responseData);
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
      <div className="grid gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
        {allPosts?.map((post) => (
          // start id
          <div
            key={post._id}
            className="flex space-x-3 flex-nowrap items-center"
          >
            {/* end id */}
            {/* start image  */}
            <img
              className="aspect-square object-cover rounded-lg w-1/3 transition-transform duration-300 hover:scale-105 shadow-2xl"
              src={
                imageList.find((image) => image._id === post?.imageId)?.imageUrl
              }
              alt="ui ux"
            />
            {/* end image  */}

            {/* start title */}
            <div className="text-sm font-Ubuntu text-dark-hard font-medium">
              <h6 className="text-blue-600 text-sm font-Ubuntu inline-block mt-4 md:text-base">
                {post?.title}
              </h6>
              <h3 className="text-sm font-Ubuntu text-dark-hard font-medium md:text-base lg:text-lg">
                {post.caption}
              </h3>
              {/* start date  */}
              <span className="text-xs opacity-60">{post.date}</span>
              {/* end date  */}
            </div>
            {/* end title  */}
          </div>
        ))}
      </div>
      <h2 className="font-Ubuntu font-medium text-dark-hard mt-8 md:text-xl">
        Tags
      </h2>
      <div className="flex flex-wrap gap-x-2 gap-y-2 mt-4">
        {allPosts.map((item, index) => {
          return (
            <Link
              key={index}
              to=""
              className="inline-block rounded-md px-3 py-1.5 bg-blue-600 font-Ubuntu text-xs text-white md:text-sm transition-transform duration-300 hover:scale-105 shadow-2xl"
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
