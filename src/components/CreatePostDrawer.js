import { useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
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
const LOADING_IMAGE_URL = "https://www.google.com/images/spin-32.gif?a";

function CreatePostDrawer({ toggleDrawer }) {
  const context = useAuthContext();

  const [input, setInput] = useState("");
  const [file, setFile] = useState({ file: null, fileURI: null });

  const handleClickPost = async () => {
    const postRef = await addDoc(
      collection(db, `users/${context.user.id}/posts`),
      {
        text: input,
        timestamp: serverTimestamp(),
        by: doc(db, `users/${context.user.id}`),
        fileURL: file.file ? LOADING_IMAGE_URL : "",
      }
    );
    toggleDrawer();
    setInput("");
    handleFile(file.file, postRef);
  };

  const handleFile = async (file, postRef) => {
    if (file) {
      const filePath = `${context.user.id}/${postRef.id}/${file.name}`;
      const newFileRef = ref(storage, filePath);
      const fileSnapShot = await uploadBytesResumable(newFileRef, file);
      const publicFileURL = await getDownloadURL(newFileRef);

      await updateDoc(doc(db, `users/${context.user.id}/posts/${postRef.id}`), {
        fileURL: publicFileURL,
        storageURI: fileSnapShot.metadata.fullPath,
      });
    }
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
          subheader={<UnstyledSelectObjectValues />}
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
