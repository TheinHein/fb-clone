import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import React, { useCallback, useEffect, useState } from "react";
import { db } from "../../firebase";
import _ from "lodash";
import Comments from "./Comments";

function CommentsContainer({ postId, userId }) {
  const [comments, setComments] = useState([]);
  const [lastVisible, setLastVisible] = useState({});

  const fetchComment = useCallback(async () => {
    const q = query(
      collection(db, `users/${userId}/posts/${postId}/comments`),
      orderBy("timestamp", "desc"),
      limit(1)
    );
    const querySnapshot = await getDocs(q);
    handle(querySnapshot);
  }, [postId, userId]);

  const fetchMoreComments = useCallback(
    async (amount) => {
      const q = query(
        collection(db, `users/${userId}/posts/${postId}/comments`),
        orderBy("timestamp", "desc"),
        startAfter(lastVisible),
        limit(amount)
      );
      const querySnapshot = await getDocs(q);
      handle(querySnapshot);
    },
    [postId, userId, lastVisible]
  );

  const handle = (querySnapshot) => {
    setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
    querySnapshot.forEach(async (comment) => {
      const user = await getDoc(doc(db, `users/${comment.data().by.id}`));
      setComments((prev) =>
        _.orderBy(
          _.uniqBy(
            prev.concat({
              displayName: user.data().displayName,
              photoURL: user.data().photoURL,
              userId: user.id,
              ...comment.data(),
              id: comment.id,
            }),
            "id"
          ),
          ["timestamp.seconds"],
          ["desc"]
        )
      );
    });
  };

  useEffect(() => {
    fetchComment();
  }, [fetchComment]);

  return <Comments comments={comments} fetchMoreComments={fetchMoreComments} />;
}

export default CommentsContainer;