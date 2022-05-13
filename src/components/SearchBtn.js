import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBtn({ onClick }) {
  return (
    <IconButton
      size="medium"
      edge="start"
      color="inherit"
      aria-label="search"
      onClick={onClick}
      sx={{ backgroundColor: "#F1F3F4" }}
    >
      <SearchIcon />
    </IconButton>
  );
}

export default SearchBtn;
