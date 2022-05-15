import { collection, getDoc, onSnapshot, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import _ from "lodash";
import { useAuthContext } from "../context/AuthContext";
import useGetUserDataFromFirestore from "./useGetUserDataFromFirestore";
import app from "../FB";

export const useGetFriendsPosts = () => {
  const context = useAuthContext();
  const user = useGetUserDataFromFirestore(context.user.id);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    if (user.friends) {
      setLoading(true);
      app.getAllFriendsPosts(context.user.id, setPosts);
      setLoading(false);
    }
  }, [user.friends, context.user.id]);

  return { posts, loading };
};
