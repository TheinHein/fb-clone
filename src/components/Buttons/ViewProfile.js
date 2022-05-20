import { Button } from "@mui/material";

function ViewProfile({ handleClickShowProfile }) {
  return (
    <Button fullWidth variant="contained" onClick={handleClickShowProfile}>
      View Profile
    </Button>
  );
}

export default ViewProfile;
