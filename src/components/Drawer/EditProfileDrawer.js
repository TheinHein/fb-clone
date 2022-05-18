import { Typography } from "@mui/material";
import About from "../Profile/About";
import ProfilePic from "../Profile/EditProfile/ProfilePic";
import CoverPhoto from "../Profile/EditProfile/CoverPhoto";
import BaseDrawer from "../Base/BaseDrawer";
import Back from "../Buttons/Back";

function EditProfileDrawer({ toggleDrawer }) {
  return (
    <BaseDrawer
      toggleDrawer={toggleDrawer}
      header={
        <>
          <Back toggleDrawer={toggleDrawer} />
          <Typography
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            variant="h3"
          >
            Edit Profile
          </Typography>
        </>
      }
      body={
        <>
          <ProfilePic />
          <CoverPhoto />
          <Typography>Bio</Typography>
          <Typography>Describe yourself...</Typography>
          <Typography>Details</Typography>
          <About />
        </>
      }
    />
  );
}

export default EditProfileDrawer;
