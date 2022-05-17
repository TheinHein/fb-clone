import { Button } from "@mui/material";
import React from "react";
import { useAuthContext } from "../context/AuthContext";
import BaseUserCard from "./Base/BaseUserCard";
import FB from "../FB";

function FriendRequestCard({ friend, removeFromPendingRequest }) {
  const context = useAuthContext();

  const acceptFriend = async () => {
    await FB.handleFriendShip(context.user.id, friend.id, "accept");
    removeFromPendingRequest((prev) =>
      prev.filter((pendingRequest) => pendingRequest.id !== friend.id)
    );
  };

  return (
    <BaseUserCard user={friend}>
      <Button variant="contained" onClick={acceptFriend}>
        Confirm
      </Button>
      <Button variant="contained" color="inherit">
        Delete
      </Button>
    </BaseUserCard>
  );
}

export default FriendRequestCard;
