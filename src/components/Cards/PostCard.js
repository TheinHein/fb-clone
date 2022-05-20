import React from "react";
import BaseMediaCard from "../Base/BaseMediaCard";

function PostCard({ post, loading, share }) {
  return <BaseMediaCard post={post} loading={loading} share={share} />;
}

export default PostCard;
