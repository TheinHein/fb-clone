import { Avatar, AvatarGroup, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function BaseUserCard({ user, children }) {
  const navigate = useNavigate();
  const handleClickShowProfile = (event) => {
    event.stopPropagation();
    navigate(`/users/${user.id}`);
  };
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={1}
      spacing={1}
      bgcolor="white"
      onClick={handleClickShowProfile}
    >
      <Avatar
        alt={user.displayName}
        src={user.photoURL}
        sx={{ width: 80, height: 80 }}
      />
      <Stack spacing={1}>
        <Typography variant="h5">{user.displayName}</Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <AvatarGroup
            max={3}
            sx={{
              "& .MuiAvatarGroup-avatar": {
                width: 24,
                height: 24,
              },
            }}
          >
            <Avatar alt="sample" src="" />
            <Avatar alt="sample" src="" />
          </AvatarGroup>
          <Typography variant="body2">2 mutual friends</Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          {children}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default BaseUserCard;
