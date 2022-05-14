import SwipeableTemporaryDrawer from "../SwipeableTemporaryDrawer";
import EditProfileDrawer from "../EditProfileDrawer";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ProfileAvatar from "./ProfileAvatar";
import { useAuthContext } from "../../context/AuthContext";
import { Button, Stack } from "@mui/material";

function CoverPhoto() {
  const context = useAuthContext();
  return (
    <Stack spacing={2}>
      <ProfileAvatar
        displayName={context.user.displayName}
        avatarSrc={context.user.photoURL}
      />

      <Stack direction="row" spacing={1}>
        <Button
          fullWidth
          startIcon={<AddCircleIcon />}
          endIcon={"Add to Story"}
          variant="blue"
        />
        <SwipeableTemporaryDrawer
          anchor={"right"}
          button={(toggleDrawer) => (
            <Button
              fullWidth
              startIcon={<EditIcon />}
              endIcon={"Edit Profile"}
              onClick={() => toggleDrawer(true)}
              variant="grey"
            />
          )}
          drawer={(toggleDrawer) => (
            <EditProfileDrawer toggleDrawer={() => toggleDrawer(false)} />
          )}
        />
        <Button variant="grey">
          <MoreHorizIcon />
        </Button>
      </Stack>
    </Stack>
  );
}

export default CoverPhoto;
