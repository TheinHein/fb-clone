import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { useAuthContext } from "../context/AuthContext";
import useGetUserDataFromFirestore from "./useGetUserDataFromFirestore";
import addUserDataToFirestore from "../addUserDataToFirestore";

export const useAddFriendToUser = (friendId) => {
  const context = useAuthContext();
  const user = useGetUserDataFromFirestore(context.user.id);
  addUserDataToFirestore({ ...user, requested: [db.doc("users" + friendId)] });
  return user;
};
