import {
  CardContent,
  CardMedia,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import useGetUserData from "../../hooks/useGetUserData";
import BaseMediaCard from "../Base/BaseMediaCard";

function ActivityCard({ post, loading }) {
  const context = useAuthContext();
  const user = useGetUserData(context.user.id);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dob =
    user.dob && user.dob.toDate().toLocaleDateString("en-US", options);
  const [modal, setModal] = useState(false);
  return (
    <BaseMediaCard post={post} loading={loading}>
      {post.activity === "profile picture" && (
        <CardMedia
          onClick={() => setModal(true)}
          component="img"
          src={post.fileURL}
          sx={{
            margin: "0 auto",
            width: "90%",
            aspectRatio: "1/1",
            borderRadius: "100%",
            padding: "10px",
            border: "0.5px solid black",
            cursor: "pointer",
          }}
        />
      )}
      {post.activity === "dob" && (
        <CardContent>
          <Typography variant="h3" align="center">
            Born on {dob}
          </Typography>
        </CardContent>
      )}
      {modal && (
        <Modal
          open={modal}
          onClose={() => setModal(false)}
          sx={{ bgcolor: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
        >
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
            }}
          >
            <CardMedia component="img" src={post.fileURL} />
          </Stack>
        </Modal>
      )}
    </BaseMediaCard>
  );
}

export default ActivityCard;
