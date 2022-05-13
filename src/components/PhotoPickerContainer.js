import { useState } from "react";
import { useAuthContext, useAuthContextUpdater } from "../context/AuthContext";
import PhotoPicker from "./PhotoPicker";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../firebase";
import { updateDoc, doc } from "firebase/firestore";

function PhotoPickerContainer({ toggleDrawer, id }) {
  const context = useAuthContext();
  const update = useAuthContextUpdater();
  const [photo, setFile] = useState({ file: null, fileURI: null });

  const onSave = async () => {
    await handleFile();
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
    <PhotoPicker
      onChange={handleChangeFile}
      onSave={onSave}
      id={id}
      photo={photo}
    />
  );
}

export default PhotoPickerContainer;
