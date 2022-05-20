import { Button } from "@mui/material";
import Add from "../Buttons/Add";
import BaseUserCard from "../Base/BaseUserCard";

function UserCard({ user, buttons, toggleDrawer }) {
  return (
    <BaseUserCard user={user} toggleDrawer={toggleDrawer}>
      <Add friendId={user.id} />
      <Button fullWidth variant="contained" color="inherit">
        Remove
      </Button>
    </BaseUserCard>
  );
}

export default UserCard;
