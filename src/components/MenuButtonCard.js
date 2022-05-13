import { Avatar, Box, Card, CardHeader, Typography } from "@mui/material";
import React from "react";

function MenuButtonCard({ name }) {
  return (
    <Card sx={{ padding: 0, width: "100%" }}>
      <CardHeader
        sx={{ padding: "10px", paddingBottom: "5px" }}
        avatar={<Avatar alt="Travis Howard" src="" width={40} height={40} />}
      />
      <Box sx={{ padding: "0 10px" }}>
        <Typography>{name}</Typography>
      </Box>
    </Card>
  );
}

export default MenuButtonCard;
