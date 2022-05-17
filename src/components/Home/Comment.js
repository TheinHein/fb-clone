import {
  Avatar,
  FormControl,
  IconButton,
  Stack,
  Input,
  InputAdornment,
} from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";

function Comment({ comment, onChange, onSubmit, postId }) {
  return (
    <Stack
      direction="row"
      alignItems={"center"}
      justifyContent="space-between"
      spacing={1}
      p={1}
      component="form"
      onSubmit={onSubmit}
      id={`comment-form-${postId}`}
    >
      <Avatar />
      <FormControl fullWidth>
        <Input
          disableUnderline
          value={comment}
          placeholder="Write a comment..."
          onChange={onChange}
          endAdornment={
            <>
              <InputAdornment position="end">
                <IconButton size="small" onClick={() => console.log("click")}>
                  <CameraAltOutlinedIcon />
                </IconButton>
              </InputAdornment>
              <InputAdornment position="end">
                <IconButton size="small" onClick={() => console.log("click")}>
                  <SentimentSatisfiedOutlinedIcon />
                </IconButton>
              </InputAdornment>
            </>
          }
        />
      </FormControl>
      <IconButton form={`comment-form-${postId}`} type="submit">
        <SendOutlinedIcon />
      </IconButton>
    </Stack>
  );
}

export default Comment;
