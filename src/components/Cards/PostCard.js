import React from "react";
import BaseMediaCard from "../Base/BaseMediaCard";

function PostCard({ post, loading }) {
  return <BaseMediaCard post={post} loading={loading} />;
}

export default PostCard;
