import { Button } from "@mui/material";
import React from "react";
import CommentCard from "./CommentCard";

function Comments({ comments, handleClickMoreComments }) {
  return (
    <>
      <Button sx={{ width: "fit-content" }} onClick={handleClickMoreComments}>
        View previous comments
      </Button>
      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          text={comment.text}
          displayName={comment.displayName}
          photoURL={comment.photoURL}
          timestamp={comment.timestamp}
        />
      ))}
    </>
  );
}

export default Comments;
