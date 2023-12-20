import { useEffect, useState } from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import { Link} from "react-router-dom";
import CommentsContainer from "../../components/Comments/CommentsContainer/CommentsContainer";
import SocialShareButtons from "../../components/SocialShareButtons/SocialShareButtons";
import axios from "../../axios";
import { PostDetails } from "../../types/PostDetails";
import { image } from "../../types/Image";

const breadCrumbsData = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/blog" },
  { name: "Article title", link: `/blog/1` },
];

const ArticleDetails = (): JSX.Element => {
  const [postList, setPostList] = useState<PostDetails[]>([]);
  const [post, setPost] = useState<PostDetails | null>(null); // Use PostDetails type for post state
  const [imageList, setImageList] = useState<image[]>([]); // imageList: image[]
  const [allPosts, setAllPosts] = useState<PostDetails[]>([]); // Use PostDetails type for allPosts state

  useEffect(() => {
    // use effect
    retrieveAllPosts();
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

  return (
    <div>
      <MainLayout>
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
              className="text-purple-600 text-sm font-Ubuntu inline-block mt-4 md:text-base"
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
      </MainLayout>
    </div>
  );
};

export default ArticleDetails;