import { Button } from "@mui/material";
import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import FB from "../../FB";

function Add({ friendId }) {
  const context = useAuthContext();
  const [isAdded, setIsAdded] = useState(false);

  const handleClickAddFriend = async (event) => {
    event.stopPropagation();
    await FB.handleFriendShip(context.user.id, friendId, "request");
    setIsAdded(true);
  };

  return (
    <Button
      fullWidth
      variant="contained"
      onClick={handleClickAddFriend}
      disabled={isAdded}
    >
      {isAdded ? "Requested" : "Add Friend"}
    </Button>
  );
}

export default Add;
