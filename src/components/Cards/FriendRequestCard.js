import { Button } from "@mui/material";
import React from "react";
import BaseUserCard from "../Base/BaseUserCard";
import Accept from "../Buttons/Accept";

function FriendRequestCard({ friend }) {
  return (
    <BaseUserCard user={friend}>
      <Accept friendId={friend.id} />
      <Button variant="contained" color="inherit">
        Delete
      </Button>
    </BaseUserCard>
  );
}

export default FriendRequestCard;
