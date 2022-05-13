import { IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function HorMoreBtn() {
  return (
    <IconButton aria-label="options" sx={{ width: "fit-content" }}>
      <MoreHorizIcon fontSize="small" />
    </IconButton>
  );
}

export default HorMoreBtn;
