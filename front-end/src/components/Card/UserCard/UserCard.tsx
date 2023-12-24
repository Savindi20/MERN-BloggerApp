import React, { FC, useEffect, useState } from "react";
import images from "../../../constants/Images/images";
import CheckIcon from "@mui/icons-material/Check";
import { PostProps } from "../../../types/PostProps";
import { image } from "../../../types/Image";
import axios from "../../../axios";
import { useNavigate } from "react-router-dom";

const Card: FC<PostProps> = (props) => { // props: PostProps
  const [imageList, setImageList] = useState<image[]>([]); // imageList: image[]
  const navigate = useNavigate(); // Add useNavigate hook

  useEffect(() => { // useEffect
    retrieveImage();
  }, []);

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

  const handleCardClick = (postId: string) => {
    localStorage.setItem("postId", postId); // Store postId in localStorage
    navigate(`/adminArticleDetails/${postId}`); // Navigate to post details page
  };

  return (
    <div
      className={`rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20 transition-transform duration-300 hover:scale-105 ${ props.className }`}
      onClick={() => handleCardClick(props._id)}
    >
      <img
        src={imageList.find((image) => image._id === props.imageId)?.imageUrl}
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
            <div className="flex flex-col">
              <h4 className="font-bold italic text-dark-soft text-sm md:text-base">
                {props.userName}
              </h4>
              <div className="flex items-center gap-x-2">
                <span className="bg-[#36B37E] w-fit bg-opacity-20 p-1.5 rounded-full">
                  <CheckIcon className="w-1.5 h-1.5 text-[#36B37E]" />
                </span>
                <span className="italic text-dark-light text-xs md:text-sm">
                  Verified writer
                </span>
              </div>
            </div>
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