import { Button } from "@mui/material";
import React from "react";
import CommentCard from "./CommentCard";

function Comments({ comments, lastVisible, handleClickMoreComments }) {
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
      {/* {lastVisible && <Button onClick={handleClickMoreComments}>MORE</Button>} */}
    </>
  );
}

export default Comments;
