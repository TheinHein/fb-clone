import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";

function ClearBtn({ onClick }) {
  return (
    <IconButton
      aria-label="hide post"
      sx={{ width: "fit-content" }}
      onClick={onClick}
    >
      <ClearIcon fontSize="small" />
    </IconButton>
  );
}

export default ClearBtn;
