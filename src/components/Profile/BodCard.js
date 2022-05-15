import Box from "@mui/material/Box";

function BodCard({ content }) {
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

export default BodCard;
