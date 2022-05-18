import { IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function Back({ toggleDrawer }) {
  return (
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
  );
}

export default Back;
