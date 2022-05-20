import { useState } from "react";
import Comment from "./Comment";
import FB from "../../FB";
import { useAuthContext } from "../../context/AuthContext";
import { Avatar, Skeleton, Stack } from "@mui/material";

function CommentContainer({ postId, ownerId, loading }) {
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
    <>
      {loading ? (
        <Stack direction="row" gap={2} width={"100%"} p={1}>
          <Skeleton variant="circular">
            <Avatar />
          </Skeleton>
          <Skeleton width="100%" sx={{ borderRadius: "9999px" }} />
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            sx={{ flex: "none" }}
          />
        </Stack>
      ) : (
        <Comment
          comment={comment}
          onChange={handleChangeComment}
          onSubmit={handleSubmitComment}
          postId={postId}
        />
      )}
    </>
  );
}

export default CommentContainer;
