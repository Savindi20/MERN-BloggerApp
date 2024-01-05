import { useEffect, useState } from "react";
import { PostDetails } from "../../../types/PostDetails";
import { image } from "../../../types/Image";

import axios from "../../../axios";
import images from "../../../constants/Images/images";

const breadCrumbsData = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/blog" },
  { name: "Article title", link: `/blog/1` },
];

// start added tempory data to the posts
const postsData = [
  {
    _id: "1",
    image: images.Post1Image,
    title: "Help ui ux engineer get better education",
    createdAt: "2023-11-28T15:35:53.607+0000",
  },
  {
    _id: "2",
    image: images.Post1Image,
    title: "Help ui ux engineer get better education",
    createdAt: "2023-11-28T15:35:53.607+0000",
  },
  {
    _id: "3",
    image: images.Post1Image,
    title: "Help ui ux engineer get better education",
    createdAt: "2023-11-28T15:35:53.607+0000",
  },
  {
    _id: "4",
    image: images.Post1Image,
    title: "Help ui ux engineer get better education",
    createdAt: "2023-11-28T15:35:53.607+0000",
  },
];
// end added tempory data to the posts

// start tempory tag data
const tagsData: string[] = [
  "UI UX",
  "Theams",
  "React",
  "React Native",
  "Tailwind CSS",
  "Education",
];
// end tempory tag data

const AdminArticleDetails = (): JSX.Element => {
  const [postList, setPostList] = useState<PostDetails[]>([]);
  const [post, setPost] = useState<PostDetails | null>(null); // Use PostDetails type for post state
  const [imageList, setImageList] = useState<image[]>([]); // imageList: image[]
  const [allPosts, setAllPosts] = useState<PostDetails[]>([]); // Use PostDetails type for allPosts state

  useEffect(() => {
    // use effect
    retrieveAllPosts();
    retrieveImage();
    AllPosts();
  }, []);

  const retrieveAllPosts = () => {
    // retrieve all posts
    axios
      .get(`post/${localStorage.getItem("postId")}`)
      .then((res) => {
        setPostList(res.data.responseData);
        const foundPost = res.data.responseData; // Find the post with the given postId);
        setPost(foundPost);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
    <div>
    </div>
  );
};

export default AdminArticleDetails;
