import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Add from "./Buttons/Add";
import BaseUserCard from "./Base/BaseUserCard";

function UserCard({ user, buttons }) {
  const navigate = useNavigate();
  const handleClickShowProfile = () => {
    navigate(`/users/${user.id}`);
  };
  return (
    <BaseUserCard user={user} handleClickShowProfile={handleClickShowProfile}>
      <Add friendId={user.id} />
      <Button variant="contained" color="inherit">
        Remove
      </Button>
    </BaseUserCard>
  );
}

export default UserCard;
