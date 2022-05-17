import { useState } from "react";

import {
  Avatar,
  Card,
  CardHeader,
  Divider,
  Paper,
  IconButton,
  Button,
  Box,
  Typography,
  Input,
} from "@mui/material";
import UnstyledSelectObjectValues from "./Select";
import UnstyledInputBasic from "./UnstyledInputBasic";
import { useAuthContext } from "../context/AuthContext";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import ClearBtn from "./ClearBtn";
import FB from "../FB";

function CreatePostDrawer({ toggleDrawer }) {
  const context = useAuthContext();

  const [input, setInput] = useState("");
  const [file, setFile] = useState({ file: null, fileURI: null });
  const [type, setType] = useState("Public");

  const handleClickPost = async () => {
    FB.createPost({
      userId: context.user.id,
      text: input,
      file: file.file,
      type,
    });

    toggleDrawer();
    setInput("");
  };
  const handleChangeType = (newType) => {
    setType(newType);
  };
  const handleChangeInput = (event) => {
    setInput(event.target.value);
  };

  const readURI = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = function (ev) {
        setFile((prev) => ({ ...prev, fileURI: ev.target.result }));
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  function handleChangeFile(event) {
    const file = event.target.files[0];
    setFile((prev) => ({ ...prev, file }));
    readURI(event);
  }

  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "5px 10px",
        }}
      >
        <ClearBtn onClick={toggleDrawer} />
        <Typography
          variant="h2"
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          Create Post
        </Typography>
        <Button
          disabled={!input}
          disableElevation
          variant="text"
          size="small"
          color="inherit"
          aria-label="post"
          onClick={handleClickPost}
        >
          Post
        </Button>
      </Box>
      <Divider sx={{ width: "100%" }} />
      <Card sx={{ width: "100%" }}>
        <CardHeader
          avatar={
            <Avatar
              aria-label={context.user.displayName}
              src={context.user.photoURL}
              sx={{ width: 30, height: 30 }}
            />
          }
          title={context.user.displayName}
          subheader={
            <UnstyledSelectObjectValues
              option={type}
              onChange={handleChangeType}
            />
          }
          action={
            <label htmlFor="photoUpload">
              <Input
                onChange={handleChangeFile}
                accept="image/*"
                id="photoUpload"
                type="file"
                sx={{ display: "none" }}
              />
              <IconButton aria-label="upload picture" component="span">
                <PhotoLibraryIcon sx={{ color: "green" }} />
              </IconButton>
            </label>
          }
        />
      </Card>
      <UnstyledInputBasic
        user={context.user}
        input={input}
        handleChangeInput={handleChangeInput}
      />
      {file.fileURI && (
        <>
          <ClearBtn onClick={() => setFile({ file: null, fileURI: null })} />
          <Box sx={{ width: "60%" }} component={"img"} src={file.fileURI}></Box>
        </>
      )}
    </Paper>
  );
}

export default CreatePostDrawer;
