import React, { useEffect, useState } from "react";
import Comments from "./Comments";
import FB from "../../FB";

function CommentsContainer({ postId, userId }) {
  const [comments, setComments] = useState([]);
  const [lastVisible, setLastVisible] = useState(null);

  const handleClickMoreComments = () => {
    FB.getMoreComments({
      userId,
      postId,
      lastVisible,
      setComments,
      setLastVisible,
    });
  };
  useEffect(() => {
    FB.getInitComments({ userId, postId, setComments, setLastVisible });
  }, [userId, postId]);

  return (
    <Comments
      comments={comments}
      lastVisible={lastVisible}
      handleClickMoreComments={handleClickMoreComments}
    />
  );
}

export default CommentsContainer;
