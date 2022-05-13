import Box from "@mui/material/Box";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";

function PostStatus({ timestamp, icon }) {
  const calcTimeDistance = () => {
    return formatDistanceToNowStrict(timestamp.toDate());
  };
  return (
    <Box
      sx={{
        fontSize: "0.7rem",
        display: "flex",
        alignItems: "center",
        gap: "5px",
      }}
    >
      {timestamp && <span>{calcTimeDistance()}</span>}
      <span> &#9679;</span>
      {icon}
    </Box>
  );
}

export default PostStatus;
