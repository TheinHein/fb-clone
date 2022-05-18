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

export default function BaseMediaCard({ post = {}, loading }) {
  const {
    photoURL,
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

  const context = useAuthContext();
  const userData = useGetUserDataRT();

  const [comment, setComment] = useState();

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

  return (
    <Card>
      <CardHeader
        sx={{ paddingBottom: 1 }}
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
              displayName
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
      <CardContent sx={{ paddingTop: "0" }}>
        <Typography variant="body2">
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
            <CardMedia component="img" src={fileURL} alt="sample" />
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
                ? `You and ${likes.length} others `
                : likes.length}{" "}
              likes
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
            <Comment />
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
    </Card>
  );
}
