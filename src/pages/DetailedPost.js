import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FB from "../FB";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import {
  AppBar,
  Avatar,
  CssBaseline,
  Divider,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Time from "../components/Time";
import Type from "../components/Type";
import Like from "../components/Buttons/Like";
import Comment from "../components/Buttons/Comment";
import Share from "../components/Buttons/Share";
import CommentContainer from "../components/Home/CommentContainer";
import CommentsContainer from "../components/Home/CommentsContainer";
import { Box } from "@mui/system";

function DetailedPost() {
  const { userId, postId } = useParams();
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const post = await FB.getPost(userId, postId);
      setPost(post);
    })();
  }, [userId, postId]);

  useEffect(() => {
    (async () => {
      const post = await FB.getUserData(userId);
      setUser(post);
    })();
  }, [userId]);

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" elevation={1} color="inherit">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIosNewOutlinedIcon />
          </IconButton>
          <Stack direction="row" spacing={1}>
            <Avatar src={user.photoURL} alt={user.displayName} />
            <Stack>
              <Typography>{user.displayName}</Typography>
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                fontSize="0.75rem"
              >
                {post.timestamp && <Time timestamp={post.timestamp} />}
                <Typography sx={{ fontSize: "inherit" }}> &#9679;</Typography>
                <Type type={post.type} />
              </Stack>
            </Stack>
          </Stack>
          <IconButton>
            <MoreHorizOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Stack
        py={3}
        mx="auto"
        divider={<Divider />}
        bgcolor="white"
        width={{ xs: "100%", md: "60%", lg: "50%" }}
      >
        <>
          <Typography variant="body2" sx={{ padding: "8px" }}>
            {post.text}
          </Typography>
          {post.fileURL && (
            <Box
              component="img"
              src={post.fileURL}
              alt="file"
              loading="lazy"
              width="100%"
              sx={{ marginBottom: "10px" }}
            />
          )}
        </>
        <Stack direction="row" p={1}>
          <Like post={post} />
          <Comment postId={post.id} userId={user.id} />
          <Share />
        </Stack>
        <>
          <Typography variant="h5" sx={{ padding: "8px" }}>
            All comments
          </Typography>
          <CommentsContainer postId={post.id} userId={user.id} />
        </>
      </Stack>
      <Toolbar sx={{ marginTop: "30px" }} />
      <AppBar
        color="inherit"
        position="fixed"
        sx={{ top: "auto", bottom: 0, paddingBottom: "55px", zIndex: "0" }}
        elevation={0}
      >
        <Toolbar>
          <CommentContainer postId={post.id} ownerId={user.id} />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default DetailedPost;
