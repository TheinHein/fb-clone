import {
  IconButton,
  Box,
  Input,
  Paper,
  Typography,
  Skeleton,
  Button,
} from "@mui/material";
import React from "react";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";

function PhotoPicker(props) {
  const { onChange, id, photo, onSave } = props;
  return (
    <>
      <label htmlFor={id}>
        <Input
          onChange={onChange}
          accept="image/*"
          id={id}
          type="file"
          style={{ visibility: "hidden" }}
        />
        <IconButton aria-label="upload picture" component="span">
          <PhotoLibraryIcon sx={{ color: "green" }} />
        </IconButton>
      </label>
      {photo.file && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            alignItems: "center",
          }}
        >
          <Typography>Preview profile picture</Typography>
          {photo.fileURI ? (
            <Paper
              sx={{ width: "300px", height: "300px", borderRadius: "50%" }}
              src={photo.fileURI}
              alt={photo.file.name}
              component="img"
            />
          ) : (
            <Skeleton
              animation="pulse"
              variant="circular"
              width={300}
              height={300}
            />
          )}
          <Button onClick={onSave}>Save</Button>
        </Box>
      )}
    </>
  );
}

export default PhotoPicker;
