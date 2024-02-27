import { useEffect, useState } from "react";
import Card from "../Card/Card";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import axios from "../../axios";
import { PostDetails } from "../../types/PostDetails";

const Articles = () => {
  const [postList, setPostList] = useState<PostDetails[]>([]);
  const [showAllPosts, setShowAllPosts] = useState(false);
  const visiblePosts = showAllPosts ? postList : postList.slice(0, 3);

  const handleShowAllPosts = () => {
    setShowAllPosts(true);
  };

  useEffect(() => {
    // use effect
    retrieveAllPosts();
  }, []);

  const retrieveAllPosts = () => {
    // retrieve all posts
    axios
      .get("post")
      .then((res) => {
        console.log(res);
        setPostList(res.data.responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="flex flex-col container mx-auto px-5 py-10">
      <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
        {visiblePosts.map((post) => (
          <Card
            key={post._id}
            _id={post._id}
            imageId={post.imageId}
            title={post.title}
            caption={post.caption}
            description={post.description}
            date={post.date}
            userName={post.userName}
            tags={post.tags}
            categoryId={post.categoryId}
            className="my-card w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
          />
        ))}
        ;
      </div>
      {!showAllPosts && (
        <button
          onClick={handleShowAllPosts}
          className="mx-auto flex items-center gap-x-2 font-bold text-blue-800 border-2 border-blue-800 px-6 py-3 rounded-lg transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 hover:border-blue-800 hover:text-white"
        >
          <span>More articles</span>
          <KeyboardArrowRightIcon className="w-3 h-3" />
        </button>
      )}
    </section>
  );
};

export default Articles;