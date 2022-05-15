import { Avatar, Button, Stack, Typography } from "@mui/material";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";

function CommentCard({ displayName, timestamp, text, photoURL }) {
  const calcTimeDistance = () => {
    return formatDistanceToNowStrict(timestamp.toDate());
  };
  return (
    <Stack direction="row" spacing={1} p={1}>
      <Avatar src={photoURL} />
      <Stack>
        <Stack bgcolor="rgb(220,220,220)" p={1} spacing={1} borderRadius={2}>
          <Typography>{displayName}</Typography>
          <Typography>{text}</Typography>
        </Stack>
        <Stack direction="row" pt={0.5} spacing={1}>
          {timestamp && (
            <Typography variant="muted">{calcTimeDistance()}</Typography>
          )}
          <Button size="small" sx={{ color: "gray", minWidth: 0 }}>
            Like
          </Button>
          <Button size="small" sx={{ color: "gray", minWidth: 0 }}>
            Reply
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default CommentCard;
