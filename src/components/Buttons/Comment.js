import { Button } from "@mui/material";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { useNavigate } from "react-router-dom";

function Comment({ postId, userId, disabled }) {
  const navigate = useNavigate();

  return (
    <Button
      disabled={disabled}
      onClick={() => navigate(`/users/${userId}/posts/${postId}`)}
      size="small"
      color="inherit"
      fullWidth
      startIcon={<ChatBubbleOutlineOutlinedIcon />}
      endIcon="Comment"
    />
  );
}

export default Comment;
