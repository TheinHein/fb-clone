import { Button } from "@mui/material";
import React from "react";
import CommentCard from "./CommentCard";

function Comments({ fetchMoreComments, comments }) {
  return (
    <>
      {comments.map((comment) => (
        <CommentCard
          key={comment.id}
          text={comment.text}
          displayName={comment.displayName}
          photoURL={comment.photoURL}
          timestamp={comment.timestamp}
        />
      ))}
      <Button onClick={() => fetchMoreComments(3)}>MORE</Button>
    </>
  );
}

export default Comments;
