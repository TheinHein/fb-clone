import { collection, getDoc, onSnapshot, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import _ from "lodash";
import { useAuthContext } from "../context/AuthContext";
import useGetUserDataFromFirestore from "./useGetUserDataFromFirestore";

export const useGetFriendsPosts = () => {
  const context = useAuthContext();
  const user = useGetUserDataFromFirestore(context.user.id);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    if (user.friends) {
      setLoading(true);
      user.friends.forEach((friend) => {
        onSnapshot(
          collection(db, `users/${friend.id}/posts`),
          (querySnapshot) => {
            querySnapshot.forEach(async (post) => {
              const friend = await getDoc(
                doc(db, `users/${post.data().by.id}`)
              );
              setPosts((prev) =>
                _.orderBy(
                  _.uniqBy(
                    prev.concat({
                      displayName: friend.data().displayName,
                      photoURL: friend.data().photoURL,
                      ...post.data(),
                      id: post.id,
                    }),
                    "id"
                  ),
                  ["timestamp.seconds"],
                  ["desc"]
                )
              );
            });
          }
        );
      });
      setLoading(false);
    }
  }, [user.friends]);

  return { posts, loading };
};
