import { useState } from "react";
import Comment from "./Comment";
import FB from "../../FB";

function CommentContainer({ postId, userId }) {
  const [comment, setComment] = useState("");

  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = async (event) => {
    event.preventDefault();
    await FB.createComment(userId, postId, comment);
    setComment("");
  };

  return (
    <Comment
      comment={comment}
      onChange={handleChangeComment}
      onSubmit={handleSubmitComment}
      postId={postId}
    />
  );
}

export default CommentContainer;
