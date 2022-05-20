import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  AppBar,
  Typography,
  Toolbar,
  Box,
  Slide,
} from "@mui/material";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import { useState, forwardRef } from "react";
import WhatsOnYourMind from "../Inputs/WhatsOnYourMind";
import UnstyledSelectObjectValues from "../Select";
import { useAuthContext } from "../../context/AuthContext";
import Clear from "./Clear";
import { doc } from "firebase/firestore";
import FB from "../../FB";

const Transition = forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Share({ postId, ownerId }) {
  const context = useAuthContext();
  const [dialog, setDialog] = useState(false);
  const [type, setType] = useState("Friends");
  const [input, setInput] = useState("");
  const handleChangeInput = (event) => {
    setInput(event.target.value);
  };
  const handleClickShareDialog = () => {
    setDialog((prev) => !prev);
  };
  const handleClickShare = async () => {
    setDialog((prev) => !prev);
    // create post
    const data = {
      text: input,
      activity: "share",
      userId: context.user.id,
      type,
      postId,
      ownerId,
    };

    await FB.createPost(data);
    // update post
    await FB.updatePostSharedBy({ userId: context.user.id, postId, ownerId });
  };
  return (
    <>
      <Button
        onClick={handleClickShareDialog}
        size="small"
        fullWidth
        startIcon={<ReplyOutlinedIcon />}
        endIcon="Share"
        color="inherit"
      />
      <Dialog
        open={dialog}
        fullScreen
        TransitionComponent={Transition}
        aria-labelledby="responsive-dialog-title"
      >
        <AppBar elevation={0} sx={{ bgcolor: "white", position: "relative" }}>
          <Toolbar
            sx={{
              color: "black",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Clear onClick={handleClickShareDialog} />
              <Avatar src={context.user.photoURL} />
              <div>
                <Typography>{context.user.displayName}</Typography>
                <UnstyledSelectObjectValues
                  option={type}
                  onChange={(newType) => setType(newType)}
                />
              </div>
            </Box>

            <Button variant="contained" onClick={handleClickShare}>
              Share Now
            </Button>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <WhatsOnYourMind handleChangeInput={handleChangeInput} />
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
}

export default Share;
