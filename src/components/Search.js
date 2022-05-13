import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import { alpha } from "@mui/material/styles";

function Search({ children }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexGrow: "1",
        height: "32px",
        margin: "0 12px",
        borderRadius: "9999px",
        backgroundColor: alpha(theme.palette.common.black, 0.15),
        "&:hover": {
          backgroundColor: alpha(theme.palette.common.black, 0.25),
        },
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          marginLeft: theme.spacing(3),
          width: "auto",
        },
      }}
    >
      {children}
    </Box>
  );
}

export default Search;
