import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";

function EditProfile({ toggleDrawer }) {
  return (
    <Button
      fullWidth
      startIcon={<EditIcon />}
      endIcon={"Edit Profile"}
      onClick={toggleDrawer}
      variant="contained"
      color="inherit"
    />
  );
}

export default EditProfile;
