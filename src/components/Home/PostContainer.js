import Post from "./Post";
import { arrayUnion, doc, runTransaction, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useAuthContext } from "../../context/AuthContext";

function PostContainer({ post = {}, loading }) {
  const context = useAuthContext();

  const handleLike = async () => {
    const postDocRef = doc(db, `users/${post.userId}/posts`, `${post.id}`);

    await runTransaction(db, async (transaction) => {
      const postDoc = await transaction.get(postDocRef);
      if (!postDoc.exists()) {
        throw new Error("POST not exist!");
      }
      const newLikes = arrayUnion(doc(db, `users/${context.user.id}`));
      transaction.update(postDocRef, { likes: newLikes });
    });

    await updateDoc(doc(db, "users", context.user.id), {
      likedPosts: arrayUnion(doc(db, `users/${post.userId}/posts/${post.id}`)),
    });
  };

  return <Post post={post} loading={loading} handleLike={handleLike} />;
}

export default PostContainer;
