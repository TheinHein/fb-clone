import { Typography, Avatar, Button, Stack } from "@mui/material";
import SwipeableTemporaryDrawer from "../SwipeableTemporaryDrawer";
import SelectPhotoDrawer from "../SelectPhotoDrawer";
import { useAuthContext } from "../../context/AuthContext";

function ProfilePic() {
  const context = useAuthContext();
  return (
    <Stack spacing={1} alignItems="center">
      <Stack direction="row" justifyContent="space-between" width="100%">
        <Typography variant="h3">Profile Picture</Typography>
        <SwipeableTemporaryDrawer
          anchor={"bottom"}
          button={(toggleDrawer) => (
            <Button size="small" onClick={() => toggleDrawer(true)}>
              Add
            </Button>
          )}
          drawer={(toggleDrawer) => (
            <SelectPhotoDrawer toggleDrawer={() => toggleDrawer(false)} />
          )}
        />
      </Stack>
      <Avatar
        sx={{ width: "150px", height: "150px" }}
        src={context.user.photoURL}
      />
    </Stack>
  );
}

export default ProfilePic;
