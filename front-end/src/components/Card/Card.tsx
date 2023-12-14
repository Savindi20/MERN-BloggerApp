import React, { FC, useEffect, useState } from "react";
import { PostProps } from "../../types/PostProps";
import { image } from "../../types/Image";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";
import { UserProps } from "../../types/User";

const Card: FC<PostProps> = (props) => { // props: PostProps
  const [imageList, setImageList] = useState<image[]>([]); // imageList: image[]
  const navigate = useNavigate(); // Add useNavigate hook
  const [userList, setUserList] = useState<UserProps[]>([]);

  useEffect(() => { // useEffect
    retrieveImage();
    retrieveAllUsers();
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

  const retrieveAllUsers = () => {
    // retrieve all posts
    axios
      .get("user")
      .then((res) => {
        console.log(res);
        setUserList(res.data.responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCardClick = (postId: string) => {
    localStorage.setItem("postId", postId); // Store postId in localStorage
    navigate(`/blog/${postId}`); // Navigate to post details page
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
    </div>
  );
};

export default Card;
