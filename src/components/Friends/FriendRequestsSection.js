import { Button, Stack, Typography } from "@mui/material";
import { useAuthContext } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import FriendRequestCard from "../FriendRequestCard";
import FB from "../../FB";

function FriendRequestsSection() {
  const context = useAuthContext();
  const [pendingRequests, setPendingRequests] = useState([]);

  useEffect(() => {
    FB.getAllPendingRequests(context.user.id, setPendingRequests);
  }, [context.user.id]);

  return (
    <Stack spacing={2}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h3">Friend Requests</Typography>
        <Button arial-label="see all friend requests" size="small">
          See All
        </Button>
      </Stack>
      {pendingRequests.map((pendingRequest) => (
        <FriendRequestCard friend={pendingRequest} key={pendingRequest.id} />
      ))}
      <Button fullWidth variant="grey">
        See All
      </Button>
    </Stack>
  );
}

export default FriendRequestsSection;
