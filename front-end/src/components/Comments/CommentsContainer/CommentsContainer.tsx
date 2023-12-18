import React, { useEffect, useState } from "react";
import CommentForm from "../CommentForm/CommentForm";
import { getCommentsData } from "../../../data/Comments/Comments";
// start introducing props
interface CommentsContainerProps {
  className?: string;
  value: any;
  logginedUserId: string;
}
// end introducing props

// start comment props
interface Comment {
  _id: string;
  user: {
    _id: string;
    name: string;
  };
  desc: string;
  post: string;
  parent: string | null;
  replyOnUser: string | null;
  createdAt: string;
}
// end comment props

const CommentsContainer = ({
  className,
  logginedUserId,
}: CommentsContainerProps) => {
  // start state
  const [comments, setComments] = useState<Comment[]>([]);
  // end state

  const [setAffectedComment] = useState(null);

  console.log(comments);

  useEffect(() => {
    (async () => {
      const commentData = await getCommentsData();
      setComments(commentData);
    })();
  }, []);

  // start add comment
  const addCommentHandler = (
    { value }: CommentsContainerProps,
    parent = null,
    replyOnUser = null
  ) => {
    const newComment = {
      _id: Math.random().toString(),
      user: {
        _id: "a",
        name: "Savindi Dadallage",
      },
      desc: value,
      post: "1",
      parent: parent,
      replyOnUser: replyOnUser,
      createdAt: new Date().toISOString(),
    };
    // start set comments
    setComments((curState) => {
      return [newComment, ...curState];
    });
  };
  // end add comment

  return (
    <div className={`${className}`}>
      {/* start added comment form  */}
      <CommentForm
        btnLabel="Send"
        formSubmitHandler={(value) =>
          addCommentHandler({ value, logginedUserId })
        }
        formCancleHandler={undefined}
        initialText={undefined}
      />
      {/* end added comment form  */}
    </div>
  );
};

export default CommentsContainer;