import {
  Divider,
  Box,
  IconButton,
  Paper,
  Typography,
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useAuthContext } from "../context/AuthContext";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import { useTheme } from "@emotion/react";
import About from "./About";
import SwipeableTemporaryDrawer from "./SwipeableTemporaryDrawer";
import SelectPhotoDrawer from "./SelectPhotoDrawer";

function EditProfileDrawer({ toggleDrawer }) {
  const context = useAuthContext();
  const theme = useTheme();

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
        >
          Edit Profile
        </Typography>
      </Box>
      <Divider sx={{ width: "100%" }} />
      <Grid container>
        <Grid item xs={0} md={3} />
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <Card elevation={0} square>
              <CardHeader
                action={
                  <SwipeableTemporaryDrawer
                    anchor={"bottom"}
                    button={(toggleDrawer) => (
                      <Button size="small" onClick={() => toggleDrawer(true)}>
                        Add
                      </Button>
                    )}
                    drawer={(toggleDrawer) => (
                      <SelectPhotoDrawer
                        toggleDrawer={() => toggleDrawer(false)}
                      />
                    )}
                  />
                }
                titleTypographyProps={{ fontSize: "1rem" }}
                title="Profile Picture"
              />
              <CardContent>
                <Avatar
                  sx={{ width: "150px", height: "150px", margin: "0 auto" }}
                  src={context.user.photoURL}
                />
              </CardContent>
            </Card>

            <Divider />
            <Typography>Cover Photo</Typography>
            <Box
              sx={{
                width: "100%",
                height: "250px",
                bgcolor: theme.palette.grey[400],
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PhotoSizeSelectActualOutlinedIcon
                sx={{ color: theme.palette.common.white, fontSize: "1.2rem" }}
              />
            </Box>
            <Divider />
            <Typography>Bio</Typography>
            <Divider />
            <Typography>Describe yourself...</Typography>
            <Divider />
            <Typography>Details</Typography>
            <About />
          </Box>
        </Grid>
        <Grid item xs={0} md={3} />
      </Grid>
    </>
  );
}

export default EditProfileDrawer;
