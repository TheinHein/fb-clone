import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  CardHeader,
  CardMedia,
  Divider,
  Skeleton,
  Button,
  Stack,
  IconButton,
  Modal,
} from "@mui/material";
import Counter from "../Counter";
import ClearBtn from "../Buttons/Clear";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CommentContainer from "../Home/CommentContainer";
import CommentsContainer from "../Home/CommentsContainer";
import { useAuthContext } from "../../context/AuthContext";
import Time from "../Time";
import Type from "../Type";
import Like from "../Buttons/Like";
import checkArray from "../../utils/checkArray";
import useGetUserDataRT from "../../hooks/useGetUserDataRT";

import { useState, useEffect } from "react";
import FB from "../../FB";
import Comment from "../Buttons/Comment";
import Share from "../Buttons/Share";
import { useNavigate } from "react-router-dom";

export default function BaseMediaCard({ post = {}, loading, children }) {
  const {
    photoURL,
    activity,
    fileURL,
    text,
    timestamp,
    displayName,
    type,
    totalComments,
    id,
    userId,
    likes,
  } = post;
  const navigate = useNavigate();
  const context = useAuthContext();
  const userData = useGetUserDataRT();
  const [comment, setComment] = useState();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (userData.friends) {
      userData.friends.forEach(async (friend) => {
        setComment(
          await FB.getCommentByUserId({
            ownerId: post.userId,
            userId: friend.id,
            postId: post.id,
          })
        );
      });
    }
  }, [userData.friends, post.id, post.userId, context.user.id]);

  const generateText = () => {
    let text = "";
    let pronoun = "their";

    if (activity === "profile picture") {
      text = `updated ${pronoun} profile picture`;
    }
    return text;
  };

  const handleClickDetailedPost = (event) => {
    navigate(`/users/${post.userId}/posts/${post.id}`);
  };

  return (
    <Card>
      <CardHeader
        sx={{ cursor: "pointer", paddingBottom: 1 }}
        onClick={handleClickDetailedPost}
        avatar={
          loading ? (
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          ) : (
            <Avatar
              aria-label={displayName}
              src={photoURL}
              width={40}
              height={40}
            />
          )
        }
        title={
          <Typography variant="h5">
            {loading ? (
              <Skeleton animation="wave" width="40%" height={10} />
            ) : (
              <>
                {displayName}{" "}
                {activity && (
                  <Typography component="span" variant="body2">
                    {generateText()}
                  </Typography>
                )}
              </>
            )}
          </Typography>
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="20%" />
          ) : (
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              fontSize="0.75rem"
            >
              {timestamp && <Time timestamp={timestamp} />}
              <Typography sx={{ fontSize: "inherit" }}> &#9679;</Typography>
              {type && <Type type={type} />}
            </Stack>
          )
        }
        action={
          loading ? (
            <Stack direction="row" spacing={2}>
              <Skeleton animation="wave" height={30} width={30} />
              <Skeleton animation="wave" height={30} width={30} />
            </Stack>
          ) : (
            <>
              <IconButton>
                <MoreHorizIcon />
              </IconButton>
              <ClearBtn />
            </>
          )
        }
      />
      {children ? (
        <>{children} </>
      ) : (
        <>
          <CardContent sx={{ paddingTop: "0" }}>
            <Typography variant="body2" noWrap>
              {loading ? (
                <>
                  <Skeleton
                    animation="wave"
                    height={10}
                    sx={{ marginBottom: 0.5 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </>
              ) : (
                text
              )}
            </Typography>
          </CardContent>

          {fileURL && (
            <>
              {loading ? (
                <Skeleton height={190} animation="wave" variant="rectangular" />
              ) : (
                <CardMedia
                  component="img"
                  src={fileURL}
                  alt={"pic"}
                  onClick={() => setModal(true)}
                  sx={{ cursor: "pointer" }}
                  loading="lazy"
                />
              )}
            </>
          )}
        </>
      )}
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        {loading ? (
          <>
            <Skeleton
              animation="wave"
              variant="rectangular"
              width="100"
              height={10}
            />
            <Skeleton
              animation="wave"
              variant="rectangular"
              width="100"
              height={10}
            />
          </>
        ) : (
          <>
            <Typography
              variant="body2"
              sx={{
                color: "gray",
                fontSize: "0.7rem",
                textDecoration: "underline",
              }}
            >
              {userData.likedPosts &&
              checkArray({
                array: userData.likedPosts,
                prop: "id",
                check: post.id,
              })
                ? `You and ${likes.length !== 0 && likes.length - 1} others `
                : likes.length}{" "}
              like
            </Typography>
            <Counter name={"Comments"} counts={totalComments} />
          </>
        )}
      </CardActions>
      <Divider sx={{ width: "97%", margin: "0 auto" }} />
      <CardActions>
        {loading ? (
          <Stack direction="row" justifyContent="space-evenly" width={"100%"}>
            <Skeleton>
              <Button />
            </Skeleton>
            <Skeleton>
              <Button />
            </Skeleton>
            <Skeleton>
              <Button />
            </Skeleton>
          </Stack>
        ) : (
          <>
            <Like post={post} />
            <Comment postId={id} userId={userId} />
            <Share />
          </>
        )}
      </CardActions>
      <Divider sx={{ width: "97%", margin: "0 auto" }} />
      {comment && comment.length >= 1 && (
        <>
          <CommentsContainer postId={id} userId={userId} />
          {loading ? (
            <Stack direction="row" gap={2} width={"100%"} p={1}>
              <Skeleton variant="circular">
                <Avatar />
              </Skeleton>
              <Skeleton width="100%" sx={{ borderRadius: "9999px" }} />
              <Skeleton
                variant="circular"
                width={40}
                height={40}
                sx={{ flex: "none" }}
              />
            </Stack>
          ) : (
            <CommentContainer postId={id} userId={userId} />
          )}
        </>
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
            <CardMedia component="img" src={fileURL} />
          </Stack>
        </Modal>
      )}
    </Card>
  );
}
