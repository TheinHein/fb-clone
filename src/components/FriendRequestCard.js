import FriendCard from "./FriendCard";
import FriendRequestButtons from "./FriendRequestButtons";
import { useAuthContext } from "../context/AuthContext";
import { db } from "../firebase";
import { doc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";

function FriendRequestCard({ friend, removeFromPendingRequest }) {
  const context = useAuthContext();

  const acceptFriend = async () => {
    await updateDoc(doc(db, "users", context.user.id), {
      friends: arrayUnion(doc(db, `users/${friend.id}`)),
      pendingRequests: arrayRemove(doc(db, `users/${friend.id}`)),
    });
    addUserToFriend();
    removeFromPendingRequest((prev) =>
      prev.filter((pendingRequest) => pendingRequest.id !== friend.id)
    );
  };

  const addUserToFriend = async () => {
    await updateDoc(doc(db, "users", friend.id), {
      friends: arrayUnion(doc(db, `users/${context.user.id}`)),
      requestedFriends: arrayRemove(doc(db, `users/${context.user.id}`)),
    });
  };

  return (
    <FriendCard
      friend={friend}
      buttons={<FriendRequestButtons acceptFriend={acceptFriend} />}
    />
  );
}

export default FriendRequestCard;
