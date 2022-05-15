import { Button, Stack, Typography } from "@mui/material";
import { useAuthContext } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import useGetUserDataFromFirestore from "../../hooks/useGetUserDataFromFirestore";
import FriendRequestCard from "./FriendRequestCard";
import _ from "lodash";

function FriendRequestsSection() {
  const context = useAuthContext();
  const user = useGetUserDataFromFirestore(context.user.id);
  const [pendingRequests, setPendingRequests] = useState([]);

  useEffect(() => {
    if (user.pendingRequests) {
      user.pendingRequests.forEach(async (pendingRequests) => {
        const docSnap = await getDoc(doc(db, "users", pendingRequests.id));
        const { displayName, photoURL } = docSnap.data();
        setPendingRequests((prev) =>
          _.uniqBy(prev.concat({ displayName, photoURL, id: docSnap.id }), "id")
        );
      });
    }
  }, [user.pendingRequests]);

  return (
    <Stack spacing={2}>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h3">Friend Requests</Typography>
        <Button arial-label="see all friend requests" size="small">
          See All
        </Button>
      </Stack>
      {pendingRequests.map((pendingRequest) => (
        <FriendRequestCard
          friend={pendingRequest}
          removeFromPendingRequest={setPendingRequests}
          key={pendingRequest.id}
        />
      ))}
      <Button fullWidth variant="grey">
        See All
      </Button>
    </Stack>
  );
}

export default FriendRequestsSection;
