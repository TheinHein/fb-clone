import { useState } from "react";
import { useAuthContext, useAuthContextUpdater } from "../context/AuthContext";
import PhotoPicker from "./PhotoPicker";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../firebase";
import { updateDoc, doc } from "firebase/firestore";
import { CircularProgress, Modal, Typography } from "@mui/material";
import { Stack } from "@mui/material";

function PhotoPickerContainer({ toggleDrawer, id }) {
  const context = useAuthContext();
  const update = useAuthContextUpdater();
  const [photo, setFile] = useState({ file: null, fileURI: null });
  const [loading, setLoading] = useState(false);

  const onSave = async () => {
    setLoading(true);
    await handleFile();
    setLoading(false);
    toggleDrawer(false);
  };

  const handleFile = async () => {
    if (photo.file) {
      const filePath = `${context.user.id}/photos/${photo.file.name}`;
      const newFileRef = ref(storage, filePath);
      const fileSnapShot = await uploadBytesResumable(newFileRef, photo.file);
      const publicFileURL = await getDownloadURL(newFileRef);

      await updateDoc(doc(db, "users", `${context.user.id}`), {
        photoURL: publicFileURL,
        storagePhotoURI: fileSnapShot.metadata.fullPath,
      });
      update.handleUpdate({ photoURL: publicFileURL });
    }
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

  const handleChangeFile = (event) => {
    const file = event.target.files[0];
    setFile((prev) => ({ ...prev, file }));
    readURI(event);
  };

  return (
    <>
      <PhotoPicker
        onChange={handleChangeFile}
        onSave={onSave}
        id={id}
        photo={photo}
      />
      <Modal open={loading}>
        <Stack
          bgcolor="white"
          position="absolute"
          top="50%"
          left="50%"
          p={3}
          alignItems="center"
          borderRadius={2}
          spacing={2}
          sx={{ transform: "translate(-50%,-50%)" }}
        >
          <Typography id="modal-modal-description" variant="h6" component="h3">
            Setting profile picture
          </Typography>
          <CircularProgress />
        </Stack>
      </Modal>
    </>
  );
}

export default PhotoPickerContainer;
