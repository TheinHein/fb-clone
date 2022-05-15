import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  runTransaction,
} from "firebase/firestore";

import { useState } from "react";
import Comment from "./Comment";
import { db } from "../../firebase";
import { useAuthContext } from "../../context/AuthContext";

function CommentContainer({ postId, userId }) {
  const context = useAuthContext();
  const [comment, setComment] = useState("");

  const handleChangeComment = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = async (event) => {
    event.preventDefault();
    await addDoc(collection(db, `users/${userId}/posts/${postId}/comments`), {
      text: comment,
      timestamp: serverTimestamp(),
      by: doc(db, `users/${context.user.id}`),
    });
    const postDocRef = doc(db, `users/${userId}/posts`, `${postId}`);
    await runTransaction(db, async (transaction) => {
      const postDoc = await transaction.get(postDocRef);
      const newTotalComments = postDoc.data().totalComments + 1;
      transaction.update(postDocRef, { totalComments: newTotalComments });
    });
    setComment("");
  };

  return (
    <Comment
      comment={comment}
      onChange={handleChangeComment}
      onSubmit={handleSubmitComment}
      postId={postId}
    />
  );
}

export default CommentContainer;
