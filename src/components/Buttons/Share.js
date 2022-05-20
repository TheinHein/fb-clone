import { Button } from "@mui/material";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";

function Share() {
  return (
    <Button
      size="small"
      fullWidth
      startIcon={<ReplyOutlinedIcon />}
      endIcon="Share"
      color="inherit"
    />
  );
}

export default Share;
