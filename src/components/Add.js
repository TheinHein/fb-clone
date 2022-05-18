import { Button } from "@mui/material";
import React from "react";
import { useAuthContext } from "../context/AuthContext";
import FB from "../FB";

function Add({ friendId }) {
  const context = useAuthContext();

  const handleClickAddFriend = async (event) => {
    event.stopPropagation();
    await FB.handleFriendShip(context.user.id, friendId, "request");
  };

  return (
    <Button variant="contained" onClick={handleClickAddFriend}>
      Add Friend
    </Button>
  );
}

export default Add;
