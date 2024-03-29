import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PostDetails } from "../../../types/PostDetails";
import { image } from "../../../types/Image";

import axios from "../../../axios";
import SuggestPosts from "./container/AdminSuggestedPosts/AdminSuggestPosts";
import AdminLayout from "../AdminLayout";
import images from "../../../constants/Images/images";
import BreadCrumbs from "../../../components/BreadCrumbs/BreadCrumbs";
import CommentsContainer from "../../../components/Comments/CommentsContainer/CommentsContainer";
import SocialShareButtons from "../../../components/SocialShareButtons/SocialShareButtons";

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
      <AdminLayout>
        {/* start articleDetails section */}
        <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
          <article className="flex-2">
            <BreadCrumbs data={breadCrumbsData} />
            {/* image start  */}
            <img
              className="rounded-xl w-full transition-transform duration-300 hover:scale-105 shadow-2xl"
              src={
                imageList.find((image) => image._id === post?.imageId)?.imageUrl
              }
              alt="ui ux"
            />
            {/* image end  */}
            {/* start discription */}
            <Link
              to={""}
              className="text-blue-600 text-sm font-Ubuntu inline-block mt-4 md:text-base"
            >
              {post?.title}
            </Link>
            <h1 className="text-xl font-medium font-Ubuntu mt-4 text-dark-hard md:text-[26px]">
              {post?.caption}
            </h1>
            <div className="mt-4 text-dark-soft">
              <p className="leading-7">{post?.description}</p>
            </div>
            {/* end discription */}
            {/* start comments container  */}
            <CommentsContainer className="mt-10" value="" logginedUserId="a" />
            {/* end comments container  */}
          </article>
          <div>
            {/* start suggested posts */}
              <SuggestPosts
                header={"Latest Articles"}
                tags={tagsData}
                className="mt-8 lg:mt-0 lg-max-w-xs"
              />
            {/* end suggested posts */}
            {/* start social share buttons */}
            <div className="mt-7 flex gap-4">
              <h2 className="font-Ubuntu font-medium text-dark-hard mb-4 md:text-xl">
                Share On:
              </h2>
              <SocialShareButtons
                url={encodeURI("")}
                title={encodeURIComponent("")}
              />
            </div>
            {/* end social share buttons */}
          </div>
        </section>
        {/* end articleDetails section */}
      </AdminLayout>
    </div>
  );
};

export default AdminArticleDetails;