import { Button, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import FB from "../FB";

function Accept({ friendId }) {
  const context = useAuthContext();
  const [accepted, setAccepted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClickAcceptFriend = async (event) => {
    event.stopPropagation();
    setLoading(true);
    await FB.handleFriendShip(context.user.id, friendId, "accept");
    setLoading(false);
    setAccepted(true);
  };

  return (
    <Button
      variant="contained"
      disabled={accepted}
      onClick={handleClickAcceptFriend}
    >
      {loading ? (
        <CircularProgress />
      ) : (
        <>{accepted ? "Accepted" : "Confirm"}</>
      )}
    </Button>
  );
}

export default Accept;
