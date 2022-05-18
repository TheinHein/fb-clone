import { Button } from "@mui/material";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

function Comment() {
  return (
    <Button
      size="small"
      fullWidth
      startIcon={<ChatBubbleOutlineOutlinedIcon />}
      endIcon="Comment"
    />
  );
}

export default Comment;
