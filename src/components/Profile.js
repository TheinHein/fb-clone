import ProfileAvatar from "./ProfileAvatar";
import {
  Chip,
  Button,
  Divider,
  Box,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import BaseButton from "./BaseButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CreatePostCard from "./CreatePostCard";
import ChatIcon from "@mui/icons-material/Chat";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import FaceIcon from "@mui/icons-material/Face";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import Post from "./Post";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import { useTheme } from "@emotion/react";
import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";
import useGetUserDataFromFirestore from "../hooks/useGetUserDataFromFirestore";
import SwipeableTemporaryDrawer from "./SwipeableTemporaryDrawer";
import EditProfileDrawer from "./EditProfileDrawer";
import About from "./About";

function Profile() {
  const context = useAuthContext();
  const user = useGetUserDataFromFirestore(context.user.id);
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          padding: "15px",
          marginBottom: "15px",
          bgcolor: theme.palette.common.white,
        }}
      >
        <ProfileAvatar
          displayName={user.displayName}
          avatarSrc={user.photoURL}
        />
        <Button>aerEF</Button>
        <Typography
          variant="h1"
          align="center"
          sx={{ padding: "15px 0", fontSize: "1.3rem" }}
        >
          {user.displayName}
        </Typography>
        <Box sx={{ display: "flex", gap: "5px" }}>
          <Box sx={{ display: "flex", width: "100%", gap: "5px" }}>
            <BaseButton label="Add to story" icon={<AddCircleIcon />} />
            <SwipeableTemporaryDrawer
              anchor={"right"}
              button={(toggleDrawer) => (
                <BaseButton
                  label="Edit profile"
                  labelColor={theme.palette.common.black}
                  btnColor={theme.palette.grey[300]}
                  icon={<EditIcon />}
                  onClick={() => toggleDrawer(true)}
                />
              )}
              drawer={(toggleDrawer) => (
                <EditProfileDrawer toggleDrawer={() => toggleDrawer(false)} />
              )}
            />
          </Box>
          <div>
            <BaseButton
              icon={<MoreHorizIcon />}
              labelColor={theme.palette.common.black}
              btnColor={theme.palette.grey[300]}
            />
          </div>
        </Box>

        <Divider sx={{ margin: "10px 0" }} />

        <About />

        <BaseButton
          label="Edit public details"
          labelColor={theme.palette.common.black}
          btnColor={theme.palette.info.light}
        />

        <Divider sx={{ margin: "10px 0" }} />

        <Typography>Friends</Typography>

        <Divider sx={{ margin: "10px 0" }} />

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Posts</Typography>

          <Chip
            clickable
            label="Filters"
            sx={{ bgcolor: "white", color: "#4B92F5" }}
            arial-label="see all friend requests"
          />
        </Box>

        {!context.loading && <CreatePostCard user={context.user} />}

        <Box sx={{ margin: "10px 0" }}>
          <BaseButton
            icon={<ChatIcon />}
            label="Manage posts"
            labelColor={theme.palette.common.black}
            btnColor={theme.palette.grey[300]}
          />
        </Box>
      </Box>

      <Box
        sx={{
          bgcolor: theme.palette.common.white,
          display: "flex",
          flexDirection: "column",
          marginBottom: "5px",
        }}
      >
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable buttons"
          value={value}
          onChange={handleChange}
          sx={{
            padding: "10px",
            display: "flex",
            alignItems: "center",
            "& .Mui-selected": {
              border: "none",
              color: "#00000099",
            },
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          <Tab
            disableRipple
            disableTouchRipple
            icon={<PhotoLibraryIcon />}
            iconPosition="start"
            label="Photos"
            sx={{
              margin: "0 5px",
              textTransform: "capitalize",
              bgcolor: "#f1f3f4",
              borderRadius: "9999px",
              padding: "0 15px",
              minHeight: "fit-content",
              height: "30px",
            }}
          />
          <Tab
            disableRipple
            disableTouchRipple
            icon={<FaceIcon />}
            iconPosition="start"
            label="Avatars"
            sx={{
              margin: "0 5px",
              textTransform: "capitalize",
              bgcolor: "#f1f3f4",
              borderRadius: "9999px",
              padding: "0 15px",
              minHeight: "fit-content",
              height: "30px",
            }}
          />
          <Tab
            disableRipple
            disableTouchRipple
            icon={<AudiotrackIcon />}
            iconPosition="start"
            label="Music"
            sx={{
              margin: "0 5px",
              textTransform: "capitalize",
              bgcolor: "#f1f3f4",
              borderRadius: "9999px",
              padding: "0 15px",
              minHeight: "fit-content",
              height: "30px",
            }}
          />
          <Tab
            disableRipple
            disableTouchRipple
            icon={<EmojiObjectsIcon />}
            iconPosition="start"
            label="Did you know"
            sx={{
              margin: "0 5px",
              textTransform: "capitalize",
              bgcolor: "#f1f3f4",
              borderRadius: "9999px",
              padding: "0 15px",
              minHeight: "fit-content",
              height: "30px",
            }}
          />
        </Tabs>
        <Post
          post={user}
          content={
            <>
              <ChildCareIcon
                sx={{
                  bgcolor: "#4b92f5",
                  width: "50px",
                  height: "50px",
                  borderRadius: "100%",
                  color: "white",
                  padding: "7px",
                }}
              />
              <Typography>Born on May 5, 1996</Typography>
            </>
          }
        />
      </Box>
    </>
  );
}

export default Profile;
