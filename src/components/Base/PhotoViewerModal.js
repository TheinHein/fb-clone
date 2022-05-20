import { CardMedia, Modal, Stack } from "@mui/material";
import React from "react";

function PhotoViewerModal(props) {
  const { open, onClose, fileURL } = props;
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{ bgcolor: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
    >
      <Stack
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
        }}
      >
        <CardMedia component="img" src={fileURL} />
      </Stack>
    </Modal>
  );
}

export default PhotoViewerModal;
