import { Divider, Box, IconButton, Typography, Stack } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import About from "../Profile/About";
import ProfilePic from "./ProfilePic";
import CoverPhoto from "./CoverPhoto";

function EditProfileDrawer({ toggleDrawer }) {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          size="small"
          edge="start"
          color="inherit"
          aria-label="search"
          onClick={toggleDrawer}
          sx={{ m: 1 }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <Typography
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
          variant="h2"
        >
          Edit Profile
        </Typography>
      </Box>
      <Divider sx={{ width: "100%" }} />
      <Stack
        m="0 auto"
        p={1}
        spacing={1}
        width={{ md: "50%" }}
        divider={<Divider />}
      >
        <ProfilePic />
        <CoverPhoto />
        <Typography>Bio</Typography>
        <Typography>Describe yourself...</Typography>
        <Typography>Details</Typography>
        <About />
      </Stack>
    </>
  );
}

export default EditProfileDrawer;
