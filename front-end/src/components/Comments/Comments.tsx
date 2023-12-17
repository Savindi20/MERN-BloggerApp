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
    </div>
    // end comment wrapper
  );
};

export default Comments;