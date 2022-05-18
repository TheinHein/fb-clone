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
import PeopleIcon from "@mui/icons-material/People";
import BodCard from "../Profile/BodCard";
import PostStatus from "../PostStatus";
import Counter from "../Counter";
import ClearBtn from "../ClearBtn";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CommentContainer from "./CommentContainer";
import CommentsContainer from "./CommentsContainer";
import { useAuthContext } from "../../context/AuthContext";
import useGetUserData from "../../hooks/useGetUserData";

function Post({ post = {}, loading, handleLike }) {
  const {
    photoURL,
    fileURL,
    text,
    content,
    timestamp,
    displayName,
    id,
    userId,
    likes,
  } = post;

  const context = useAuthContext();
  const userData = useGetUserData(context.user.id);
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
          <Typography>
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
            <PostStatus
              timestamp={timestamp}
              icon={<PeopleIcon sx={{ fontSize: "1rem" }} />}
            />
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
        <Typography>
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
        {content && <BodCard content={content} />}
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
            {/* <div>
              {userData.likedPosts &&
              userData.likedPosts.some((p) => p.id === post.id)
                ? `You and ${likes.length - 1} others `
                : likes.length}
              likes
            </div> */}
            <Counter name={"Comments"} counts={2} />
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
          <Button
            fullWidth
            variant="muted"
            onClick={handleLike}
            disabled={
              userData.likedPosts &&
              userData.likedPosts.some((p) => p.id === post.id)
            }
          >
            Like
          </Button>
        )}
      </CardActions>
      <Divider sx={{ width: "97%", margin: "0 auto" }} />
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
    </Card>
  );
}
