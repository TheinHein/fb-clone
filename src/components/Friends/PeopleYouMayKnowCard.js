import React from "react";
import FriendCard from "./FriendCard";
import PeopleYouMayKnowButtons from "./PeopleYouMayKnowButtons";
import { useAuthContext } from "../../context/AuthContext";
import { db } from "../../firebase";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

function PeopleYouMayKnowCard({ friend }) {
  const context = useAuthContext();

  const addFriend = async () => {
    await updateDoc(doc(db, "users", context.user.id), {
      requestedFriends: arrayUnion(doc(db, `users/${friend.id}`)),
    });
    addUserToPendingRequests();
  };

  const addUserToPendingRequests = async () => {
    await updateDoc(doc(db, "users", friend.id), {
      pendingRequests: arrayUnion(doc(db, `users/${context.user.id}`)),
    });
  };

  return (
    <FriendCard
      friend={friend}
      buttons={<PeopleYouMayKnowButtons addFriend={addFriend} />}
    />
  );
}

export default PeopleYouMayKnowCard;
