import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/system";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

export default function ProfileAvatar({ displayName, avatarSrc }) {
  return (
    <>
      <Box
        sx={{
          bgcolor: "gray",
          width: "100%",
          height: 200,
          marginBottom: "100px",
          position: "relative",
          borderRadius: "15px 15px 0 0",
        }}
      >
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <CameraAltIcon
              alt="Remy Sharp"
              sx={{
                width: 30,
                height: 30,
                border: "2px solid white",
                borderRadius: "100%",
                bgcolor: "gray",
                color: "white",
                padding: "5px",
              }}
            />
          }
          sx={{
            position: "absolute",
            top: "calc(100% - 100px)",
            left: "calc(50% - 100px)",
          }}
        >
          <Avatar
            alt={displayName}
            src={avatarSrc}
            sx={{ width: 200, height: 200, border: "2px solid white" }}
          />
        </Badge>
      </Box>
    </>
  );
}
