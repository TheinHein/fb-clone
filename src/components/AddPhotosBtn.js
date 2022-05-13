import { IconButton, Input } from "@mui/material";
import React from "react";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";

function AddPhotosBtn({ setFile }) {
  function handleChangeFile(event) {
    const file = event.target.files[0];
    setFile(file);
  }
  return (
    <label htmlFor="file">
      <Input
        onChange={handleChangeFile}
        accept="image/*"
        id="file"
        type="file"
        style={{ visibility: "hidden" }}
      />
      <IconButton aria-label="upload picture" component="span">
        <PhotoLibraryIcon sx={{ color: "green" }} />
      </IconButton>
    </label>
  );
}

export default AddPhotosBtn;
