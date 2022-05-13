import Box from "@mui/material/Box";

function Bod({ content }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
      }}
    >
      {content}
    </Box>
  );
}

export default Bod;
