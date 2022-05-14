import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import FaceIcon from "@mui/icons-material/Face";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import { useState } from "react";
import { Tab, Tabs } from "@mui/material";

const Shortcuts = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      variant="scrollable"
      scrollButtons="auto"
      aria-label="scrollable buttons"
      value={value}
      onChange={handleChange}
      sx={{
        padding: "10px",
        display: "flex",
        alignItems: "center",
        "& .Mui-selected": {
          border: "none",
          color: "#00000099",
        },
        "& .MuiTabs-indicator": {
          display: "none",
        },
      }}
    >
      <Tab
        disableRipple
        disableTouchRipple
        icon={<PhotoLibraryIcon />}
        iconPosition="start"
        label="Photos"
        sx={{
          margin: "0 5px",
          textTransform: "capitalize",
          bgcolor: "#f1f3f4",
          borderRadius: "9999px",
          padding: "0 15px",
          minHeight: "fit-content",
          height: "30px",
        }}
      />
      <Tab
        disableRipple
        disableTouchRipple
        icon={<FaceIcon />}
        iconPosition="start"
        label="Avatars"
        sx={{
          margin: "0 5px",
          textTransform: "capitalize",
          bgcolor: "#f1f3f4",
          borderRadius: "9999px",
          padding: "0 15px",
          minHeight: "fit-content",
          height: "30px",
        }}
      />
      <Tab
        disableRipple
        disableTouchRipple
        icon={<AudiotrackIcon />}
        iconPosition="start"
        label="Music"
        sx={{
          margin: "0 5px",
          textTransform: "capitalize",
          bgcolor: "#f1f3f4",
          borderRadius: "9999px",
          padding: "0 15px",
          minHeight: "fit-content",
          height: "30px",
        }}
      />
      <Tab
        disableRipple
        disableTouchRipple
        icon={<EmojiObjectsIcon />}
        iconPosition="start"
        label="Did you know"
        sx={{
          margin: "0 5px",
          textTransform: "capitalize",
          bgcolor: "#f1f3f4",
          borderRadius: "9999px",
          padding: "0 15px",
          minHeight: "fit-content",
          height: "30px",
        }}
      />
    </Tabs>
  );
};

export default Shortcuts;
