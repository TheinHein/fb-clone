import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BaseUserCard from "./Base/BaseUserCard";

function UserCard({ user, buttons }) {
  const navigate = useNavigate();
  const handleClickShowProfile = () => {
    navigate(`/users/${user.id}`);
  };
  return (
    <BaseUserCard user={user} handleClickShowProfile={handleClickShowProfile}>
      <Button variant="contained">Add Friend</Button>
      <Button variant="contained" color="inherit">
        Remove
      </Button>
    </BaseUserCard>
  );
}

export default UserCard;
