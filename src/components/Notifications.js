import { Card, CardContent, Paper, Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import AvatarWithBadge from "./AvatarWithBadge";
import HorMoreBtn from "./HorMoreBtn";

function Notifications() {
  return (
    <Paper square elevation={0} sx={{ bgcolor: "white", padding: "15px 0" }}>
      <Typography sx={{ padding: "0 15px" }}>Earlier</Typography>
      <Card square elevation={0} sx={{ bgcolor: "rgba(50,150,255,0.2)" }}>
        <CardContent sx={{ display: "flex", gap: "10px" }}>
          <AvatarWithBadge />
          <Box>
            <Typography>
              Welcome to Facebook! Tap here to find people you know and add them
              as friends.
            </Typography>
            <Typography sx={{ fontSize: "0.8rem", color: "gray" }}>
              3d
            </Typography>
          </Box>
          <Box sx={{ display: "grid", placeItems: "center" }}>
            <HorMoreBtn />
          </Box>
        </CardContent>
      </Card>
    </Paper>
  );
}

export default Notifications;
