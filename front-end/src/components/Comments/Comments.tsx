import React from "react";
import images from "../../constants/Images/images";

interface CommentsProps {
  comment: any;
  logginedUserId: string;
  affectedComment: any;
  setAffectedComment: any;
  addComment: any;
  parentId: any;
  updateComment: any;
  deleteComment: any;
  replies: any;
}

const Comments = ({
  comment
}: CommentsProps) => {

  return (
    // start comment wrapper
    <div className="flex flex-nowrap items-start gap-x-3 bg-[#F2F4F5] p-3 rounded-lg">
      {/* start user profile picture */}
      <img
        src={images.PostProfileImage}
        alt="user profile"
        className="w-9 h-9 object-cover rounded-full"
      />
      {/* end user profile picture */}
      <div className="flex-1 flex flex-col">
        {/* start user name */}
        <h5 className="font-bold text-dark-hard text-xs lg:text-sm">
          {comment.user.name}
        </h5>
        {/* end user name */}
        {/* start commented date */}
        <span className="text-ts text-dark-light">
          {new Date(comment.createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
          })}
        </span>
      </div>
    </div>
    // end comment wrapper
  );
};

export default Comments;