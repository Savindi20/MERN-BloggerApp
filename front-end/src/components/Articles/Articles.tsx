import { useEffect, useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import axios from "../../axios";

const Articles = () => {
  const [showAllPosts, setShowAllPosts] = useState(false);

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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="flex flex-col container mx-auto px-5 py-10">
      <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
      </div>
      {!showAllPosts && (
        <button
          onClick={handleShowAllPosts}
          className="mx-auto flex items-center gap-x-2 font-bold text-purple-600 border-2 border-purple-600 px-6 py-3 rounded-lg transition duration-300 ease-in-out hover:bg-gradient-to-r hover:from-purple-600 hover:to-purple-800 hover:border-purple-800 hover:text-white"
        >
          <span>More articles</span>
          <KeyboardArrowRightIcon className="w-3 h-3" />
        </button>
      )}
    </section>
  );
};

export default Articles;