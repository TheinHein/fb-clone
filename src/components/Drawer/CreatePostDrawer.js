import { useState } from "react";

import {
  Avatar,
  IconButton,
  Button,
  Box,
  Typography,
  Input,
  Stack,
} from "@mui/material";
import UnstyledSelectObjectValues from "../Select";
import WhatsOnYourMind from "../Inputs/WhatsOnYourMind";
import { useAuthContext } from "../../context/AuthContext";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import Clear from "../Buttons/Clear";
import FB from "../../FB";
import BaseDrawer from "../Base/BaseDrawer";

function CreatePostDrawer({ toggleDrawer }) {
  const context = useAuthContext();

  const [input, setInput] = useState("");
  const [file, setFile] = useState({ file: "", fileURI: "" });
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
    <BaseDrawer
      toggleDrawer={toggleDrawer}
      header={
        <>
          <Clear onClick={toggleDrawer} />
          <Typography
            variant="h3"
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
        </>
      }
      body={
        <>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" spacing={2}>
              <Avatar
                aria-label={context.user.displayName}
                src={context.user.photoURL}
              />
              <Stack spacing={0.5}>
                <Typography variant="h5">{context.user.displayName}</Typography>
                <UnstyledSelectObjectValues
                  option={type}
                  onChange={handleChangeType}
                />
              </Stack>
            </Stack>
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
          </Stack>

          <WhatsOnYourMind
            input={input}
            handleChangeInput={handleChangeInput}
          />

          {file.fileURI && (
            <>
              <Clear onClick={() => setFile({ file: null, fileURI: null })} />
              <Box
                sx={{ width: "60%" }}
                component={"img"}
                src={file.fileURI}
              ></Box>
            </>
          )}
        </>
      }
    />
  );
}

export default CreatePostDrawer;
