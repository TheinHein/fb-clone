import { useNavigate } from "react-router-dom";
import BaseUserCard from "../Base/BaseUserCard";
import ViewProfile from "../Buttons/ViewProfile";

function FriendCard({ user, toggleDrawer }) {
  const navigate = useNavigate();
  const handleClickShowProfile = () => {
    navigate(`/users/${user.id}`);
    toggleDrawer();
  };
  return (
    <BaseUserCard user={user} toggleDrawer={toggleDrawer}>
      <ViewProfile
        friendId={user.id}
        handleClickShowProfile={handleClickShowProfile}
      />
    </BaseUserCard>
  );
}

export default FriendCard;
