import React from "react";
import BaseMediaCard from "../Base/BaseMediaCard";

function PostCard({ post = {}, loading, handleLike }) {
  return (
    <BaseMediaCard post={post} loading={loading} handleLike={handleLike} />
  );
}

export default PostCard;
