import { IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PhotoPickerContainer from "../PhotoPickerContainer";
import BaseDrawer from "../Base/BaseDrawer";

function SelectPhotoDrawer({ toggleDrawer }) {
  return (
    <>
      <BaseDrawer
        toggleDrawer={toggleDrawer}
        header={
          <>
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
              variant="h3"
            >
              Select Profile Picture
            </Typography>
          </>
        }
        body={
          <PhotoPickerContainer
            toggleDrawer={toggleDrawer}
            id={"profile-pic-picker"}
          />
        }
      />
    </>
  );
}

export default SelectPhotoDrawer;
