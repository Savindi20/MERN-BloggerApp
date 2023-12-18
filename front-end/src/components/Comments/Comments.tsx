import React from "react";
import images from "../../constants/Images/images";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CommentForm from "./CommentForm/CommentForm";



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
  comment,
  logginedUserId,
  affectedComment,
  setAffectedComment,
  addComment,
  parentId = null,
  updateComment,
  deleteComment,
  replies,
  
}: CommentsProps) => {
  const isUserLoggined = Boolean(logginedUserId);
  const commentBelongsToUser = logginedUserId === comment.user._id;
  // start replying condition
  const isReplying =
    affectedComment &&
    affectedComment.type === "replying" &&
    affectedComment._id === comment._id;
  // end replying condition
  // start editing condition
  const isEditing =
    affectedComment &&
    affectedComment.type === "editing" &&
    affectedComment._id === comment._id;
  // end editing condition
  // start reply comment ID
  const repiledCommentId = parentId ? parentId : comment._id;
  // end reply comment ID
  // start reply user ID
  const replyOnUserId = comment.user._id;
  // end reply user ID

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
        {/* end commented date */}
        {!isEditing && (
          // start user description
          <p className="font-opensans mt-[10px] text-dark-light">
            {comment.desc}
          </p>
          // end user description
        )}

        {isEditing && (
          <CommentForm
            btnLabel="Update"
            formSubmitHandler={(value) => updateComment(value, comment._id)}
            formCancleHandler={() => setAffectedComment(null)}
            initialText={comment.desc}
          />
        )}

        <div className="flex items-center gap-x-3 text-dark-light font-Ubuntu text-sm mt-3 mb-3">
          {isUserLoggined && (
            // start reply button
            <button
              className="flex items-center space-x-2"
              onClick={() =>
                setAffectedComment({ type: "replying", _id: comment._id })
              }
            >
              <ChatBubbleOutlineIcon className="w-4 h-auto" />
              <span>Reply</span>
            </button>
            //  end reply button
          )}

          {commentBelongsToUser && (
            <>
              {/* start edit button  */}
              <button
                className="flex items-center space-x-2"
                onClick={() =>
                  setAffectedComment({ type: "editing", _id: comment._id })
                }
              >
                <ModeEditOutlineOutlinedIcon className="w-4 h-auto" />
                <span>Edit</span>
              </button>
              {/* end edit button  */}
              {/* start delete button  */}
              <button
                className="flex items-center space-x-2"
                onClick={() => deleteComment(comment._id)}
              >
                <DeleteOutlineIcon className="w-4 h-auto" />
                <span>Delete</span>
              </button>
              {/* end delete button  */}
            </>
          )}
        </div>
        {isReplying && (
          <CommentForm
            btnLabel="Reply"
            formSubmitHandler={(value) =>
              addComment(value, repiledCommentId, replyOnUserId)
            }
            formCancleHandler={() => setAffectedComment(null)}
            initialText={undefined}
          />
        )}
        {/* {replies.length > 0 && ( */}
        <div>
          {replies.map((reply: { _id: React.Key | null | undefined; }) => (
            <Comments
              key={reply._id}
              addComment={addComment}
              affectedComment={affectedComment}
              setAffectedComment={setAffectedComment}
              comment={reply}
              deleteComment={deleteComment}
              logginedUserId={logginedUserId}
              replies={[]}
              updateComment={updateComment}
              parentId={comment._id}
            />
          ))}
        </div>
        {/* )} */}
      </div>
    </div>
    // end comment wrapper
  );
};

export default Comments;