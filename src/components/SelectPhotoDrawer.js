import { Box, Divider, IconButton, Paper, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PhotoPickerContainer from "./PhotoPickerContainer";

function SelectPhotoDrawer({ toggleDrawer }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        elevation={0}
        square
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          size="small"
          edge="start"
          color="inherit"
          aria-label="search"
          onClick={toggleDrawer}
          sx={{ m: 1 }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <Typography
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          Select Photo
        </Typography>
      </Paper>
      <Divider />
      <PhotoPickerContainer
        toggleDrawer={toggleDrawer}
        id={"profile-pic-picker"}
      />
    </Box>
  );
}

export default SelectPhotoDrawer;
