import { Divider, Card, CardActions } from "@mui/material";
import Counter from "../Counter";
import CommentContainer from "../Home/CommentContainer";
import CommentsContainer from "../Home/CommentsContainer";
import { useAuthContext } from "../../context/AuthContext";
import Like from "../Buttons/Like";
import useGetUserDataRT from "../../hooks/useGetUserDataRT";
import { useState, useEffect } from "react";
import FB from "../../FB";
import Comment from "../Buttons/Comment";
import Share from "../Buttons/Share";
import { useNavigate } from "react-router-dom";
import BaseCardHeader from "./BaseCardHeader";
import LikesCounter from "../LikesCounter";
import TimeType from "./TimeType";

BaseMediaCard.defaultProps = {
  share: false,
};

export default function BaseMediaCard({ post, loading, children, share }) {
  const {
    photoURL,
    activity,
    timestamp,
    displayName,
    type,
    totalComments,
    id,
    userId,
    likes,
  } = post;
  const navigate = useNavigate();
  const context = useAuthContext();
  const userData = useGetUserDataRT();
  const [comment, setComment] = useState();

  useEffect(() => {
    if (userData.friends) {
      userData.friends.forEach(async (friend) => {
        setComment(
          await FB.getCommentByUserId({
            ownerId: post.userId,
            userId: friend.id,
            postId: post.id,
          })
        );
      });
    }
  }, [userData.friends, post.id, post.userId, context.user.id]);

  const handleClickDetailedPost = (event) => {
    navigate(`/users/${post.userId}/posts/${post.id}`);
  };

  return (
    <Card>
      <BaseCardHeader
        onClick={handleClickDetailedPost}
        activity={activity}
        displayName={displayName}
        photoURL={photoURL}
        loading={loading}
        timestamp={timestamp}
        type={type}
      >
        <TimeType timestamp={timestamp} type={type} loading={loading} />
      </BaseCardHeader>
      {children}
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        {likes && (
          <LikesCounter
            likedPosts={userData.likedPosts}
            postId={post.id}
            likes={likes}
          />
        )}
        <Counter name={"Comments"} counts={totalComments} loading={loading} />
      </CardActions>
      {!share && (
        <>
          <Divider sx={{ width: "97%", margin: "0 auto" }} />
          <CardActions
            sx={{ display: "flex", justifyContent: "space-around", gap: "5px" }}
          >
            <Like post={post} loading={loading} />
            <Comment postId={id} userId={userId} loading={loading} />
            <Share postId={id} ownerId={userId} loading={loading} />
          </CardActions>
          <Divider sx={{ width: "97%", margin: "0 auto" }} />
        </>
      )}
      {comment && comment.length >= 1 && (
        <>
          <CommentsContainer postId={id} userId={userId} />
          <CommentContainer postId={id} userId={userId} loading={loading} />
        </>
      )}
    </Card>
  );
}
