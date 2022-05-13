import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import GroupsIcon from "@mui/icons-material/Groups";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";

import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";

export const reelRoomGroup = [
  {
    name: "Reel",
    icon: <MovieCreationIcon sx={{ color: "red" }} />,
  },
  {
    name: "Room",
    icon: <VideoCallIcon sx={{ color: "purple" }} />,
  },
  {
    name: "Group",
    icon: <GroupsIcon sx={{ color: "blue" }} />,
  },
];

export const likeCommentShare = [
  {
    name: "Like",
    icon: <ThumbUpOutlinedIcon />,
  },
  {
    name: "Comment",
    icon: <ChatBubbleOutlineOutlinedIcon />,
  },
  {
    name: "Share",
    icon: <ReplyOutlinedIcon />,
  },
];
