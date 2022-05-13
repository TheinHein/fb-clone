import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchIconWrapper() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SearchIcon />
    </Box>
  );
}

export default SearchIconWrapper;
