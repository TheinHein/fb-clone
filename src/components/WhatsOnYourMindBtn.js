import { Chip } from "@mui/material";

function WhatsOnYourMindBtn({ handleClickDrawer, displayName }) {
  return (
    <Chip
      disableRipple
      disableTouchRipple
      clickable
      onClick={handleClickDrawer}
      label={`What's on your mind, ${displayName} ?`}
      sx={{
        fontWeight: "normal",
        display: "flex",
        justifyContent: "left",
        backgroundColor: "white",
        ":active": {
          boxShadow: "none",
        },
        ":hover": {
          bgcolor: "white",
        },
      }}
    />
  );
}

export default WhatsOnYourMindBtn;
