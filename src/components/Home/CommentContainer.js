import { useState } from "react";
import Comment from "./Comment";
import FB from "../../FB";
import { useAuthContext } from "../../context/AuthContext";

function CommentContainer({ postId, ownerId }) {
  const [comment, setComment] = useState("");
  const context = useAuthContext();

  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = async (event) => {
    event.preventDefault();
    await FB.createComment({
      ownerId,
      userId: context.user.id,
      postId,
      comment,
    });
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
