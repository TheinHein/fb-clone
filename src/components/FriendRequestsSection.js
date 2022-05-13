import { useTheme } from "@emotion/react";
import { Box, Chip, Typography } from "@mui/material";
import { useAuthContext } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import useGetUserDataFromFirestore from "../hooks/useGetUserDataFromFirestore";
import BaseButton from "./BaseButton";
import FriendRequestCard from "./FriendRequestCard";
import _ from "lodash";

function FriendRequestsSection() {
  const theme = useTheme();
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
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography>Friend Requests</Typography>
        <Chip
          clickable
          label="See All"
          sx={{ bgcolor: "white", color: "#4B92F5" }}
          arial-label="see all friend requests"
        />
      </Box>
      {pendingRequests.map((pendingRequest) => (
        <FriendRequestCard
          friend={pendingRequest}
          removeFromPendingRequest={setPendingRequests}
          key={pendingRequest.id}
        />
      ))}
      <Box>
        <BaseButton
          label="See All"
          labelColor={theme.palette.common.black}
          btnColor={theme.palette.grey[200]}
        />
      </Box>
    </>
  );
}

export default FriendRequestsSection;
