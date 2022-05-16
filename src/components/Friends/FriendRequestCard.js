import FriendCard from "./FriendCard";
import FriendRequestButtons from "./FriendRequestButtons";
import { useAuthContext } from "../../context/AuthContext";
import FB from "../../FB";

function FriendRequestCard({ friend, removeFromPendingRequest }) {
  const context = useAuthContext();

  const acceptFriend = async () => {
    await FB.handleFriendShip(context.user.id, friend.id, "accept");
    removeFromPendingRequest((prev) =>
      prev.filter((pendingRequest) => pendingRequest.id !== friend.id)
    );
  };

  return (
    <FriendCard
      friend={friend}
      buttons={<FriendRequestButtons acceptFriend={acceptFriend} />}
    />
  );
}

export default FriendRequestCard;
